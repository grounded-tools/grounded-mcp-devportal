import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Database, Zap, Shield, Github } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge variant="outline" className="text-sm font-mono">
            <Zap className="h-3 w-3 mr-2" />
            Free • Open Source • Runs Locally
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Your AI's{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Up-to-Date
            </span>
            <br />
            Documentation Expert
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Index 3rd party documentation from websites, GitHub, npm, PyPI, and local files. 
            Provide your AI with version-aware search tools via the Model Context Protocol.
          </p>
          
          {/* Problem Statement */}
          <div className="bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Stop Fighting These Issues:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <span className="text-destructive">×</span>
                <span>Stale LLM knowledge & hallucinated code</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-destructive">×</span>
                <span>Version ambiguity in AI suggestions</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-destructive">×</span>
                <span>Time lost verifying AI-generated code</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-destructive">×</span>
                <span>Outdated documentation references</span>
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Database className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold text-sm">Always Current</h3>
              <p className="text-xs text-muted-foreground mt-1">Live documentation indexing</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Code2 className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold text-sm">Version-Aware</h3>
              <p className="text-xs text-muted-foreground mt-1">Target exact library versions</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold text-sm">Privacy First</h3>
              <p className="text-xs text-muted-foreground mt-1">Runs locally on your machine</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold text-sm">MCP Protocol</h3>
              <p className="text-xs text-muted-foreground mt-1">Seamless AI integration</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#installation" className="group">
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/arabold/docs-mcp-server" target="_blank" rel="noopener noreferrer" className="group">
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
          
          {/* Quick Install */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-3">Quick install:</p>
            <Button variant="code" className="font-mono text-left px-6 py-3 w-full" asChild>
              <code>npm install -g docs-mcp-server</code>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};