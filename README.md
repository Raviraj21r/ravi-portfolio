# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Contact form email setup

1. Copy `.env.example` to `.env` and set `RESEND_API_KEY` to a newly created Resend API key.
2. Set `CONTACT_RECEIVER_EMAIL` to the inbox that should receive portfolio messages.
3. Set `RESEND_FROM_EMAIL` to `Portfolio Contact <onboarding@resend.dev>` for Resend's test sender, or to a sender address on a domain verified with Resend.
4. Run `npm run dev` and open the Vite URL shown in the terminal. The contact form sends the visitor's name, email, subject, and message to the server, which emails them via Resend.

The Resend key is read only by the server and must never use a `VITE_` prefix. `.env` is ignored by Git. Vercel automatically exposes `api/contact.js` as the production endpoint; add the three variables from `.env.example` in the Vercel project settings. For a custom Node host, configure those server environment variables, run `npm run build`, and start the Express server with `npm start`.
