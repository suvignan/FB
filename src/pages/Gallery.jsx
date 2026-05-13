import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // Traditional Hyderabad Style Gallery Images
  const images = [
    {
      id: 1,
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0qZEEQ_D3nJtXyxZUDGUqeOMYE7mzGFP2Y0EqARPvU9_j-2UV7s1afNC3n_BuubVxHeRgawUBr7r7e1joBIX5hWIpMutFs2_BKxRVtvdY-NlyiyE7hjK7NTHFtuI_35cqoJ5-k_X_dy4DYCvYwd_GLJFV6sQ42eXNnxxbTI1uxlmY2UFO2M20Pr7VXKd2cj2GBjoGMsXbuUdTc-MwghOwuUeny-F1rECO2qEtK9roYieIXS6tbRP1Z3N1qEA6xT0HqlcQwe0u9XA",
      title: "Royal Maggam Work",
      category: "Blouses"
    },
    {
      id: 2,
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRT8nRtNrsLilZQPr9rdqZ23QFLgGq74bGLOFQniDOOBimfqaAcLUOVFrR7nw5TRj41A2twh0r1wVgNDlHC7RISEGsT_44G0Z3gEghrwf0aPrNcOYVFsAlKHSQSbBQKiYd5ho9M9wUUgGb6LU67k6O8S3oFX8u6suP8YFQWdj6TJuzjZIGUoqADSB1rm3VVOXiiV7y-d5QJokudxLgbbCZgPt_3_bTj5vJkKb3uhP1VJ1nR1s89lNrTxhhxHMiCngzdgvBkDDUGZc",
      title: "Traditional Hyderabad Embroidery",
      category: "Bridal"
    },
    {
      id: 3,
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdVMlc8Rmxn1oCKrnBLXC4AMo0MJ2d1tZNPo7pH1jTA2GyJif97G_-agH5MEuftkOqQUHgIy6nAX6yzcllOpp8O2R6ej5heKas6DnRWEzJfcxPSaworcwdDZu5K51WdVbu3v1-jIq_8B3x6wOSjUa2jWYIQ2y9cVNcBml6hWJ88rxT24j3ZL-4L-4CGMYfQBbbmV14a-fG93_ReI8jei539WW7NIMdueHQ_mDdguG9PZU2tnD7Kyq82zqo19LjKBUJpUN3tfziScg",
      title: "Nawabi Style Couture",
      category: "Lehengas"
    },
    {
      id: 4,
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtn1h0Au2zzFd7-D98Lb07nW-Yyz7Y5ZsTAcePCs0Y-MQNba4BRP_SIT4a5WU7bsdJ7O_FYzeW-gOkne6tAMeOZvwCFFZnyb87erReEu6CVSiSnxGddkQ0zJwWkTtvqyp7sWHa3c3KURsjbdy5yNW-gXAgLxiWXjWjGsdkSYWWky8KXJzhpIRRBiq2WLs2fCJJ9ENToKnWxeI0Khda38FIqsFBroy-G3E47C_mnWDENU4LMQdX1VmXS8XBkUpVNcK_SxBtPHEv4_I",
      title: "Zardosi Masterpiece",
      category: "Suits"
    },
    {
      id: 5,
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2cInxH2HlcwX2wwNEDcIuh_ZfzCBFFBsJU9AZyU5fsE3P8HgShB8S327q1G2Hp16zcnKxLidBkHfrKdUVYxy3T6rZKWtlzQpydHWDd9Rft_yc9YsbL4vmkAXwLDOPtO9XOPaYzq-mJda4ESGvUiZAdw4Uf-LCV4AZ4nRKnq3E5-rDI_ngTpcmf3sn5XWpKEUwcqn0zQmT25wLA1gp9vO9_D1MVxDyz88XVorT8ybHNL1CG3yEkk0MI0xpYg2rL9qfOONKZz_Wq6s",
      title: "Ethnic Patterns",
      category: "Blouses"
    },
    {
      id: 6,
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4x_m8_Xfixlw4Xr8gncO0OXL8MabIrHQHX9YSIMBDGUCdqgvqWfRYlm52H-Ao6BeVO6avCEQ0FjznDOsNgb1pjXvIMsrJSmCW2UcxACGtuZ1JJaYFgTiA0-Z8xyFNPLrMyFJcMU8OhTELpV-tE77DuBZSOuMyUFtMX1yzfriVOtlF3lTL0kAa1gKKqaNowSye-t-RZfIhTwmnUamuNilmy8VKb_S23O94SgO1rOinZEZGtFvACihTDlxSDYWmYF4wmKpKrw3PUfs",
      title: "Designer Silhouette",
      category: "Bridal"
    },
    // Adding more placeholders to reach 12-15 images
    { id: 7, url: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800", title: "Hyderabadi Wedding Wear", category: "Bridal" },
    { id: 8, url: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800", title: "Intricate Stone Work", category: "Maggam" },
    { id: 9, url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800", title: "Royal Velvet Texture", category: "Couture" },
    { id: 10, url: "https://images.unsplash.com/photo-1621285853634-713b8dd6b5ee?auto=format&fit=crop&q=80&w=800", title: "Silk Handwork", category: "Blouses" },
    { id: 11, url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800", title: "Traditional Motifs", category: "Suits" },
    { id: 12, url: "https://images.unsplash.com/photo-1631233869275-108154124976?auto=format&fit=crop&q=80&w=800", title: "Floral Maggam Detail", category: "Maggam" },
    { id: 13, url: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=800", title: "Bridal Elegance", category: "Bridal" },
    { id: 14, url: "https://images.unsplash.com/photo-1583391733975-ac821033226a?auto=format&fit=crop&q=80&w=800", title: "Heritage Craft", category: "Couture" },
    { id: 15, url: "https://images.unsplash.com/photo-1591348113527-5809dabcfa6e?auto=format&fit=crop&q=80&w=800", title: "Artisan Patterns", category: "Suits" },
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
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
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
