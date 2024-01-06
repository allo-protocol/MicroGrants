# 🌊 Allo SeaGrants

## Getting Started

This is a grants application for Allo. It is built using
[Spec](https://spec.dev), [Bun](https://bun.sh/) and
[Next.js](https://nextjs.org/).

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x.x)
- [Bun](https://bun.sh/) (v1.x)
- Add env vars:

Required
```
NEXT_PUBLIC_PINATA_JWT=
NEXT_PUBLIC_IPFS_READ_GATEWAY=
NEXT_PUBLIC_IPFS_WRITE_GATEWAY=
```

Optional
```
NEXT_PUBLIC_ENVIRONMENT=
ALCHEMY_ID=
INFURA_ID=
NEXT_PUBLIC_GRAPHQL_URL=
PROJECT_ID=
```

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start the development server
bun dev
```

Then go to http://localhost:3000/ on a browser and interact with the app.

### Testing

TBD 🤔

### Linting

```bash
# Lint the application
bun lint
```

### Production

```bash
# Build the application
bun build

# Start the production server
bun start
```
