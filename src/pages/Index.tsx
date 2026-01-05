import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles, Heart, Home as HomeIcon } from "lucide-react";
import heroImage from "@/assets/hero-mehndi.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const WHATSAPP_NUMBER = "14155551234";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to inquire about booking mehndi for an event.");
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Beautiful bridal mehndi design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/40 via-brown/30 to-brown/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center px-6 pt-20">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h1 className="heading-hero text-cream">
              Elegant Pakistani Mehndi
              <span className="block mt-2 text-gold-light">in Irvine, CA</span>
            </h1>
            
            <p className="text-lg md:text-xl text-cream/90 font-body font-light max-w-xl mx-auto">
              Bridal • Parties • Special Occasions
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  Book via WhatsApp
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/gallery">
                  View Gallery
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cream/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust / Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center space-y-8">
          <div className="gold-divider animate-fade-in-delay-1" />
          
          <h2 className="heading-section text-foreground animate-fade-in-delay-2">
            Artistry Rooted in Tradition
          </h2>
          
          <div className="space-y-6 text-body text-muted-foreground animate-fade-in-delay-3">
            <p>
              With over a decade of experience, I bring the rich heritage of Pakistani and Arabic 
              mehndi artistry to every design. Each pattern is thoughtfully crafted to tell your 
              unique story.
            </p>
            <p>
              Using only the finest natural henna, I create intricate designs that develop into 
              beautiful, long-lasting stains. Whether it's your wedding day, a mehndi night, 
              or Eid celebration, I'm honored to be part of your special moment.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles size={20} className="text-primary" />
              <span className="text-sm font-body">Traditional Designs</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart size={20} className="text-primary" />
              <span className="text-sm font-body">Natural Henna</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <HomeIcon size={20} className="text-primary" />
              <span className="text-sm font-body">At-Home Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="section-padding bg-card">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <div className="gold-divider" />
            <h2 className="heading-section text-foreground">My Work</h2>
            <p className="text-body text-muted-foreground max-w-xl mx-auto">
              A glimpse of recent bridal and event mehndi designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, index) => (
              <div 
                key={index}
                className="aspect-[4/5] overflow-hidden rounded-sm shadow-soft group"
              >
                <img 
                  src={img} 
                  alt={`Mehndi design ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-background">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <div className="gold-divider" />
            <h2 className="heading-section text-foreground">Services</h2>
            <p className="text-body text-muted-foreground max-w-xl mx-auto">
              Traditional mehndi artistry for all your special occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Bridal Mehndi */}
            <div className="bg-card p-8 rounded-sm shadow-soft text-center space-y-4 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="heading-card text-foreground">Bridal Mehndi</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Intricate, full-coverage designs crafted for your most important day, 
                from hands to feet.
              </p>
            </div>

            {/* Mehndi Nights */}
            <div className="bg-card p-8 rounded-sm shadow-soft text-center space-y-4 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="heading-card text-foreground">Mehndi Nights & Parties</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Beautiful designs for your bridal party, guests, and pre-wedding 
                celebrations.
              </p>
            </div>

            {/* Eid & Special Occasions */}
            <div className="bg-card p-8 rounded-sm shadow-soft text-center space-y-4 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <HomeIcon className="text-primary" size={24} />
              </div>
              <h3 className="heading-card text-foreground">Eid & Special Occasions</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Celebrate holidays and milestones with elegant designs for you 
                and your loved ones.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="section-padding bg-brown">
        <div className="container-narrow text-center space-y-8">
          <div className="w-16 h-0.5 bg-gold-light mx-auto" />
          
          <h2 className="heading-section text-cream">
            Ready to Book Your Mehndi?
          </h2>
          
          <p className="text-body text-cream/80 max-w-lg mx-auto">
            Message me on WhatsApp to check availability and discuss your design ideas. 
            I'd love to be part of your special celebration.
          </p>

          <Button variant="whatsapp" size="xl" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={22} />
              Message on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
