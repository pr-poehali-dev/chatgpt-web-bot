import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const contacts = [
  { icon: "Mail", label: "Email", value: "hello@nexusai.ru" },
  { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67" },
  { icon: "MapPin", label: "Офис", value: "Москва, Пресненская наб. 12" },
];

const ContactsSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contacts" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Контакты
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Свяжитесь{" "}
            <span className="text-gradient">с нами</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Расскажите о вашем проекте — подберём оптимальное решение
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            {contacts.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.08] transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-5">
              <p className="text-sm text-muted-foreground mb-3">Мы в соцсетях</p>
              <div className="flex gap-3">
                {["Send", "MessageCircle", "Github"].map((icon) => (
                  <button
                    key={icon}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <Icon name={icon} size={18} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 glass rounded-3xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Имя</label>
                <Input
                  placeholder="Александр"
                  className="bg-white/5 border-white/10 rounded-xl placeholder:text-muted-foreground/40"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="alex@company.ru"
                  className="bg-white/5 border-white/10 rounded-xl placeholder:text-muted-foreground/40"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Сообщение</label>
              <Textarea
                placeholder="Расскажите о вашем проекте..."
                rows={4}
                className="bg-white/5 border-white/10 rounded-xl placeholder:text-muted-foreground/40 resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
              disabled={sent}
            >
              {sent ? (
                <span className="flex items-center gap-2">
                  <Icon name="Check" size={18} />
                  Отправлено!
                </span>
              ) : (
                "Отправить"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
