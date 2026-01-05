import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-mehndi.jpg";

const WHATSAPP_NUMBER = "14155551234";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to inquire about booking mehndi for an event.");
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const About = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center space-y-6">
          <div className="gold-divider" />
          <h1 className="heading-hero text-foreground">About Me</h1>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            The art of mehndi has been a cherished part of my life since childhood.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-soft">
              <img 
                src={heroImage} 
                alt="Mehndi artist at work"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="heading-section text-foreground">
                A Passion Rooted in Heritage
              </h2>
              
              <div className="space-y-4 text-body text-muted-foreground">
                <p>
                  Growing up in Pakistan, mehndi was woven into the fabric of every 
                  celebration—weddings, Eid, and family gatherings. I would watch 
                  mesmerized as the intricate patterns took shape, each design 
                  telling its own story.
                </p>
                <p>
                  What began as childhood fascination grew into a lifelong passion. 
                  I've spent over a decade perfecting my craft, blending traditional 
                  Pakistani techniques with contemporary Arabic influences to create 
                  designs that honor our heritage while embracing modern aesthetics.
                </p>
                <p>
                  Now based in Irvine, California, I have the privilege of being part 
                  of some of life's most precious moments—from bridal ceremonies to 
                  Eid celebrations. Each appointment is an opportunity to connect with 
                  families, share stories, and create art that will be remembered 
                  for years to come.
                </p>
              </div>

              <div className="pt-4">
                <div className="gold-divider !mx-0" />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-body font-medium text-foreground">My Promise</p>
                <p className="text-sm text-muted-foreground">
                  I use only natural, high-quality henna paste that is safe for all skin types 
                  and develops into a rich, long-lasting stain. Your comfort and satisfaction 
                  are my priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <h3 className="heading-card text-foreground">Tradition</h3>
              <p className="text-sm text-muted-foreground">
                Honoring centuries-old Pakistani and Arabic mehndi traditions in every design
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="heading-card text-foreground">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Using only natural henna for beautiful, safe, and long-lasting results
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="heading-card text-foreground">Care</h3>
              <p className="text-sm text-muted-foreground">
                Creating a warm, welcoming experience for you and your loved ones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container-narrow text-center space-y-6">
          <p className="text-body text-muted-foreground">
            I'd love to hear about your upcoming celebration.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" />
              Let's Connect
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
