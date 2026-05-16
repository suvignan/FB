import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Traditional Hyderabad Style Gallery Images
  const images = [
    {
      id: 1,
      url: "/Gallery%20Images/Gemini_Generated_Image_3unhds3unhds3unh.png",
      title: "Bespoke Bridal Blouse",
      category: "Maggam Work"
    },
    {
      id: 2,
      url: "/Gallery%20Images/WhatsApp%20Image%202026-05-15%20at%2020.33.55.jpeg",
      title: "Classic Zardosi Detail",
      category: "Embroidery"
    },
    {
      id: 3,
      url: "/Gallery%20Images/WhatsApp%20Image%202026-05-15%20at%2020.41.37.jpeg",
      title: "Royal Nawabi Silhouette",
      category: "Couture"
    },
    {
      id: 4,
      url: "/Gallery%20Images/WhatsApp%20Image%202026-05-15%20at%2020.43.43.jpeg",
      title: "Hand-Embroidered Suit",
      category: "Suits"
    },
    {
      id: 5,
      url: "/Gallery%20Images/WhatsApp%20Image%202026-05-15%20at%2020.46.56.jpeg",
      title: "Traditional Pattu Motif",
      category: "Bridal"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Gallery Header */}
      <header className="relative w-full z-50 flex flex-col shadow-sm bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10">
        <nav className="flex justify-end items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          <Link to="/" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm uppercase tracking-widest hover:shadow-lg transition-all">
            Back Home
          </Link>
        </nav>
      </header>

      <main className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4 block">Boutique Gallery</span>
          <h1 className="font-display-xl text-display-xl text-on-surface">Traditional Hyderabad Style</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
            A curated showcase of our finest Maggam work, Zardosi embroidery, and bespoke Nawabi couture.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-2xl bg-surface-container-low reveal">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-on-primary/70 text-xs uppercase tracking-widest mb-2 font-label-sm">{image.category}</span>
                <h3 className="text-on-primary font-headline-sm text-xl">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Gallery Footer */}
      <footer className="bg-surface-container w-full py-12 mt-16">
        <div className="text-center">
          <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">
            © 2000 Fashion Boutique Hyderabad • Traditional Excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
