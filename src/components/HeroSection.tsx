import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Интеграция с 50+ внешними сервисами
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Элегантный{" "}
            <span className="text-gradient">AI-ассистент</span>
            <br />для вашего бизнеса
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up font-light" style={{ animationDelay: "0.2s" }}>
            Интеллектуальный чатбот на базе ChatGPT с подключением к вашим API и сервисам. Автоматизируйте общение — элегантно.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
              onClick={() => document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" })}
            >
              Начать диалог
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 text-foreground hover:bg-white/5 text-base px-8"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Возможности
            </Button>
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass rounded-2xl p-6 glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
              <span className="text-xs text-muted-foreground ml-2">NexusAI Terminal</span>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex gap-2">
                <span className="text-primary">→</span>
                <span className="text-muted-foreground">Подключи CRM и отправь сводку за неделю</span>
              </div>
              <div className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-foreground/80">Подключено к AmoCRM. Сводка за 7 дней: 142 новых лида, 38 сделок закрыто, конверсия 26.8%. Отчёт отправлен на team@company.ru</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
