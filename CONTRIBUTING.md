# Contributing

## Branches
- `main`: stable, release-ready. No direct pushes.
- `develop`: integration branch. Open PRs into this.
- `feature/<name>`: one branch per feature or fix, e.g. `feature/slot-quota`.

## Workflow
1. `git checkout develop && git pull`
2. `git checkout -b feature/<name>`
3. Commit small and often.
4. Push and open a pull request into `develop`.
5. Wait for CI to pass and at least one reviewer to approve, then merge.
6. `develop` is merged into `main` at the end of each sprint.

## Commit format
`type: short description`

| Type | Example |
|------|---------|
| feat | `feat: add slot quota validation` |
| fix | `fix: duplicate queue number` |
| docs | `docs: update README` |
| test | `test: add full-slot case` |
| ci | `ci: update workflow` |

## Definition of Done
- Merged through a pull request reviewed by another member
- CI passes
- Acceptance criteria met and tested
- Works in the deployed environment
- Short documentation updated

## Run the CI check locally
`node scripts/check-frontend.js frontend/index.html`
