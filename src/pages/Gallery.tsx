import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import GalleryLightbox from "@/components/GalleryLightbox";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
  { src: gallery1, alt: "Bridal full-hand mehndi design with intricate floral patterns" },
  { src: gallery2, alt: "Detailed mandala mehndi design on palm" },
  { src: gallery3, alt: "Elegant Arabic mehndi with geometric patterns" },
  { src: gallery4, alt: "Traditional Pakistani mehndi on feet" },
  { src: gallery5, alt: "Mehndi celebration with decorated hands" },
  { src: gallery6, alt: "Delicate finger mehndi design" },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { containerRef: gridRef, visibleItems } = useStaggeredAnimation(galleryImages.length, 100);
  const { ref: noteRef, isVisible: noteVisible } = useScrollAnimation();

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

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
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className={`aspect-[4/5] overflow-hidden rounded-sm shadow-soft group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-700 ${
                  visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Note */}
          <div
            ref={noteRef}
            className={`text-center mt-12 pt-8 border-t border-border transition-all duration-700 ${
              noteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Each design is unique and customized to your preferences.
              Contact me to discuss your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </main>
  );
};

export default Gallery;
