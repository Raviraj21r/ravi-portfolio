import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const viteCli = path.join(projectDirectory, 'node_modules', 'vite', 'bin', 'vite.js');
const children = [
  spawn(process.execPath, ['server/index.js'], {
    cwd: projectDirectory,
    stdio: 'inherit',
  }),
  spawn(process.execPath, [viteCli, '--host', '0.0.0.0'], {
    cwd: projectDirectory,
    stdio: 'inherit',
  }),
];

let stopping = false;

const stopChildren = (exitCode) => {
  if (stopping) return;
  stopping = true;
  process.exitCode = exitCode;

  for (const child of children) {
    if (child.exitCode === null && child.signalCode === null) {
      child.kill('SIGTERM');
    }
  }
};

for (const child of children) {
  child.on('error', (error) => {
    console.error('Failed to start a development process:', error);
    stopChildren(1);
  });
  child.on('exit', (code, signal) => {
    if (!stopping) {
      stopChildren(code ?? (signal ? 1 : 0));
    }
  });
}

process.on('SIGINT', () => stopChildren(0));
process.on('SIGTERM', () => stopChildren(0));
