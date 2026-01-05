import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Bridal full-hand mehndi design with intricate floral patterns" },
  { src: gallery2, alt: "Detailed mandala mehndi design on palm" },
  { src: gallery3, alt: "Elegant Arabic mehndi with geometric patterns" },
  { src: gallery4, alt: "Traditional Pakistani mehndi on feet" },
  { src: gallery5, alt: "Mehndi celebration with decorated hands" },
  { src: gallery6, alt: "Delicate finger mehndi design" },
];

const Gallery = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center space-y-6">
          <div className="gold-divider" />
          <h1 className="heading-hero text-foreground">Gallery</h1>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            A collection of my recent work featuring bridal, party, and special occasion 
            mehndi designs.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-[4/5] overflow-hidden rounded-sm shadow-soft group"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Each design is unique and customized to your preferences. 
              Contact me to discuss your vision.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
