const integrations = [
  {
    name: "Claude Code",
    slug: "claude",
    url: "https://www.anthropic.com/claude-code",
  },
  {
    name: "Gemini CLI",
    slug: "gemini",
    url: "https://github.com/google-gemini/gemini-cli",
  },
  {
    name: "Cursor",
    slug: "cursor",
    url: "https://cursor.sh/",
  },
  {
    name: "Windsurf",
    slug: "windsurf",
    url: "https://codeium.com/windsurf",
  },
  {
    name: "Cline",
    slug: "cline",
    url: "https://cline.bot/",
  },
  {
    name: "GitHub Copilot",
    slug: "githubcopilot",
    url: "https://github.com/features/copilot",
  },
  {
    name: "ChatGPT",
    slug: "openai",
    url: "https://chat.openai.com/",
  },
  {
    name: "Claude Desktop",
    slug: "claude",
    url: "https://claude.ai/",
  },
];

const getIconUrl = (slug: string) =>
  `https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/${slug}.png`;

const getTextUrl = (slug: string) =>
  `https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/${slug}-text.png`;

export const Integrations = () => {
  return (
    <section id="integration" className="py-20">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Works with Your Favorite Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Grounded Docs is a Model Context Protocol (MCP) server that
            integrates with your favorite AI agents and development tools.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center justify-items-center mx-auto">
          {integrations.map((integration) => (
            <a
              key={integration.name}
              href={integration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              title={integration.name}
            >
              <img
                src={getIconUrl(integration.slug)}
                alt={`${integration.name} icon`}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <img
                src={getTextUrl(integration.slug)}
                alt={integration.name}
                className="h-6 object-contain max-w-[100px]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <span
                className="text-sm font-semibold text-foreground hidden"
                style={{ display: "none" }}
              >
                {integration.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
