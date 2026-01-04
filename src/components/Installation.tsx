import { CheckCircle, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CodeBlock = ({
  children,
  onCopy,
}: {
  children: string;
  onCopy: () => void;
}) => {
  return (
    <div className="relative bg-muted border border-border rounded-lg p-4 font-mono text-sm">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8 text-slate-400 hover:text-slate-200"
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

const JsonCodeBlock = ({ onCopy }: { onCopy: () => void }) => {
  return (
    <div className="relative bg-muted border border-border rounded-lg p-4 font-mono text-sm">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8 text-slate-400 hover:text-slate-200"
        onClick={onCopy}
      >
        <Copy className="h-4 w-4" />
      </Button>
      <pre className="overflow-x-auto">
        <code>
          <span className="text-slate-300">{"{"}</span>
          {"\n  "}
          <span className="text-blue-400">"mcpServers"</span>
          <span className="text-slate-300">: {"{"}</span>
          {"\n    "}
          <span className="text-blue-400">"docs-mcp-server"</span>
          <span className="text-slate-300">: {"{"}</span>
          {"\n      "}
          <span className="text-blue-400">"type"</span>
          <span className="text-slate-300">: </span>
          <span className="text-green-400">"sse"</span>
          <span className="text-slate-300">,</span>
          {"\n      "}
          <span className="text-blue-400">"url"</span>
          <span className="text-slate-300">: </span>
          <span className="text-green-400">"http://localhost:6280/sse"</span>
          <span className="text-slate-300">,</span>
          {"\n      "}
          <span className="text-blue-400">"disabled"</span>
          <span className="text-slate-300">: </span>
          <span className="text-orange-400">false</span>
          <span className="text-slate-300">,</span>
          {"\n      "}
          <span className="text-blue-400">"autoApprove"</span>
          <span className="text-slate-300">: []</span>
          {"\n    "}
          <span className="text-slate-300">{"}"}</span>
          {"\n  "}
          <span className="text-slate-300">{"}"}</span>
          {"\n"}
          <span className="text-slate-300">{"}"}</span>
        </code>
      </pre>
    </div>
  );
};

export const Installation = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("quick");

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Listen for custom event to switch to usage tab
  useEffect(() => {
    const handleSwitchToUsageTab = () => {
      setActiveTab("usage");
    };

    const handleSwitchToQuickStartTab = () => {
      setActiveTab("quick");
    };

    window.addEventListener("switchToUsageTab", handleSwitchToUsageTab);
    window.addEventListener(
      "switchToQuickStartTab",
      handleSwitchToQuickStartTab
    );

    return () => {
      window.removeEventListener("switchToUsageTab", handleSwitchToUsageTab);
      window.removeEventListener(
        "switchToQuickStartTab",
        handleSwitchToQuickStartTab
      );
    };
  }, []);

  const startServerCommand = `npx @arabold/docs-mcp-server`;
  const vscodeExample = `{
  "mcpServers": {
    "docs-mcp-server": {
      "type": "sse",
      "url": "http://localhost:6280/sse",
      "disabled": false,
      "autoApprove": []
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
            Simple installation and configuration. Works with Cursor, Claude
            Desktop, VS Code, GitHub Copilot, and any MCP-compatible AI
            assistant.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="quick">Quick Start</TabsTrigger>
              <TabsTrigger value="config">Configuration</TabsTrigger>
              <TabsTrigger value="usage">Usage Examples</TabsTrigger>
            </TabsList>

            <TabsContent value="quick" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    1. Start the Server
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Start the Docs MCP Server. Optionally add an embedding
                    provider API key for improved search results (see{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("config")}
                      className="text-primary hover:underline focus:outline-none focus:underline"
                    >
                      Configuration
                    </button>{" "}
                    for options, including fully local ones). This provides both
                    the MCP endpoint and web interface.
                  </p>
                  <CodeBlock onCopy={() => handleCopy(startServerCommand)}>
                    {startServerCommand}
                  </CodeBlock>
                  {copiedCode === startServerCommand && (
                    <div className="flex items-center space-x-2 mt-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Copied to clipboard!</span>
                    </div>
                  )}
                  <details className="mt-4">
                    <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                      <strong>Alternative:</strong> Docker setup (click to
                      expand)
                    </summary>
                    <div className="mt-3 pl-4 border-l-2 border-border">
                      <p className="text-sm text-muted-foreground mb-2">
                        Use Docker for easier setup and isolation. Optionally
                        include an embedding provider API key:
                      </p>
                      <pre className="text-xs text-muted-foreground font-mono bg-muted/50 p-2 rounded">
                        {`docker run --rm \\
  -e OPENAI_API_KEY="your-openai-api-key" \\
  -v docs-mcp-data:/data \\
  -v docs-mcp-config:/config \\
  -p 6280:6280 \\
  ghcr.io/arabold/docs-mcp-server:latest`}
                      </pre>
                      <p className="text-xs text-muted-foreground mt-2">
                        <a
                          href="https://github.com/arabold/docs-mcp-server#standalone-server-recommended"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          View full Docker instructions →
                        </a>
                      </p>
                    </div>
                  </details>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Connect to VS Code</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Configure VS Code to connect to the running server via
                    Server-Sent Events (SSE). Add this to your VS Code MCP
                    settings:
                  </p>
                  <JsonCodeBlock onCopy={() => handleCopy(vscodeExample)} />
                  <details className="mt-4">
                    <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                      <strong>Alternative:</strong> Embedded mode configuration
                      (click to expand)
                    </summary>
                    <div className="mt-3 pl-4 border-l-2 border-border">
                      <p className="text-sm text-muted-foreground mb-2">
                        For embedded mode (no separate server), use this
                        configuration. The embedding provider API key is
                        optional:
                      </p>
                      <pre className="text-xs text-muted-foreground font-mono bg-muted/50 p-2 rounded">
                        {`{
  "mcpServers": {
    "docs-mcp-server": {
      "command": "npx",
      "args": ["@arabold/docs-mcp-server"],
      "env": {
        "OPENAI_API_KEY": "your-openai-api-key"
      }
    }
  }
}`}
                      </pre>
                    </div>
                  </details>
                  <div className="mt-4">
                    <Button variant="outline" asChild>
                      <a
                        href="https://code.visualstudio.com/docs/copilot/customization/mcp-servers"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                    Use the web interface to add GitHub repositories, websites,
                    npm packages, and local files. Once indexed, your AI
                    assistant can search this documentation.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="config" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configuration Loading</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    The Docs MCP Server supports a multi-layered configuration
                    system. Settings are merged from multiple sources in a
                    defined order of priority.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">
                        Precedence Rules
                      </h4>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                        <li className="pl-1">
                          <span className="text-foreground font-medium">
                            CLI Flags
                          </span>{" "}
                          (highest priority)
                        </li>
                        <li className="pl-1">
                          <span className="text-foreground font-medium">
                            Environment Variables
                          </span>
                        </li>
                        <li className="pl-1">
                          <span className="text-foreground font-medium">
                            Configuration File
                          </span>{" "}
                          (
                          <code className="bg-muted px-1 rounded text-xs">
                            config.yaml
                          </code>
                          )
                        </li>
                        <li className="pl-1">
                          <span className="text-foreground font-medium">
                            Default Values
                          </span>{" "}
                          (lowest priority)
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">
                        Configuration Location
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        The system default configuration file (
                        <code className="bg-muted px-1 rounded text-xs">
                          config.yaml
                        </code>
                        ) is located at:
                      </p>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div>
                          <span className="text-foreground font-medium block text-xs uppercase tracking-wider mb-1">
                            macOS
                          </span>
                          <code className="bg-muted px-2 py-1 rounded text-xs break-all">
                            ~/Library/Preferences/docs-mcp-server/config.yaml
                          </code>
                        </div>
                        <div>
                          <span className="text-foreground font-medium block text-xs uppercase tracking-wider mb-1">
                            Linux
                          </span>
                          <code className="bg-muted px-2 py-1 rounded text-xs break-all">
                            ~/.config/docs-mcp-server/config.yaml
                          </code>
                        </div>
                        <div>
                          <span className="text-foreground font-medium block text-xs uppercase tracking-wider mb-1">
                            Windows
                          </span>
                          <code className="bg-muted px-2 py-1 rounded text-xs break-all">
                            %APPDATA%\docs-mcp-server\Config\config.yaml
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="border-border" />

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">
                      Environment Variables
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="py-2 pr-4 font-medium text-foreground">
                              Variable
                            </th>
                            <th className="py-2 pr-4 font-medium text-foreground">
                              Description
                            </th>
                            <th className="py-2 font-medium text-foreground whitespace-nowrap">
                              Default
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 font-mono text-xs">
                              DOCS_MCP_PROTOCOL
                            </td>
                            <td className="py-3 pr-4">
                              Server protocol (`auto`, `stdio`, `http`)
                            </td>
                            <td className="py-3 font-mono text-xs">auto</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 font-mono text-xs">
                              DOCS_MCP_PORT
                            </td>
                            <td className="py-3 pr-4">
                              Server port (legacy:{" "}
                              <code className="text-xs">PORT</code>)
                            </td>
                            <td className="py-3 font-mono text-xs">6280</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 font-mono text-xs">
                              DOCS_MCP_WEB_PORT
                            </td>
                            <td className="py-3 pr-4">Web interface port</td>
                            <td className="py-3 font-mono text-xs">6281</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 font-mono text-xs">
                              DOCS_MCP_HOST
                            </td>
                            <td className="py-3 pr-4">
                              Host to bind to (legacy:{" "}
                              <code className="text-xs">HOST</code>)
                            </td>
                            <td className="py-3 font-mono text-xs">
                              127.0.0.1
                            </td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 font-mono text-xs">
                              DOCS_MCP_STORAGE_PATH
                            </td>
                            <td className="py-3 pr-4">
                              Directory for data storage
                            </td>
                            <td className="py-3 font-mono text-xs">
                              ~/.local/share/docs-mcp-server
                            </td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 font-mono text-xs">
                              DOCS_MCP_READ_ONLY
                            </td>
                            <td className="py-3 pr-4">
                              Enable read-only mode (no new indexing)
                            </td>
                            <td className="py-3 font-mono text-xs">false</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 font-mono text-xs">
                              DOCS_MCP_AUTH_ENABLED
                            </td>
                            <td className="py-3 pr-4">Enable authentication</td>
                            <td className="py-3 font-mono text-xs">false</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 font-mono text-xs">
                              DOCS_MCP_TELEMETRY
                            </td>
                            <td className="py-3 pr-4">
                              Enable usage telemetry
                            </td>
                            <td className="py-3 font-mono text-xs">true</td>
                          </tr>
                          <tr>
                            <td className="py-3 pr-4 font-mono text-xs">
                              DOCS_MCP_EMBEDDING_MODEL
                            </td>
                            <td className="py-3 pr-4">
                              Embedding model to use
                            </td>
                            <td className="py-3 font-mono text-xs">
                              text-embedding-3-small
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-md border border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Note:</strong>{" "}
                        Embedding provider credentials (like{" "}
                        <code>OPENAI_API_KEY</code>, <code>GOOGLE_API_KEY</code>
                        , etc.) use their own standard service-specific
                        environment variables. See the Embedding Model
                        Configuration section below for details.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Embedding Model Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground mb-4">
                    Optionally configure embedding providers for document
                    vectorization to improve search results. Choose from cloud
                    providers or run locally for complete privacy.
                  </p>

                  <div className="mb-6">
                    <h5 className="font-medium text-foreground mb-3">
                      Supported providers are:
                    </h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">
                            openai
                          </code>{" "}
                          (default), requires OpenAI API key or Ollama / LM
                          Studio for local
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">
                            google
                          </code>{" "}
                          for Google Gemini, requires Google API key
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">
                            aws
                          </code>{" "}
                          for AWS Bedrock, requires AWS credentials
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">
                            sagemaker
                          </code>{" "}
                          for AWS SageMaker, requires AWS credentials
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">
                            microsoft
                          </code>{" "}
                          for Azure OpenAI, requires Azure credentials
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">OpenAI</h4>
                    <CodeBlock
                      onCopy={() =>
                        handleCopy(
                          'OPENAI_API_KEY="sk-proj-your-openai-api-key" \\\nnpx @arabold/docs-mcp-server --embedding-model text-embedding-3-small'
                        )
                      }
                    >
                      {`OPENAI_API_KEY="sk-proj-your-openai-api-key" \\
npx @arabold/docs-mcp-server --embedding-model text-embedding-3-small`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Ollama (Local)
                    </h4>
                    <CodeBlock
                      onCopy={() =>
                        handleCopy(
                          'OPENAI_API_KEY="ollama" \\\nOPENAI_API_BASE="http://localhost:11434/v1" \\\nnpx @arabold/docs-mcp-server --embedding-model openai:nomic-embed-text'
                        )
                      }
                    >
                      {`OPENAI_API_KEY="ollama" \\
OPENAI_API_BASE="http://localhost:11434/v1" \\
npx @arabold/docs-mcp-server --embedding-model openai:nomic-embed-text`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      LM Studio (Local)
                    </h4>
                    <CodeBlock
                      onCopy={() =>
                        handleCopy(
                          'OPENAI_API_KEY="lmstudio" \\\nOPENAI_API_BASE="http://localhost:1234/v1" \\\nnpx @arabold/docs-mcp-server --embedding-model openai:text-embedding-qwen3-embedding-4b'
                        )
                      }
                    >
                      {`OPENAI_API_KEY="lmstudio" \\
OPENAI_API_BASE="http://localhost:1234/v1" \\
npx @arabold/docs-mcp-server --embedding-model openai:text-embedding-qwen3-embedding-0.6b`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Google Gemini
                    </h4>
                    <CodeBlock
                      onCopy={() =>
                        handleCopy(
                          'GOOGLE_API_KEY="your-google-api-key" \\\nnpx @arabold/docs-mcp-server --embedding-model gemini:embedding-001'
                        )
                      }
                    >
                      {`GOOGLE_API_KEY="your-google-api-key" \\
npx @arabold/docs-mcp-server --embedding-model gemini:embedding-001`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      AWS Bedrock
                    </h4>
                    <CodeBlock
                      onCopy={() =>
                        handleCopy(
                          'AWS_ACCESS_KEY_ID="your-aws-access-key-id" \\\nAWS_SECRET_ACCESS_KEY="your-aws-secret-access-key" \\\nAWS_REGION="us-east-1" \\\nnpx @arabold/docs-mcp-server --embedding-model aws:amazon.titan-embed-text-v1'
                        )
                      }
                    >
                      {`AWS_ACCESS_KEY_ID="your-aws-access-key-id" \\
AWS_SECRET_ACCESS_KEY="your-aws-secret-access-key" \\
AWS_REGION="us-east-1" \\
npx @arabold/docs-mcp-server --embedding-model aws:amazon.titan-embed-text-v1`}
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>CLI Commands</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    You can manage documentation directly from your terminal
                    using the CLI.
                  </p>

                  <div className="bg-muted border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">
                      Index New Documentation
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Scrape a website and index it as a library.
                    </p>
                    <CodeBlock
                      onCopy={() =>
                        handleCopy(
                          "npx @arabold/docs-mcp-server scrape react https://react.dev/reference/react"
                        )
                      }
                    >
                      npx @arabold/docs-mcp-server scrape react
                      https://react.dev/reference/react
                    </CodeBlock>
                  </div>

                  <div className="bg-muted border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">
                      List Indexed Libraries
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      See what libraries are currently available in your
                      database.
                    </p>
                    <CodeBlock
                      onCopy={() =>
                        handleCopy("npx @arabold/docs-mcp-server list")
                      }
                    >
                      npx @arabold/docs-mcp-server list
                    </CodeBlock>
                  </div>

                  <div className="bg-muted border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">
                      Search Documentation via CLI
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Test your search results directly from the command line.
                    </p>
                    <CodeBlock
                      onCopy={() =>
                        handleCopy(
                          'npx @arabold/docs-mcp-server search react "useState hook"'
                        )
                      }
                    >
                      npx @arabold/docs-mcp-server search react "useState hook"
                    </CodeBlock>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Example Queries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">
                      Version-Specific Search
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ask Claude: "Show me how to use React hooks in version
                      18.2"
                    </p>
                    <Badge variant="secondary">
                      The MCP server will search React 18.2 docs specifically
                    </Badge>
                  </div>

                  <div className="bg-muted border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">API Reference Lookup</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ask Claude: "What are the parameters for Express.js
                      router.get()?"
                    </p>
                    <Badge variant="secondary">
                      Gets current API reference from indexed docs
                    </Badge>
                  </div>

                  <div className="bg-muted border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">
                      Local Documentation Search
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ask Claude: "How do I configure the authentication system
                      based on our docs?"
                    </p>
                    <Badge variant="secondary">
                      Searches your local documentation files
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button variant="cta" size="lg" asChild>
                  <a
                    href="https://github.com/arabold/docs-mcp-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
