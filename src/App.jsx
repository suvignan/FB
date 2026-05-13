import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "./pages/Gallery";

function Home() {
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

  return (
    <>


      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] max-h-[800px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10"></div>
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_lz0K5QUhE51BPJGdXerY6aRLmhhsZOu2q8PW4XN1eiT-ZptWUQQFg-3S_0qKfM64B94PLjrynMwH-faPUdRn3TvlQdycqn_lEtPQ7XNyvM3Es0SE79p9mRdfWfVHIfT1N_A3c37DQO7qGHPLtIm-NDtcrD-GyOuJgmFX8_Jbk6GesQPGmGyvoj17Zd4ntVI4bPtWB55ZGnbMsNFbFPiV2FES8aBC7_IFqgTuM1u-qEMxP1gu8n-yuUxJofwg3W_mI6RWa7iEIXU" />
          </div>
          <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-6 block">Quiet Luxury Defined</span>
              <h1 className="font-display-xl text-display-xl text-on-surface mb-8">Fashion Boutique</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg">Custom Designs Tailored Just for You. Experience the art of bespoke tailoring where every stitch tells a story of elegance and precision.</p>
              <div className="flex gap-6">
                <a className="bg-primary text-on-primary px-10 py-5 rounded-lg font-label-sm text-label-sm uppercase tracking-widest hover:shadow-xl transition-all" href="#services">Explore Services</a>
                <Link className="bg-surface text-secondary border border-secondary/20 px-10 py-5 rounded-lg font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary-container transition-all" to="/gallery">Gallery Showcase</Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal" id="about">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative flex justify-center">
              <div className="absolute -top-10 -left-4 w-40 h-40 bg-primary-container rounded-full -z-10 opacity-50"></div>
              <img className="rounded-xl luxury-shadow w-full max-w-[400px] aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRT8nRtNrsLilZQPr9rdqZ23QFLgGq74bGLOFQniDOOBimfqaAcLUOVFrR7nw5TRj41A2twh0r1wVgNDlHC7RISEGsT_44G0Z3gEghrwf0aPrNcOYVFsAlKHSQSbBQKiYd5ho9M9wUUgGb6LU67k6O8S3oFX8u6suP8YFQWdj6TJuzjZIGUoqADSB1rm3VVOXiiV7y-d5QJokudxLgbbCZgPt_3_bTj5vJkKb3uhP1VJ1nR1s89lNrTxhhxHMiCngzdgvBkDDUGZc" />
            </div>
            <div className="space-y-8">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">The Art of Fine Tailoring</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">Located in the heart of Bagh Amberpet, Hyderabad, our boutique is a sanctuary for those who seek individuality in every garment. We specialize in the meticulous art of custom stitching, blending traditional craftsmanship with contemporary silhouettes.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <div>
                    <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-2">Personalized Design</h4>
                    <p className="text-on-surface-variant">One-on-one consultations to map your vision onto fabric.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <div>
                    <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-2">Precision Stitching</h4>
                    <p className="text-on-surface-variant">Master tailors ensuring every seam is structurally perfect.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="bg-surface py-section-gap px-margin-mobile md:px-margin-desktop reveal" id="process">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4 block">The Experience</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Signature Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Process Step 1 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-primary font-display-xl text-3xl">1</div>
                <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Consultation</h4>
                <p className="text-on-surface-variant text-sm">Meet our designers to discuss your vision, style preferences, and fabric choices.</p>
              </div>
              {/* Process Step 2 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-primary font-display-xl text-3xl">2</div>
                <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Measurements</h4>
                <p className="text-on-surface-variant text-sm">Precise measurements taken by our master tailors to ensure a flawless, custom fit.</p>
              </div>
              {/* Process Step 3 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-primary font-display-xl text-3xl">3</div>
                <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Craftsmanship</h4>
                <p className="text-on-surface-variant text-sm">Every stitch is handled with care using premium threads and artisanal techniques.</p>
              </div>
              {/* Process Step 4 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-primary font-display-xl text-3xl">4</div>
                <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Final Fitting</h4>
                <p className="text-on-surface-variant text-sm">A dedicated trial session to perfect the garment before it leaves our atelier.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-surface-container py-section-gap px-margin-mobile md:px-margin-desktop reveal" id="services">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-24">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4 block">Our Collections</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Curated Offerings</h2>
            </div>
            <div className="space-y-20">
              {/* Category: Blouses */}
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-8 border-b border-outline-variant/30 pb-4">Blouses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Item: Regular */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-48 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0qZEEQ_D3nJtXyxZUDGUqeOMYE7mzGFP2Y0EqARPvU9_j-2UV7s1afNC3n_BuubVxHeRgawUBr7r7e1joBIX5hWIpMutFs2_BKxRVtvdY-NlyiyE7hjK7NTHFtuI_35cqoJ5-k_X_dy4DYCvYwd_GLJFV6sQ42eXNnxxbTI1uxlmY2UFO2M20Pr7VXKd2cj2GBjoGMsXbuUdTc-MwghOwuUeny-F1rECO2qEtK9roYieIXS6tbRP1Z3N1qEA6xT0HqlcQwe0u9XA" alt="Regular Blouse" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Regular Blouse</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Classic daily wear styling, perfect for comfortable elegance.</p>
                    </div>
                  </div>
                  {/* Item: Princess Cut */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-48 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Blouse/Princess%20cut.jpg" alt="Princess Cut Blouse" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Princess Cut</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">A flattering, seamless front design providing a perfect contour.</p>
                    </div>
                  </div>
                  {/* Item: Work Blouse */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-48 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Blouse/Work-3.webp" alt="Work Blouse" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Work Blouse</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Detailed with subtle handwork, ideal for festive occasions.</p>
                    </div>
                  </div>
                  {/* Item: Pattern Designs */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-48 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Blouse/Pattern22.png" alt="Pattern Designs" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Pattern Designs</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Custom necklines and back patterns designed exclusively for you.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category: Suits & Frocks */}
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-8 border-b border-outline-variant/30 pb-4">Suits & Frocks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Item: Regular Suits */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Suits/REgualr%20Suits.png" alt="Regular Suits" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Regular Suits</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Traditional Salwar Kameez sets stitched with precise fitting.</p>
                    </div>
                  </div>
                  {/* Item: Anarkali Style */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Suits/A%20Suits.png" alt="Anarkali Style" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Anarkali Style</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Flowing, floor-length elegance with intricate pleating.</p>
                    </div>
                  </div>
                  {/* Item: Custom Frocks */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Froks/Custom%20Froks.png" alt="Custom Frocks" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Custom Frocks</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Western and Indo-western frocks with beautiful flares.</p>
                    </div>
                  </div>
                  {/* Item: Co-ord Sets */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Co-Ords%20Set/Coords%20set.png" alt="Co-ord Sets" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Co-ord Sets</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Contemporary matching sets blending comfort with Indian styling.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category: Grand Couture */}
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-8 border-b border-outline-variant/30 pb-4">Grand Couture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Item: Lehenga Blouses */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Lehenga/ll2.png" alt="Lehenga Blouses" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Lehenga Blouses</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Statement blouses with heavy embroidery to complement lehengas.</p>
                    </div>
                  </div>
                  {/* Item: Heavy Bridal Work */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Lehenga/Heavy%20Briday%20work.png" alt="Heavy Bridal Work" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Heavy Bridal Work</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Exquisite bridal craftsmanship featuring maggam and zardosi work.</p>
                    </div>
                  </div>
                  {/* Item: Crop Tops */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Co-Ords%20Set/Gemini_Generated_Image_s1okyfs1okyfs1ok.png" alt="Designer Crop Tops" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Designer Crop Tops</h4>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Modern, chic tops perfectly paired with skirts or palazzos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal" id="portfolio">
          <div className="text-center mb-24">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4 block">Portfolio</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Boutique Masterpieces</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="col-span-2 md:row-span-2 overflow-hidden rounded-xl max-h-[400px]">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdVMlc8Rmxn1oCKrnBLXC4AMo0MJ2d1tZNPo7pH1jTA2GyJif97G_-agH5MEuftkOqQUHgIy6nAX6yzcllOpp8O2R6ej5heKas6DnRWEzJfcxPSaworcwdDZu5K51WdVbu3v1-jIq_8B3x6wOSjUa2jWYIQ2y9cVNcBml6hWJ88rxT24j3ZL-4L-4CGMYfQBbbmV14a-fG93_ReI8jei539WW7NIMdueHQ_mDdguG9PZU2tnD7Kyq82zqo19LjKBUJpUN3tfziScg" />
            </div>
            <div className="overflow-hidden rounded-xl aspect-square">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtn1h0Au2zzFd7-D98Lb07nW-Yyz7Y5ZsTAcePCs0Y-MQNba4BRP_SIT4a5WU7bsdJ7O_FYzeW-gOkne6tAMeOZvwCFFZnyb87erReEu6CVSiSnxGddkQ0zJwWkTtvqyp7sWHa3c3KURsjbdy5yNW-gXAgLxiWXjWjGsdkSYWWky8KXJzhpIRRBiq2WLs2fCJJ9ENToKnWxeI0Khda38FIqsFBroy-G3E47C_mnWDENU4LMQdX1VmXS8XBkUpVNcK_SxBtPHEv4_I" />
            </div>
            <div className="overflow-hidden rounded-xl aspect-square">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2cInxH2HlcwX2wwNEDcIuh_ZfzCBFFBsJU9AZyU5fsE3P8HgShB8S327q1G2Hp16zcnKxLidBkHfrKdUVYxy3T6rZKWtlzQpydHWDd9Rft_yc9YsbL4vmkAXwLDOPtO9XOPaYzq-mJda4ESGvUiZAdw4Uf-LCV4AZ4nRKnq3E5-rDI_ngTpcmf3sn5XWpKEUwcqn0zQmT25wLA1gp9vO9_D1MVxDyz88XVorT8ybHNL1CG3yEkk0MI0xpYg2rL9qfOONKZz_Wq6s" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-xl aspect-[16/9] max-h-[300px]">
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4x_m8_Xfixlw4Xr8gncO0OXL8MabIrHQHX9YSIMBDGUCdqgvqWfRYlm52H-Ao6BeVO6avCEQ0FjznDOsNgb1pjXvIMsrJSmCW2UcxACGtuZ1JJaYFgTiA0-Z8xyFNPLrMyFJcMU8OhTELpV-tE77DuBZSOuMyUFtMX1yzfriVOtlF3lTL0kAa1gKKqaNowSye-t-RZfIhTwmnUamuNilmy8VKb_S23O94SgO1rOinZEZGtFvACihTDlxSDYWmYF4wmKpKrw3PUfs" />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop reveal" id="reviews">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4 block">Kind Words</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Customer Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface p-8 rounded-xl luxury-shadow flex flex-col items-center text-center">
                <div className="flex text-secondary mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-sm">star</span>)}
                </div>
                <p className="italic text-on-surface-variant mb-6">"The best boutique in Amberpet! Their attention to detail on my bridal blouse was incredible. Highly recommend!"</p>
                <h4 className="font-label-sm uppercase tracking-widest text-on-surface">Sravani Reddy</h4>
              </div>
              <div className="bg-surface p-8 rounded-xl luxury-shadow flex flex-col items-center text-center">
                <div className="flex text-secondary mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-sm">star</span>)}
                </div>
                <p className="italic text-on-surface-variant mb-6">"I got my custom frocks stitched here and the fit is just perfect. They really understand what the customer wants."</p>
                <h4 className="font-label-sm uppercase tracking-widest text-on-surface">Ananya P.</h4>
              </div>
              <div className="bg-surface p-8 rounded-xl luxury-shadow flex flex-col items-center text-center">
                <div className="flex text-secondary mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-sm">star</span>)}
                </div>
                <p className="italic text-on-surface-variant mb-6">"Very professional service and timely delivery. The pattern designs for blouses are very modern and unique."</p>
                <h4 className="font-label-sm uppercase tracking-widest text-on-surface">Meghana Rao</h4>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal" id="faq">
          <div className="text-center mb-16">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4 block">Inquiries</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-outline-variant pb-6">
              <h4 className="font-headline-sm text-on-surface mb-3">How long does custom stitching take?</h4>
              <p className="text-on-surface-variant">Typically, regular blouses take 3-5 days, while heavy bridal work and couture items may take 10-14 days depending on the intricacy.</p>
            </div>
            <div className="border-b border-outline-variant pb-6">
              <h4 className="font-headline-sm text-on-surface mb-3">Do you provide the fabric or should I bring mine?</h4>
              <p className="text-on-surface-variant">We primarily stitch on fabric provided by you to ensure it's exactly what you like, but we can recommend several trusted local vendors for specific materials.</p>
            </div>
            <div className="border-b border-outline-variant pb-6">
              <h4 className="font-headline-sm text-on-surface mb-3">Can you replicate a design from a photo?</h4>
              <p className="text-on-surface-variant">Yes! You can share your inspiration photos with us via WhatsApp or during your consultation, and we'll help bring a similar vision to life.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-section-gap bg-surface-container-high px-margin-mobile md:px-margin-desktop reveal" id="contact">
          <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-24">
            <div>
              <h2 className="font-display-xl text-headline-lg mb-8">Visit Our Atelier</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">Step into a world of curated elegance. Our boutique in Bagh Amberpet is designed to be a personal space for your fashion journey.</p>
              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-secondary luxury-shadow">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Address</h4>
                    <p className="text-on-surface-variant">2-2-647/A/1&2, Beside Saibaba Temple, Bagh Amberpet, Hyderabad, 500013</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-secondary luxury-shadow">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Phone</h4>
                    <p className="text-on-surface-variant">+91 95734 03852</p>
                  </div>
                </div>
              </div>
              <div className="h-[300px] w-full rounded-xl overflow-hidden luxury-shadow">
                <iframe
                  allowFullScreen=""
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6105828469373!2d78.513544!3d17.3944682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997f39d1b09b%3A0x673c246f414418a!2sBagh%20Amberpet%2C%20Hyderabad%2C%20Telangana%20500013!5e0!3m2!1sen!2sin!4v1700000000000"
                  style={{ border: 0 }}
                  width="100%"
                ></iframe>
              </div>
            </div>
            <div className="bg-surface p-12 rounded-xl luxury-shadow h-fit flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-6xl text-[#25D366] mb-6">chat</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-8">Chat With Us</h3>
              <a href="https://wa.me/919573403852?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20boutique%20services." target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-5 rounded-lg font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">forum</span>
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
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

  return (
    <Router>
      <header className="relative w-full z-50 flex flex-col shadow-sm">
        {/* Main Navigation */}
        <div className="w-full bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10">
          <nav className="flex justify-center items-center w-full px-margin-mobile md:px-margin-desktop py-10 md:py-16 max-w-container-max mx-auto">
            <div className="flex flex-col items-center gap-4">
              <img alt="Fashion Boutique Logo" className="h-32 w-32 md:h-44 md:w-44 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2m0qFKlCCPJssBn5BjIW2Zc8_2k7z2-A3bpxsG6EoueIfeg5ooXvPehKk2v_7O4-108GxM6Ld7ddmNC7e5EKV3-ifd4NFIcHNzp1yKoJaMB-ucHw00uYhIvPAsAe2vPINw2p-FS9zYsKgmn0VlyYDwTbjNwBB7yv9NRjSWiuYlGZwqplNWo3qao6AccqDouYx1z8CqT6AoY56JsPBkPeMhrcB_JaTu5GDI9tS_Gts-cpYR1AHtbUhkB4y-HhKeR7vUWRJluAuuss" />
              <span className="font-headline-lg text-headline-lg text-secondary tracking-tighter text-center">Fashion Boutique</span>
            </div>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-surface-container-highest w-full py-16">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-2">Fashion Boutique</span>
            <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant uppercase tracking-widest">Est. 2000 • Hyderabad</p>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant text-center md:text-right">
            © 2000 Fashion Boutique Hyderabad. All rights reserved.
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/919573403852?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20boutique%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-8 z-[100] bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        <span className="material-symbols-outlined text-2xl md:text-3xl">chat</span>
        <span className="absolute right-full mr-4 bg-surface text-on-surface px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat with us!
        </span>
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-[100] bg-surface text-secondary border border-outline-variant/30 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-container transition-all duration-300 group"
        aria-label="Back to Top"
      >
        <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">arrow_upward</span>
      </button>
    </Router>
  );
}

export default App;
