import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold font-mono">
              <span className="text-primary">grounded</span>
              <span className="text-accent">.</span>
              <span className="text-foreground">tools</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building tools that keep AI grounded in accurate, up-to-date
              information.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#features"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#installation"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Installation
              </a>
              <a
                href="https://github.com/arabold/docs-mcp-server"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://github.com/arabold/docs-mcp-server/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Quick Start Guide
              </a>
              <a
                href="https://github.com/arabold/docs-mcp-server/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Issues & Support
              </a>
              <a
                href="https://github.com/arabold/docs-mcp-server/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contributing
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/arabold/docs-mcp-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Open source and free forever</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground">
            © 2024-2025 grounded.tools. Released under MIT License.
          </div>
        </div>
      </div>
    </footer>
  );
};
