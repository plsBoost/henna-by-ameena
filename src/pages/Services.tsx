import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Heart, Sparkles, Home as HomeIcon, Clock } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_NUMBER = "19492058051";
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

const faqs = [
  {
    question: "How long does mehndi application take?",
    answer: "The time varies depending on the design complexity. A simple hand design takes about 15-30 minutes, while full bridal mehndi (both hands and feet) can take 3-5 hours. I always recommend setting aside plenty of time so we don't feel rushed.",
  },
  {
    question: "How long will my mehndi stain last?",
    answer: "With proper care, your mehndi stain can last 1-3 weeks. The darkness and longevity depend on factors like your skin type, where on the body the mehndi is applied (palms stain darkest), and how well you follow aftercare instructions.",
  },
  {
    question: "How should I care for my mehndi after application?",
    answer: "Keep the paste on as long as possible (at least 4-6 hours, overnight is best). Avoid water for 24 hours after removing the paste. Apply a mixture of lemon juice and sugar to help seal the design. Moisturize regularly and avoid chlorine and exfoliating products on the area.",
  },
  {
    question: "How far in advance should I book?",
    answer: "For bridal mehndi, I recommend booking 2-3 months in advance, especially during peak wedding season (spring and fall). For other events like Eid or parties, 2-4 weeks notice is usually sufficient, but earlier is always better to secure your preferred date.",
  },
  {
    question: "Do you travel outside Orange County?",
    answer: "Yes! While I'm based in Irvine and primarily serve Orange County, I'm happy to travel to Los Angeles, San Diego, and surrounding areas for bridal bookings and larger events. Travel fees may apply depending on distance.",
  },
  {
    question: "What type of henna do you use?",
    answer: "I use only 100% natural henna paste made from fresh henna powder, lemon juice, sugar, and essential oils. My henna is completely safe for all skin types, including sensitive skin and children. I never use 'black henna' which contains harmful chemicals.",
  },
];

const Services = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { containerRef: servicesRef, visibleItems: servicesVisible } = useStaggeredAnimation(services.length, 150);
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation();

  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div
          ref={heroRef}
          className={`container-narrow text-center space-y-6 transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
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
        <div ref={servicesRef} className="container max-w-4xl space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card p-8 md:p-10 rounded-sm shadow-soft border border-border/50 transition-all duration-700 ${
                servicesVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
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

      {/* FAQ Section */}
      <section className="section-padding bg-card">
        <div
          ref={faqRef}
          className={`container max-w-3xl transition-all duration-700 ${
            faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="text-center space-y-4 mb-10">
            <div className="gold-divider" />
            <h2 className="heading-section text-foreground">Frequently Asked Questions</h2>
            <p className="text-body text-muted-foreground max-w-xl mx-auto">
              Common questions about mehndi appointments and care
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-background rounded-sm border border-border/50 px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-body font-medium text-foreground hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-background border-t border-border">
        <div
          ref={pricingRef}
          className={`container-narrow text-center space-y-6 transition-all duration-700 ${
            pricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
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
