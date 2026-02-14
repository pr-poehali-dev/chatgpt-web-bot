import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
            <Icon name="Bot" size={14} className="text-primary" />
          </div>
          <span className="font-serif text-lg font-semibold">
            Nexus<span className="text-primary">AI</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2026 NexusAI. Интеллектуальные решения для бизнеса.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
