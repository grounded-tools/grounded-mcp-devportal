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

  const npxCommand = "npx @arabold/docs-mcp-server@latest";
  const vscodeExample = `{
  "mcpServers": {
    "docs": {
      "command": "npx",
      "args": ["@arabold/docs-mcp-server@latest"]
    }
  }
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
                    <span>1. Start the server</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock onCopy={() => handleCopy(npxCommand)}>
                    {npxCommand}
                  </CodeBlock>
                  {copiedCode === npxCommand && (
                    <div className="flex items-center space-x-2 mt-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Copied to clipboard!</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Connect to VS Code</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Configure VS Code to connect via Server-Sent Events (SSE). Add this to your VS Code settings:
                  </p>
                  <CodeBlock onCopy={() => handleCopy(vscodeExample)}>
                    {vscodeExample}
                  </CodeBlock>
                  <div className="mt-4">
                    <Button variant="outline" asChild>
                      <a href="https://code.visualstudio.com/docs/copilot/customization/mcp-servers" target="_blank" rel="noopener noreferrer">
                        View VS Code MCP Documentation
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Add Documentation Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Open the web interface to manage your documentation sources:
                  </p>
                  <div className="bg-muted border border-border rounded-lg p-4">
                    <code className="text-sm">http://localhost:6280</code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Use the web interface to add GitHub repositories, websites, npm packages, and local files.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="config" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Embedding Model Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground mb-4">
                    Configure different embedding providers for document vectorization. Choose from cloud providers or run locally for complete privacy.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">OpenAI (Default)</h4>
                    <CodeBlock onCopy={() => handleCopy('OPENAI_API_KEY="sk-proj-your-openai-api-key" \\\nDOCS_MCP_EMBEDDING_MODEL="text-embedding-3-small" \\\nnpx @arabold/docs-mcp-server@latest')}>
{`OPENAI_API_KEY="sk-proj-your-openai-api-key" \\
DOCS_MCP_EMBEDDING_MODEL="text-embedding-3-small" \\
npx @arabold/docs-mcp-server@latest`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Ollama (Local)</h4>
                    <CodeBlock onCopy={() => handleCopy('OPENAI_API_KEY="ollama" \\\nOPENAI_API_BASE="http://localhost:11434/v1" \\\nDOCS_MCP_EMBEDDING_MODEL="nomic-embed-text" \\\nnpx @arabold/docs-mcp-server@latest')}>
{`OPENAI_API_KEY="ollama" \\
OPENAI_API_BASE="http://localhost:11434/v1" \\
DOCS_MCP_EMBEDDING_MODEL="nomic-embed-text" \\
npx @arabold/docs-mcp-server@latest`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">LM Studio (Local)</h4>
                    <CodeBlock onCopy={() => handleCopy('OPENAI_API_KEY="lmstudio" \\\nOPENAI_API_BASE="http://localhost:1234/v1" \\\nDOCS_MCP_EMBEDDING_MODEL="text-embedding-qwen3-embedding-4b" \\\nnpx @arabold/docs-mcp-server@latest')}>
{`OPENAI_API_KEY="lmstudio" \\
OPENAI_API_BASE="http://localhost:1234/v1" \\
DOCS_MCP_EMBEDDING_MODEL="text-embedding-qwen3-embedding-4b" \\
npx @arabold/docs-mcp-server@latest`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Google Gemini</h4>
                    <CodeBlock onCopy={() => handleCopy('GOOGLE_API_KEY="your-google-api-key" \\\nDOCS_MCP_EMBEDDING_MODEL="gemini:embedding-001" \\\nnpx @arabold/docs-mcp-server@latest')}>
{`GOOGLE_API_KEY="your-google-api-key" \\
DOCS_MCP_EMBEDDING_MODEL="gemini:embedding-001" \\
npx @arabold/docs-mcp-server@latest`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">AWS Bedrock</h4>
                    <CodeBlock onCopy={() => handleCopy('AWS_ACCESS_KEY_ID="your-aws-access-key-id" \\\nAWS_SECRET_ACCESS_KEY="your-aws-secret-access-key" \\\nAWS_REGION="us-east-1" \\\nDOCS_MCP_EMBEDDING_MODEL="aws:amazon.titan-embed-text-v1" \\\nnpx @arabold/docs-mcp-server@latest')}>
{`AWS_ACCESS_KEY_ID="your-aws-access-key-id" \\
AWS_SECRET_ACCESS_KEY="your-aws-secret-access-key" \\
AWS_REGION="us-east-1" \\
DOCS_MCP_EMBEDDING_MODEL="aws:amazon.titan-embed-text-v1" \\
npx @arabold/docs-mcp-server@latest`}
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