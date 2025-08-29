import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Code2
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Website Documentation",
    description: "Index documentation from any website with smart crawling and content extraction",
    tags: ["Web Scraping", "Auto-discovery"]
  },
  {
    icon: Github,
    title: "GitHub Integration", 
    description: "Direct access to README files, wikis, and documentation from GitHub repositories",
    tags: ["Git", "Version Control"]
  },
  {
    icon: Package,
    title: "Package Registries",
    description: "Support for npm, PyPI, and other package managers with version-specific docs",
    tags: ["npm", "PyPI", "Packages"]
  },
  {
    icon: FileText,
    title: "Local Files",
    description: "Index your local documentation, markdown files, and knowledge bases",
    tags: ["Local", "Markdown"]
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Powerful search with semantic understanding and relevance ranking",
    tags: ["AI-Powered", "Contextual"]
  },
  {
    icon: Target,
    title: "Version Targeting",
    description: "Query specific library versions to match your project dependencies",
    tags: ["Precision", "Dependencies"]
  },
  {
    icon: RefreshCw,
    title: "Auto-Refresh",
    description: "Keep documentation up-to-date with automatic refresh and change detection",
    tags: ["Real-time", "Monitoring"]
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "All processing happens locally - your code and queries never leave your machine",
    tags: ["Local", "Secure"]
  },
  {
    icon: Cpu,
    title: "MCP Protocol",
    description: "Built on the Model Context Protocol for seamless AI assistant integration",
    tags: ["Standard", "Interop"]
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-primary">Powerful</span> Documentation Indexing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to keep your AI assistant informed with the latest, 
            version-specific documentation from multiple sources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-glow-primary/20 transition-all duration-300 group">
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
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Technical Specs */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Database className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2">Data Sources</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Websites & Documentation Sites</li>
                <li>GitHub Repositories</li>
                <li>npm & PyPI Packages</li>
                <li>Local File Systems</li>
              </ul>
            </div>
            <div className="text-center">
              <Code2 className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2">Query Types</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Semantic Search</li>
                <li>Version-Specific Queries</li>
                <li>API Reference Lookup</li>
                <li>Example Code Search</li>
              </ul>
            </div>
            <div className="text-center">
              <Zap className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2">Performance</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Local Processing</li>
                <li>Fast Vector Search</li>
                <li>Incremental Updates</li>
                <li>Memory Efficient</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};