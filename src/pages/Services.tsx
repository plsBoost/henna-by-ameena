import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Sparkles, Home as HomeIcon, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "14155551234";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to inquire about booking mehndi for an event.");
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const services = [
  {
    icon: Heart,
    title: "Bridal Mehndi",
    description: "Your wedding day deserves the most intricate and beautiful mehndi. I specialize in traditional Pakistani bridal designs that extend from fingertips to elbows and feet to calves.",
    details: [
      "Full bridal hands (front and back)",
      "Bridal feet designs",
      "Custom patterns incorporating your love story",
      "In-person consultation available",
    ],
  },
  {
    icon: Sparkles,
    title: "Mehndi Nights & Parties",
    description: "Make your pre-wedding celebrations memorable with stunning mehndi for the bride-to-be and all her guests. Perfect for mehndi nights, bridal showers, and sangeet events.",
    details: [
      "Designs for bridal party",
      "Guest mehndi services",
      "Multiple design options",
      "Group booking discounts",
    ],
  },
  {
    icon: HomeIcon,
    title: "At-Home Service",
    description: "Enjoy the comfort and convenience of having mehndi applied in your own home. Perfect for brides and families who prefer a relaxed, private setting.",
    details: [
      "I come to you in Irvine & Orange County",
      "Comfortable and relaxed atmosphere",
      "No travel stress on your special day",
      "Family members can be present",
    ],
  },
  {
    icon: Clock,
    title: "Eid & Special Occasions",
    description: "Celebrate Eid, Diwali, birthdays, baby showers, and other special moments with beautiful mehndi. Perfect for adding a touch of tradition to any celebration.",
    details: [
      "Simple to elaborate designs",
      "Quick turnaround options",
      "Perfect for celebrations",
      "Family packages available",
    ],
  },
];

const Services = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center space-y-6">
          <div className="gold-divider" />
          <h1 className="heading-hero text-foreground">Services</h1>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            Every design is custom-created based on your preferences, occasion, and style. 
            Contact me for personalized pricing and availability.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl space-y-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 md:p-10 rounded-sm shadow-soft border border-border/50"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="text-primary" size={28} />
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1">
                  <h2 className="heading-card text-foreground">{service.title}</h2>
                  <p className="text-body text-muted-foreground">{service.description}</p>
                  
                  <ul className="space-y-2 pt-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container-narrow text-center space-y-6">
          <h3 className="heading-card text-foreground">Custom Pricing</h3>
          <p className="text-body text-muted-foreground max-w-lg mx-auto">
            Every client and occasion is unique. Pricing depends on design complexity, 
            coverage area, and event requirements. Message me on WhatsApp to discuss 
            your needs and receive a personalized quote.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" />
              Get a Quote on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
