import { Button } from "@/components/ui/button";
import { Github, Download, ExternalLink } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold font-mono">
            <span className="text-primary">grounded</span>
            <span className="text-accent">.</span>
            <span className="text-foreground">tools</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#installation" className="text-muted-foreground hover:text-foreground transition-colors">
            Installation
          </a>
          <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
            Examples
          </a>
          <a href="https://github.com/arabold/docs-mcp-server" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            Documentation
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/arabold/docs-mcp-server" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="#installation">
              <Download className="h-4 w-4" />
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};