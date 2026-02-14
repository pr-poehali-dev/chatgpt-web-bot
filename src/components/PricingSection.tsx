import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Старт",
    price: "0",
    period: "навсегда",
    description: "Для знакомства с платформой",
    features: [
      "100 сообщений / мес",
      "GPT-4 модель",
      "1 интеграция",
      "Базовая аналитика",
      "Email поддержка",
    ],
    cta: "Начать бесплатно",
    popular: false,
  },
  {
    name: "Бизнес",
    price: "2 990",
    period: "/ мес",
    description: "Для растущих компаний",
    features: [
      "Безлимит сообщений",
      "GPT-4 Turbo модель",
      "Все API интеграции",
      "Продвинутая аналитика",
      "Обучение на ваших данных",
      "Приоритетная поддержка",
    ],
    cta: "Подключить",
    popular: true,
  },
  {
    name: "Корпоративный",
    price: "Индив.",
    period: "",
    description: "Для крупного бизнеса",
    features: [
      "Выделенный сервер",
      "Кастомная модель",
      "SLA 99.99%",
      "Персональный менеджер",
      "On-premise установка",
      "Безлимит всего",
    ],
    cta: "Связаться",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Тарифы
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Прозрачные{" "}
            <span className="text-gradient">цены</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Выберите план, который подходит вашему бизнесу
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass rounded-3xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                plan.popular ? "border-primary/30 glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-serif text-4xl font-bold">
                  {plan.price === "0" ? "Бесплатно" : plan.price}
                </span>
                {plan.price !== "0" && plan.price !== "Индив." && (
                  <span className="text-muted-foreground ml-1">₽ {plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white/5 text-foreground hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
