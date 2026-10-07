import React from 'react';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Selected work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Raviraj21r',
    path: 'M12 .9a11.1 11.1 0 0 0-3.5 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.52 2.16 3.6 1.55.1-.72.4-1.21.69-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.5.41.36.77 1.03.77 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ravi-kumar-2b3284358/',
    path: 'M5.2 3.4a2.1 2.1 0 1 1-4.2 0 2.1 2.1 0 0 1 4.2 0ZM1.3 7h3.6v14.6H1.3V7Zm5.8 0h3.4v2h.05c.47-.9 1.63-2.4 3.92-2.4 4.2 0 4.98 2.76 4.98 6.35v8.65h-3.6v-7.67c0-1.83-.04-4.18-2.55-4.18-2.56 0-2.95 2-2.95 4.05v7.8H7.1V7Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mr_ravi_raj9297?utm_source=qr&stkn=OGI4cmNmNDh5amsw',
    path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm5 2.3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2.2a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm5.75-3.3a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@inspiredtechcoding?si=go6L-dtVIR1dYU6T',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z',
  },
];

export const SiteFooter: React.FC = () => (
  <footer className="relative overflow-hidden border-t border-[#8C6D4F]/25 bg-[#080706] px-5 py-12 text-[#E8DFD8] sm:px-12 sm:py-14 lg:px-20">
    <div className="pointer-events-none absolute -right-24 -top-40 h-80 w-80 rounded-full bg-[#D4AF37]/[0.06] blur-[100px]" />

    <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
      <div>
        <a href="#" className="mb-5 inline-flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]">
          <span className="flex h-11 w-11 items-center justify-center border border-[#D4AF37]/60 bg-[#17120D] text-sm font-semibold tracking-wide text-[#F3DBB3]">
            RK
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide text-white">Ravi Kumar</span>
            <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-[#A8988B]">
              Frontend Developer
            </span>
          </span>
        </a>
        <p className="max-w-xs text-xs leading-6 text-[#A8988B] sm:text-[13px]">
          Building thoughtful web experiences with clean code, creative design, and AI.
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <h2 className="mb-4 text-sm font-semibold tracking-wide text-white">Explore</h2>
        <ul className="space-y-2.5">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-[#A8988B] transition-colors hover:text-[#F3DBB3] focus-visible:text-[#F3DBB3] focus-visible:outline-none sm:text-[13px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h2 className="mb-4 text-sm font-semibold tracking-wide text-white">Stay in touch</h2>
        <p className="mb-5 max-w-xs text-xs leading-6 text-[#A8988B] sm:text-[13px]">
          Have a project, an opportunity, or an idea to share? I&apos;d love to hear from you.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-[#8C6D4F]/60 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#EAD8C7] transition-colors hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
        >
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </a>
        <div className="mt-6 flex items-center gap-3" aria-label="Social profiles">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={`${social.label} profile (add your link)`}
              title={`Add your ${social.label} profile URL`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8C6D4F]/50 bg-[#100D0B] text-[#C4B5A5] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#F3DBB3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 sm:col-span-2 sm:flex-row lg:col-span-1 lg:flex-col lg:items-end lg:text-right">
        <div>
          <p className="text-xs leading-6 text-[#A8988B]">
            © {new Date().getFullYear()} Ravi Kumar
          </p>
          <p className="text-xs text-[#75685D]">Designed &amp; developed with care.</p>
        </div>
        <a
          href="#"
          className="inline-flex w-fit items-center gap-2 text-xs text-[#A8988B] transition-colors hover:text-[#F3DBB3] focus-visible:text-[#F3DBB3] focus-visible:outline-none"
        >
          <span aria-hidden="true">↑</span> Back to top
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
