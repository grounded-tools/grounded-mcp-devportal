import { useId } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Github,
  Package,
  FileText,
  Search,
  RefreshCw,
  Target,
  Shield,
  Zap,
  Cpu,
  Database,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Website Documentation",
    description:
      "Index documentation from any website with smart crawling and content extraction",
    tags: ["Web Scraping", "Auto-discovery"],
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description:
      "Direct access to README files, wikis, and documentation from GitHub repositories",
    tags: ["Git", "Version Control"],
  },
  {
    icon: Package,
    title: "Package Registries",
    description:
      "Support for npm, PyPI, and other package managers with version-specific docs",
    tags: ["npm", "PyPI", "Packages"],
  },
  {
    icon: FileText,
    title: "Local Files",
    description:
      "Index your local documentation, markdown files, and knowledge bases",
    tags: ["Local", "Markdown"],
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Powerful search with semantic understanding and relevance ranking",
    tags: ["AI-Powered", "Contextual"],
  },
  {
    icon: Target,
    title: "Version Targeting",
    description:
      "Query specific library versions to match your project dependencies",
    tags: ["Precision", "Dependencies"],
  },
  {
    icon: RefreshCw,
    title: "OAuth Security",
    description:
      "Secure access to your MCP server with OAuth authentication and authorization",
    tags: ["Security", "Authentication"],
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "All processing happens locally - your code and queries never leave your machine*",
    tags: ["Local", "Secure"],
  },
  {
    icon: Cpu,
    title: "MCP Protocol",
    description:
      "Built on the Model Context Protocol for seamless AI assistant integration",
    tags: ["Standard", "Interop"],
  },
];

export const Features = () => {
  const featuresId = useId();
  return (
    <section id={featuresId} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-primary">Powerful</span> Documentation
            Indexing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to keep your AI assistant informed with the
            latest, version-specific documentation from multiple sources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-glow-primary/20 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {feature.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            Our approach goes beyond simple text splitting. We use{" "}
            <strong className="text-foreground">structure-aware RAG</strong> to
            deliver precise, context-rich information to your AI assistant.
          </p>

          {/* How It Works Image */}
          <div className="flex justify-center mb-10">
            <img
              src="/how-it-works.png"
              alt="How Grounded Docs MCP Server Works - Structure-Aware RAG vs Naive RAG"
              className="max-w-full md:max-w-4xl rounded-lg border border-border shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Semantic Chunking & Content Assembly
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Documents are parsed as hierarchies, not flat strings. When
                    the AI retrieves a chunk, we reassemble its context—parent
                    headings, neighboring sections—so the LLM always understands
                    the "why" behind the code.
                    <a
                      href="https://medium.com/gitconnected/improving-rag-with-hierarchies-and-content-assembly-f85ae1345b10?sk=b8dab6fbf5b14863dba72cd86d73cdf3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline ml-1"
                    >
                      Learn more →
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Code-Aware Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Unlike generic web scrapers, we intelligently handle code
                    blocks, maintain proper formatting, and preserve API
                    signatures intact. The result is documentation your AI can
                    actually use.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Smart Context Reassembly
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    By sending highly-relevant, condensed context instead of
                    entire documents, we use fewer tokens. This makes AI code
                    assistance faster and significantly reduces your API costs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Search Docs & Fetch URL Synergy
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use{" "}
                    <code className="text-xs bg-secondary px-1 py-0.5 rounded">
                      search_docs
                    </code>{" "}
                    to query your indexed knowledge base, and{" "}
                    <code className="text-xs bg-secondary px-1 py-0.5 rounded">
                      fetch_url
                    </code>{" "}
                    to grab any page on the fly. They work in tandem to give
                    your AI the complete picture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Footnote */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Requires a local LLM for generating vectorization to maintain
            complete privacy
          </p>
        </div>
      </div>
    </section>
  );
};
