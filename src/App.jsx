

function App() {
  return (
    <>
      {/* TopAppBar Container */}
      <header className="relative w-full z-50 flex flex-col shadow-sm">
        {/* Top Info Bar */}
        

        {/* Main Navigation */}
        <div className="w-full bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10">
          <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 md:py-8 max-w-container-max mx-auto">
            <div className="flex items-center gap-6">
              <img alt="Fashion Boutique Logo" className="h-24 w-24 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2m0qFKlCCPJssBn5BjIW2Zc8_2k7z2-A3bpxsG6EoueIfeg5ooXvPehKk2v_7O4-108GxM6Ld7ddmNC7e5EKV3-ifd4NFIcHNzp1yKoJaMB-ucHw00uYhIvPAsAe2vPINw2p-FS9zYsKgmn0VlyYDwTbjNwBB7yv9NRjSWiuYlGZwqplNWo3qao6AccqDouYx1z8CqT6AoY56JsPBkPeMhrcB_JaTu5GDI9tS_Gts-cpYR1AHtbUhkB4y-HhKeR7vUWRJluAuuss" />
              <span className="font-headline-lg text-headline-lg text-secondary tracking-tighter">Fashion Boutique</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a className="font-body-md text-body-md text-secondary border-b border-secondary pb-1 transition-colors duration-300" href="#about">Craftsmanship</a>
              <a className="font-body-md text-body-md text-on-surface-variant pb-1 hover:text-secondary transition-colors duration-300" href="#services">Services</a>
              <a className="font-body-md text-body-md text-on-surface-variant pb-1 hover:text-secondary transition-colors duration-300" href="#portfolio">Portfolio</a>
              <a className="font-body-md text-body-md text-on-surface-variant pb-1 hover:text-secondary transition-colors duration-300" href="#contact">Contact</a>
            </div>
            <a href="#contact" className="bg-inverse-surface text-on-primary px-8 py-3 rounded-lg font-label-sm text-label-sm uppercase tracking-widest hover:opacity-80 transition-opacity text-center block">
              Book Visit
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-32">
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
                <a className="flex items-center gap-2 font-label-sm text-label-sm text-secondary uppercase tracking-widest border-b border-secondary/30 pb-1 hover:border-secondary transition-all" href="#contact">Consultation</a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="about">
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

        {/* Services Section */}
        <section className="bg-surface-container py-section-gap px-margin-mobile md:px-margin-desktop" id="services">
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
                        <span className="text-secondary font-label-sm">₹750–850</span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Classic daily wear styling, perfect for comfortable elegance.</p>
                    </div>
                  </div>
                  {/* Item: Princess Cut */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-48 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtn1h0Au2zzFd7-D98Lb07nW-Yyz7Y5ZsTAcePCs0Y-MQNba4BRP_SIT4a5WU7bsdJ7O_FYzeW-gOkne6tAMeOZvwCFFZnyb87erReEu6CVSiSnxGddkQ0zJwWkTtvqyp7sWHa3c3KURsjbdy5yNW-gXAgLxiWXjWjGsdkSYWWky8KXJzhpIRRBiq2WLs2fCJJ9ENToKnWxeI0Khda38FIqsFBroy-G3E47C_mnWDENU4LMQdX1VmXS8XBkUpVNcK_SxBtPHEv4_I" alt="Princess Cut Blouse" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Princess Cut</h4>
                        <span className="text-secondary font-label-sm">₹950</span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">A flattering, seamless front design providing a perfect contour.</p>
                    </div>
                  </div>
                  {/* Item: Work Blouse */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-48 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdVMlc8Rmxn1oCKrnBLXC4AMo0MJ2d1tZNPo7pH1jTA2GyJif97G_-agH5MEuftkOqQUHgIy6nAX6yzcllOpp8O2R6ej5heKas6DnRWEzJfcxPSaworcwdDZu5K51WdVbu3v1-jIq_8B3x6wOSjUa2jWYIQ2y9cVNcBml6hWJ88rxT24j3ZL-4L-4CGMYfQBbbmV14a-fG93_ReI8jei539WW7NIMdueHQ_mDdguG9PZU2tnD7Kyq82zqo19LjKBUJpUN3tfziScg" alt="Work Blouse" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Work Blouse</h4>
                        <span className="text-secondary font-label-sm">₹1000</span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Detailed with subtle handwork, ideal for festive occasions.</p>
                    </div>
                  </div>
                  {/* Item: Pattern Designs */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-48 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2cInxH2HlcwX2wwNEDcIuh_ZfzCBFFBsJU9AZyU5fsE3P8HgShB8S327q1G2Hp16zcnKxLidBkHfrKdUVYxy3T6rZKWtlzQpydHWDd9Rft_yc9YsbL4vmkAXwLDOPtO9XOPaYzq-mJda4ESGvUiZAdw4Uf-LCV4AZ4nRKnq3E5-rDI_ngTpcmf3sn5XWpKEUwcqn0zQmT25wLA1gp9vO9_D1MVxDyz88XVorT8ybHNL1CG3yEkk0MI0xpYg2rL9qfOONKZz_Wq6s" alt="Pattern Designs" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Pattern Designs</h4>
                        <span className="text-secondary font-label-sm">₹1100–1200</span>
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
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxv1EVpDxPtBk8fEU3zqX9Ck-3_4NcJ4XZQBOd4Gbe9d-O0Y235LgIejdL5X4oz5Ojc84UUFPvOTMZQ5YE4SBJzqrRqCQiNmS-CEY_VQXFIbVjoESM6EUKKOu_BTi3iYZkrpXLlrFq8kVRyurkrsDNqoYvMf9790jkDU2US00eXoN1F8u_g4CQ7Sn3lMwzggInP_LX5Z7_7GMiRpRS2ArVePzENXiL2a-JOHM-bKXLZktmaCYIQN78ZCBTD3opXgfNUVpfuGMX8Wk" alt="Regular Suits" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Regular Suits</h4>
                        <span className="text-secondary font-label-sm">₹750–850</span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Traditional Salwar Kameez sets stitched with precise fitting.</p>
                    </div>
                  </div>
                  {/* Item: Anarkali Style */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRT8nRtNrsLilZQPr9rdqZ23QFLgGq74bGLOFQniDOOBimfqaAcLUOVFrR7nw5TRj41A2twh0r1wVgNDlHC7RISEGsT_44G0Z3gEghrwf0aPrNcOYVFsAlKHSQSbBQKiYd5ho9M9wUUgGb6LU67k6O8S3oFX8u6suP8YFQWdj6TJuzjZIGUoqADSB1rm3VVOXiiV7y-d5QJokudxLgbbCZgPt_3_bTj5vJkKb3uhP1VJ1nR1s89lNrTxhhxHMiCngzdgvBkDDUGZc" alt="Anarkali Style" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Anarkali Style</h4>
                        <span className="text-secondary font-label-sm">₹1500–2000</span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Flowing, floor-length elegance with intricate pleating.</p>
                    </div>
                  </div>
                  {/* Item: Custom Frocks */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4x_m8_Xfixlw4Xr8gncO0OXL8MabIrHQHX9YSIMBDGUCdqgvqWfRYlm52H-Ao6BeVO6avCEQ0FjznDOsNgb1pjXvIMsrJSmCW2UcxACGtuZ1JJaYFgTiA0-Z8xyFNPLrMyFJcMU8OhTELpV-tE77DuBZSOuMyUFtMX1yzfriVOtlF3lTL0kAa1gKKqaNowSye-t-RZfIhTwmnUamuNilmy8VKb_S23O94SgO1rOinZEZGtFvACihTDlxSDYWmYF4wmKpKrw3PUfs" alt="Custom Frocks" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Custom Frocks</h4>
                        <span className="text-secondary font-label-sm">₹1500–1800</span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Western and Indo-western frocks with beautiful flares.</p>
                    </div>
                  </div>
                  {/* Item: Co-ord Sets */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0qZEEQ_D3nJtXyxZUDGUqeOMYE7mzGFP2Y0EqARPvU9_j-2UV7s1afNC3n_BuubVxHeRgawUBr7r7e1joBIX5hWIpMutFs2_BKxRVtvdY-NlyiyE7hjK7NTHFtuI_35cqoJ5-k_X_dy4DYCvYwd_GLJFV6sQ42eXNnxxbTI1uxlmY2UFO2M20Pr7VXKd2cj2GBjoGMsXbuUdTc-MwghOwuUeny-F1rECO2qEtK9roYieIXS6tbRP1Z3N1qEA6xT0HqlcQwe0u9XA" alt="Co-ord Sets" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Co-ord Sets</h4>
                        <span className="text-secondary font-label-sm">₹1200–2000</span>
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
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0OJB7zKUdpXcxa5nE36srRCv3bDzftNTkH9IXv6GtsjVv2lQdKsGA7KQVZ_tN8kgAPuj22_0WX6CBUW7asln0erQ1nCbKqNOyGMQatgRU5xjGrWbjoHRjoDnKqb8mZ0-gauaEsaaZ3xBZEnT-e-WESFSDiBzLZDYTb-WaZZt098oA9ICHatGcPADG12xXv4lFfHcFPt2Y3aQaq2OfLMng7UNL85_3HlMjrpWMTocYFZZihiPwAge5O84qA5Zr5wOMhcOL8wgk2lc" alt="Lehenga Blouses" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Lehenga Blouses</h4>
                        <span className="text-secondary font-label-sm">₹1800–2500</span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Statement blouses with heavy embroidery to complement lehengas.</p>
                    </div>
                  </div>
                  {/* Item: Heavy Bridal Work */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_lz0K5QUhE51BPJGdXerY6aRLmhhsZOu2q8PW4XN1eiT-ZptWUQQFg-3S_0qKfM64B94PLjrynMwH-faPUdRn3TvlQdycqn_lEtPQ7XNyvM3Es0SE79p9mRdfWfVHIfT1N_A3c37DQO7qGHPLtIm-NDtcrD-GyOuJgmFX8_Jbk6GesQPGmGyvoj17Zd4ntVI4bPtWB55ZGnbMsNFbFPiV2FES8aBC7_IFqgTuM1u-qEMxP1gu8n-yuUxJofwg3W_mI6RWa7iEIXU" alt="Heavy Bridal Work" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Heavy Bridal Work</h4>
                        <span className="text-secondary font-label-sm">₹3000+</span>
                      </div>
                      <p className="text-body-sm text-on-surface-variant">Exquisite bridal craftsmanship featuring maggam and zardosi work.</p>
                    </div>
                  </div>
                  {/* Item: Crop Tops */}
                  <div className="bg-surface rounded-xl overflow-hidden group hover:luxury-shadow transition-all duration-500">
                    <div className="h-56 w-full overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdVMlc8Rmxn1oCKrnBLXC4AMo0MJ2d1tZNPo7pH1jTA2GyJif97G_-agH5MEuftkOqQUHgIy6nAX6yzcllOpp8O2R6ej5heKas6DnRWEzJfcxPSaworcwdDZu5K51WdVbu3v1-jIq_8B3x6wOSjUa2jWYIQ2y9cVNcBml6hWJ88rxT24j3ZL-4L-4CGMYfQBbbmV14a-fG93_ReI8jei539WW7NIMdueHQ_mDdguG9PZU2tnD7Kyq82zqo19LjKBUJpUN3tfziScg" alt="Designer Crop Tops" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline-sm text-on-surface">Designer Crop Tops</h4>
                        <span className="text-secondary font-label-sm">₹1800+</span>
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
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="portfolio">
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

        {/* Contact Section */}
        <section className="py-section-gap bg-surface-container-high px-margin-mobile md:px-margin-desktop" id="contact">
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

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-surface-container-highest w-full py-16">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-headline-md text-headline-md text-primary dark:text-primary-fixed mb-2">Fashion Boutique</span>
            <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant uppercase tracking-widest">Est. 2024 • Hyderabad</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-label-sm text-label-sm">
            <a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300 underline underline-offset-4" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300 underline underline-offset-4" href="#">Terms of Service</a>
            <a className="text-secondary dark:text-secondary-fixed font-bold hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300 underline underline-offset-4" href="#">Instagram</a>
            <a className="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300 underline underline-offset-4" href="#">WhatsApp</a>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant text-center md:text-right">
            © 2024 Fashion Boutique Hyderabad. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
