# Grounded Docs Developer Portal

**Your AI's Up-to-Date Documentation Expert**

This repository contains the source code for the official landing page and developer portal for the [Grounded Docs MCP Server](https://github.com/arabold/docs-mcp-server).

## About

Grounded Docs is an MCP (Model Context Protocol) server that provides AI coding assistants with accurate, up-to-date documentation. It solves the common problem of AI hallucinations caused by outdated or missing library knowledge by creating a personal, always-current knowledge base.

## Key Features

- **Multi-Source Indexing** - Index documentation from websites, GitHub repositories, npm/PyPI packages, and local files
- **Structure-Aware RAG** - Semantic chunking preserves document hierarchy, code blocks, and API signatures
- **Smart Context Assembly** - Reassembles relevant context from multiple chunks, reducing token usage and API costs
- **Code-Aware Processing** - Preserves code formatting, syntax highlighting hints, and technical accuracy
- **Version Targeting** - Query documentation for specific library versions (e.g., React 18.x, TypeScript 5.2.x)
- **Local & Private** - Runs entirely on your machine with no data sent to external servers

## Tech Stack

This portal is built with:

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

## Getting Started

### Prerequisites

- Node.js 18+ ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```bash
# Clone the repository
git clone https://github.com/grounded-tools/grounded-mcp-devportal.git
cd grounded-mcp-devportal

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/         # shadcn/ui primitives
│   ├── Hero.tsx    # Hero section with particle animation
│   ├── Features.tsx # Features section
│   └── ...
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Static assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
