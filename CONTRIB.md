# How to Contribute

Thank you for considering a contribution to **agent-sandbox**! This document
covers the practical details of how to get involved.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Reporting Bugs](#reporting-bugs)
4. [Suggesting Features](#suggesting-features)
5. [Development Workflow](#development-workflow)
6. [Commit Messages](#commit-messages)
7. [Pull Requests](#pull-requests)
8. [Code Style](#code-style)
9. [License](#license)

---

## Code of Conduct

Be respectful and constructive in all interactions. Harassment or exclusionary
behaviour will not be tolerated.

---

## Getting Started

1. **Fork** the repository on GitHub and clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/agent-sandbox.git
   cd agent-sandbox
   ```
2. Add the upstream remote so you can pull in future changes:
   ```bash
   git remote add upstream https://github.com/eirikhm/agent-sandbox.git
   ```
3. Create a dedicated branch for your work:
   ```bash
   git checkout -b feat/my-feature   # or fix/my-bug
   ```

---

## Reporting Bugs

Before opening an issue, please search existing issues to avoid duplicates.
When filing a new bug report, include:

- A clear, descriptive title.
- Steps to reproduce the problem.
- Expected vs. actual behaviour.
- Relevant environment details (OS, language/runtime version, etc.).

---

## Suggesting Features

Open an issue with the label **enhancement** and describe:

- The problem you are trying to solve.
- Your proposed solution.
- Any alternatives you considered.

---

## Development Workflow

1. Make your changes on your feature branch.
2. Keep commits small and focused on a single concern.
3. Test your changes (add new tests where appropriate once a test suite exists).
4. Rebase or merge the latest `main` before opening a PR:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

---

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) style:

```
<type>(<scope>): <short summary>

[optional body]

[optional footer(s)]
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

Example:
```
feat(agent): add retry logic for failed tool calls
```

---

## Pull Requests

- Open PRs against the `main` branch.
- Fill in the PR template (or describe what changed and why if none exists).
- Keep the diff focused — avoid unrelated changes in the same PR.
- Ensure all checks pass before requesting a review.
- Be responsive to review feedback.

---

## Code Style

Code style guidelines will be added here as the project matures. In the
meantime, match the style of the surrounding code and keep things readable.

---

## License

By contributing, you agree that your contributions will be licensed under the
same license as this project. See [LICENSE](LICENSE) for details.
