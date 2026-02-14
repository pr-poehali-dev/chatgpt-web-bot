import Icon from "@/components/ui/icon";

const stats = [
  { value: "99.9%", label: "Аптайм" },
  { value: "<0.3с", label: "Время ответа" },
  { value: "50+", label: "Интеграций" },
  { value: "24/7", label: "Доступность" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              О боте
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Искусственный интеллект,{" "}
              <span className="text-gradient">настоящий результат</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
              NexusAI — это не просто чатбот. Это интеллектуальная платформа, которая подключается к вашим сервисам, понимает контекст бизнеса и работает как полноценный цифровой ассистент. Построен на основе GPT-4 с дополнительными слоями безопасности и настройки.
            </p>

            <div className="space-y-4">
              {[
                "Глубокое понимание контекста диалога",
                "Подключение к любым API и базам данных",
                "Обучение на ваших данных и документах",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={14} className="text-primary" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-3xl p-8 glow">
              <img
                src="https://cdn.poehali.dev/projects/3769d0f6-7333-45b7-8623-b32fea3d77f6/files/42c200c3-7253-4c59-a018-eedb970ae242.jpg"
                alt="AI интерфейс"
                className="rounded-2xl w-full object-cover aspect-square"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Мгновенные ответы</p>
                  <p className="text-xs text-muted-foreground">Среднее время — 0.3 сек</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center hover:bg-white/[0.08] transition-colors duration-300">
              <p className="font-serif text-3xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
