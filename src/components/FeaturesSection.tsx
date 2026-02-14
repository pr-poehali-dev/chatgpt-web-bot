import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Plug",
    title: "API интеграции",
    description: "Подключение к CRM, ERP, платёжным системам, мессенджерам и любым REST/GraphQL API.",
  },
  {
    icon: "Brain",
    title: "Контекстная память",
    description: "Бот запоминает историю общения и адаптирует ответы под конкретного пользователя.",
  },
  {
    icon: "Shield",
    title: "Безопасность данных",
    description: "Шифрование end-to-end, соответствие GDPR. Ваши данные остаются вашими.",
  },
  {
    icon: "Languages",
    title: "Мультиязычность",
    description: "Поддержка 40+ языков с автоматическим определением языка собеседника.",
  },
  {
    icon: "BarChart3",
    title: "Аналитика",
    description: "Детальная статистика диалогов, конверсий и качества ответов в реальном времени.",
  },
  {
    icon: "Workflow",
    title: "Сценарии автоматизации",
    description: "Настраиваемые воронки и бизнес-процессы прямо внутри чата.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Возможности
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Всё, что нужно для{" "}
            <span className="text-gradient">автоматизации</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Мощный набор инструментов для интеграции AI в ваши бизнес-процессы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group glass rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={feature.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
