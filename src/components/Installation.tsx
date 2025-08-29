import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Copy, Terminal, CheckCircle } from "lucide-react";
import { useState } from "react";

const CodeBlock = ({ children, onCopy }: { children: string; onCopy: () => void }) => {
  return (
    <div className="relative bg-muted border border-border rounded-lg p-4 font-mono text-sm">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8"
        onClick={onCopy}
      >
        <Copy className="h-4 w-4" />
      </Button>
      <pre className="overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
};

export const Installation = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const npmInstall = "npm install -g docs-mcp-server";
  const configExample = `{
  "mcpServers": {
    "docs": {
      "command": "docs-mcp-server",
      "args": ["--config", "./docs-config.json"]
    }
  }
}`;

  const configFile = `{
  "sources": [
    {
      "type": "github",
      "url": "https://github.com/microsoft/TypeScript",
      "version": "5.3.0"
    },
    {
      "type": "website", 
      "url": "https://react.dev/",
      "crawlDepth": 3
    },
    {
      "type": "npm",
      "package": "express",
      "version": "4.18.0"
    },
    {
      "type": "local",
      "path": "./docs",
      "pattern": "**/*.md"
    }
  ]
}`;

  return (
    <section id="installation" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get Started in <span className="text-accent">Minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple installation and configuration. Works with Claude Desktop, VS Code, and any MCP-compatible AI assistant.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="quick" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="quick">Quick Start</TabsTrigger>
              <TabsTrigger value="config">Configuration</TabsTrigger>
              <TabsTrigger value="usage">Usage Examples</TabsTrigger>
            </TabsList>

            <TabsContent value="quick" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    <span>1. Install via npm</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock onCopy={() => handleCopy(npmInstall)}>
                    {npmInstall}
                  </CodeBlock>
                  {copiedCode === npmInstall && (
                    <div className="flex items-center space-x-2 mt-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Copied to clipboard!</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Add to Claude Desktop</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Add the following to your Claude Desktop configuration file:
                  </p>
                  <CodeBlock onCopy={() => handleCopy(configExample)}>
                    {configExample}
                  </CodeBlock>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">macOS</Badge>
                    <span className="text-sm text-muted-foreground">
                      ~/Library/Application Support/Claude/claude_desktop_config.json
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Windows</Badge>
                    <span className="text-sm text-muted-foreground">
                      %APPDATA%\Claude\claude_desktop_config.json
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Create Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Create a docs-config.json file to specify your documentation sources:
                  </p>
                  <CodeBlock onCopy={() => handleCopy(configFile)}>
                    {configFile}
                  </CodeBlock>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="config" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Documentation Sources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">GitHub Repositories</h4>
                    <CodeBlock onCopy={() => handleCopy('{\n  "type": "github",\n  "url": "https://github.com/owner/repo",\n  "version": "v1.0.0",\n  "paths": ["docs/", "README.md"]\n}')}>
{`{
  "type": "github",
  "url": "https://github.com/owner/repo",
  "version": "v1.0.0",
  "paths": ["docs/", "README.md"]
}`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Websites</h4>
                    <CodeBlock onCopy={() => handleCopy('{\n  "type": "website",\n  "url": "https://docs.example.com",\n  "crawlDepth": 3,\n  "selectors": [".content", ".documentation"]\n}')}>
{`{
  "type": "website",
  "url": "https://docs.example.com",
  "crawlDepth": 3,
  "selectors": [".content", ".documentation"]
}`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">NPM Packages</h4>
                    <CodeBlock onCopy={() => handleCopy('{\n  "type": "npm",\n  "package": "react",\n  "version": "18.2.0",\n  "includeTypeDefs": true\n}')}>
{`{
  "type": "npm",
  "package": "react", 
  "version": "18.2.0",
  "includeTypeDefs": true
}`}
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Example Queries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Version-Specific Search</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ask Claude: "Show me how to use React hooks in version 18.2"
                    </p>
                    <Badge variant="secondary">The MCP server will search React 18.2 docs specifically</Badge>
                  </div>

                  <div className="bg-muted border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">API Reference Lookup</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ask Claude: "What are the parameters for Express.js router.get()?"
                    </p>
                    <Badge variant="secondary">Gets current API reference from indexed docs</Badge>
                  </div>

                  <div className="bg-muted border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Local Documentation Search</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ask Claude: "How do I configure the authentication system based on our docs?"
                    </p>
                    <Badge variant="secondary">Searches your local documentation files</Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="https://github.com/arabold/docs-mcp-server" target="_blank" rel="noopener noreferrer">
                    View Full Documentation
                  </a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};