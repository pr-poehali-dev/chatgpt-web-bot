import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "Какие API ты поддерживаешь?",
  "Как подключить CRM?",
  "Расскажи о тарифах",
];

const botResponses: Record<string, string> = {
  "какие api ты поддерживаешь?":
    "Я поддерживаю интеграции с REST и GraphQL API. Среди популярных: AmoCRM, Bitrix24, Telegram, WhatsApp, Stripe, 1С, Google Sheets, Notion и ещё 40+ сервисов. Могу подключиться к любому API по документации.",
  "как подключить crm?":
    "Подключение CRM занимает 5 минут:\n\n1. Перейдите в раздел «Интеграции» в личном кабинете\n2. Выберите вашу CRM (AmoCRM, Bitrix24, HubSpot и др.)\n3. Авторизуйтесь и выберите нужные поля\n\nПосле этого я смогу создавать сделки, обновлять контакты и отправлять уведомления прямо из чата.",
  "расскажи о тарифах":
    "У нас 3 тарифа:\n\n• Старт — бесплатно, до 100 сообщений/мес\n• Бизнес — 2 990 ₽/мес, безлимит + API интеграции\n• Корпоративный — индивидуально, с выделенным сервером\n\nВсе тарифы включают GPT-4 и базовую аналитику. Подробнее в разделе «Тарифы» ниже.",
};

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Здравствуйте! Я NexusAI — ваш интеллектуальный ассистент. Задайте мне вопрос или выберите одну из подсказок ниже.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const key = text.trim().toLowerCase();
      const response =
        botResponses[key] ||
        `Отличный вопрос! В полной версии я подключён к GPT-4 и могу дать развёрнутый ответ. Сейчас это демо-режим — попробуйте один из предложенных вопросов или свяжитесь с нами для настройки бота под ваши задачи.`;

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section id="chat" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Демо
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Попробуйте{" "}
            <span className="text-gradient">прямо сейчас</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Интерактивная демонстрация возможностей NexusAI
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden glow animate-pulse-glow">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon name="Bot" size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">NexusAI</p>
                <p className="text-xs text-green-400">Онлайн</p>
              </div>
            </div>

            <div className="h-[400px] overflow-y-auto p-6 space-y-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-white/[0.06] text-foreground/90 rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-white/[0.06] rounded-2xl rounded-bl-md px-5 py-3 flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="px-6 py-3 border-t border-white/10">
              <div className="flex flex-wrap gap-2 mb-3">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Введите сообщение..."
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/50 rounded-xl"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl flex-shrink-0"
                  disabled={!input.trim()}
                >
                  <Icon name="Send" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
