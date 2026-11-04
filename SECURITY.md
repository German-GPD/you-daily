# Security & Privacy

You Daily is intended to work with personal information. Security and privacy must be foundational requirements, not features added at the end.

## Current status

This repository currently documents an early-stage concept. Do not submit real account credentials, API tokens, private messages, email exports, personal documents or other sensitive data as project issues or commits.

## Requirements for future implementation

- Use official integrations and request only the permissions needed.
- Explain what each connected source is used for.
- Store credentials and access tokens securely; never hard-code them.
- Encrypt sensitive data in transit and at rest where applicable.
- Minimize collection and define retention periods.
- Provide clear disconnect, revoke-access and delete-data controls.
- Restrict internal access to personal content.
- Keep logs free of message bodies, credentials and unnecessary personal data.
- Treat imported messages and documents as untrusted input.
- Make AI-generated summaries traceable to their original sources.

## Reporting a vulnerability

Do not publish credentials, personal data or exploitable vulnerability details in a public issue. For a private repository, contact the repository owner through the GitHub account and provide a concise description, impact and reproduction steps where safe.

A formal security response process will be added before any public production release.
