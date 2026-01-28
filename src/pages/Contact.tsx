import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Instagram, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "14155551234";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to inquire about booking mehndi for an event.");
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Contact = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center space-y-6">
          <div className="gold-divider" />
          <h1 className="heading-hero text-foreground">Contact</h1>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            Ready to book your mehndi or have questions? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-background">
        <div className="container max-w-2xl">
          <div className="space-y-8">
            {/* WhatsApp - Primary */}
            <div className="bg-card p-8 md:p-10 rounded-sm shadow-soft border border-border/50 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <MessageCircle className="text-[#25D366]" size={32} />
              </div>
              
              <div className="space-y-2">
                <h2 className="heading-card text-foreground">WhatsApp</h2>
                <p className="text-sm text-muted-foreground">
                  The best way to reach me for bookings and inquiries
                </p>
              </div>

              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  Message on WhatsApp
                </a>
              </Button>

              <p className="text-xs text-muted-foreground">
                Pre-filled message: "Hi! I'd like to inquire about booking mehndi for an event."
              </p>
            </div>

            {/* Other Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="bg-card p-6 rounded-sm shadow-soft border border-border/50 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={22} />
                </div>
                <h3 className="text-sm font-body font-medium text-foreground">Phone</h3>
                <a 
                  href="tel:+14155551234" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (415) 555-1234
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-card p-6 rounded-sm shadow-soft border border-border/50 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Instagram className="text-primary" size={22} />
                </div>
                <h3 className="text-sm font-body font-medium text-foreground">Instagram</h3>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  @mehndibyameena
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card p-6 rounded-sm shadow-soft border border-border/50 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={22} />
              </div>
              <h3 className="text-sm font-body font-medium text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">
                Serving Irvine & Orange County, California
              </p>
              <p className="text-xs text-muted-foreground">
                At-home service available throughout the area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Note */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container-narrow text-center space-y-4">
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            I typically respond within a few hours during business hours. 
            For urgent inquiries close to your event date, please mention it in your message.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
