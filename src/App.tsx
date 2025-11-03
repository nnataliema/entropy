import { useState, useEffect } from 'react';

type Page = 'home' | 'about' | 'solutions' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-20');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden w-full relative">

      <nav className="py-8 px-6 relative z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 hover:scale-110 hover:opacity-80 transition-all duration-300"
          >
            <img src="/logo_dark.png" alt="Entropy Logo" className="h-6 w-6 select-none pointer-events-none" draggable="false" />
            <span className="text-xl font-light tracking-wide uppercase">ENTROPY</span>
          </button>
          <div className="flex items-center gap-6 sm:gap-12 text-sm font-light tracking-wide uppercase">
            <button
              onClick={() => setCurrentPage('about')}
              className="hover:scale-110 hover:text-red-600 transition-all duration-300 relative group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => setCurrentPage('solutions')}
              className="hover:scale-110 hover:text-red-600 transition-all duration-300 relative group"
            >
              SOLUTIONS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="hover:scale-110 hover:text-red-600 transition-all duration-300 relative group"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </nav>

      {currentPage === 'home' && (
        <>
          <div className="min-h-screen flex items-center justify-center relative z-10 px-6 -mt-20">
            <div className="text-center animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-light mb-12 leading-tight tracking-tight uppercase">
                TURN WASTE INTO <span className="animate-pulse-red">WARMTH</span>
              </h2>
              <h4 className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed uppercase animate-slide-up">
                <p>ΔS ≥ 0</p>
                <br></br>
                The Second Law of Thermodynamics states that the state of entropy of the entire universe, as an isolated system, will always increase over time. 
              </h4>
            </div>
          </div>

        <main className="max-w-6xl mx-auto px-6 py-32 relative z-10">

          <div className="space-y-32">
            <section className="scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 group">
              <h2 className="text-base md:text-lg font-light tracking-widest mb-6 text-gray-500 uppercase group-hover:text-red-600 transition-colors duration-300">THE PROBLEM</h2>
              <p className="text-3xl md:text-4xl font-light text-gray-400 leading-relaxed uppercase group-hover:text-gray-100 transition-colors duration-300">
                DATA CENTERS TURN 100% OF THEIR ELECTRICAL ENERGY INTO HEAT. THAT HEAT CAN BE CAPTURED TO WARM HOMES + BUSINESSES NEARBY. BUT PROJECTS ARE FRAGMENTED AND <em><b>SLOW</b></em> TO DEPLOY.
              </p>
            </section>

            <section className="scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 group">
              <h2 className="text-base md:text-lg font-light tracking-widest mb-6 text-gray-500 uppercase group-hover:text-red-600 transition-colors duration-300">OUR SOLUTION</h2>
              <p className="text-3xl md:text-4xl font-light text-gray-400 leading-relaxed uppercase group-hover:text-gray-100 transition-colors duration-300">
                ELIMINATE THE FRICTION. NURTURE THE SYMBIOTIC RELATIONSHIP BETWEEN COMPUTE AND COMMUNITIES.
              </p>
            </section>

            <section className="scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 group">
              <h2 className="text-base md:text-lg font-light tracking-widest mb-6 text-gray-500 uppercase group-hover:text-red-600 transition-colors duration-300">THE IMPACT</h2>
              <p className="text-3xl md:text-4xl font-light text-gray-400 leading-relaxed uppercase group-hover:text-gray-100 transition-colors duration-300">
                COMMUNITIES GET FREE HEATING. DATA CENTERS GET FREE COOLING. EVERYONE CUTS FOSSIL FUEL RELIANCE.
              </p>
            </section>


            <section className="py-24 text-center max-w-3xl mx-auto scroll-section opacity-0 translate-y-20 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight uppercase">READY TO CONNECT?</h2>
              <p className="text-xl font-light text-gray-400 mb-12 leading-relaxed">
              learn more + how to become a beta user
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-gray-800 text-gray-100 px-10 py-4 hover:bg-red-600 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 text-sm font-light tracking-wide uppercase"
              >
                CONTACT US
              </button>
            </section>
          </div>
        </main>
        </>
      )}

      {currentPage === 'about' && (
        <main className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <h1 className="text-7xl md:text-8xl font-light mb-20 leading-tight tracking-tight uppercase">ABOUT <span className="animate-pulse-red">ENTROPY</span></h1>

          <div className="space-y-12 text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-4xl uppercase">
            <p className="scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 hover:text-gray-100 group">
              <span className="text-gray-100">ENTROPY</span> IS A <span className="text-gray-100">B2B MARKETPLACE PLATFORM</span> CONNECTING <span className="text-gray-100">DATA CENTERS</span> WITH NEARBY BUILDINGS TO REUSE <span className="text-gray-100">WASTE HEAT</span>.
              WE BELIEVE THAT THE <span className="text-gray-100">MASSIVE AMOUNTS OF HEAT</span> GENERATED BY DATA CENTERS SHOULDN'T BE WASTED WHEN SO MANY
              FACILITIES NEED <span className="text-gray-100">RELIABLE, AFFORDABLE HEATING</span>.
            </p>

            <p className="scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 hover:text-gray-100 group">
              OUR MISSION IS TO <span className="text-gray-100">TRANSFORM WASTE HEAT</span> INTO A VALUABLE RESOURCE, CREATING <span className="text-gray-100">NEW REVENUE STREAMS</span> FOR DATA
              CENTERS WHILE PROVIDING <span className="text-gray-100">COST-EFFECTIVE, CARBON-NEGATIVE HEATING SOLUTIONS</span> FOR BUSINESSES AND COMMUNITIES.
            </p>
          </div>
        </main>
      )}

      {currentPage === 'solutions' && (
        <main className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <h1 className="text-7xl md:text-8xl font-light mb-20 leading-tight tracking-tight uppercase">OUR <span className="animate-pulse-red">SOLUTION</span></h1>


          <div className="space-y-24 max-w-4xl">
            <section className="scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 group">
              <h3 className="text-base md:text-lg font-light tracking-widest mb-6 text-gray-500 uppercase group-hover:text-red-600 transition-colors duration-300">MATCHMAKING ALGORITHM</h3>
              <p className="text-3xl md:text-4xl font-light text-gray-400 leading-relaxed uppercase group-hover:text-gray-100 transition-colors duration-300">
                WE MATCH SUPPLY (DATA CENTERS) WITH THE MOST COMPATIBLE DEMAND (OFFTAKERS).
              </p>
            </section>

            <section className="scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 group">
              <h3 className="text-base md:text-lg font-light tracking-widest mb-6 text-gray-500 uppercase group-hover:text-red-600 transition-colors duration-300">SAVINGS + COST CALCULATOR</h3>
              <p className="text-3xl md:text-4xl font-light text-gray-400 leading-relaxed uppercase group-hover:text-gray-100 transition-colors duration-300">
                WE CALCULATE HOW MUCH IT COSTS TO DEPLOY YOUR HEAT REUSE PROJECT AND HOW MUCH YOU WILL SAVE.
              </p>
            </section>

            <section className="scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 group">
              <h3 className="text-base md:text-lg font-light tracking-widest mb-6 text-gray-500 uppercase group-hover:text-red-600 transition-colors duration-300">REAL-TIME HEAT TRANSFER MONITORING</h3>
              <p className="text-3xl md:text-4xl font-light text-gray-400 leading-relaxed uppercase group-hover:text-gray-100 transition-colors duration-300">
                WE USE IOT SENSORS EMBEDDED IN THE INFRASTRUCTURE TO TRACK EACH WATT TRANSFERRED.
              </p>
            </section>

            <section className="scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 group">
              <h3 className="text-base md:text-lg font-light tracking-widest mb-6 text-gray-500 uppercase group-hover:text-red-600 transition-colors duration-300">CARBON CREDITS DASHBOARD</h3>
              <p className="text-3xl md:text-4xl font-light text-gray-400 leading-relaxed uppercase group-hover:text-gray-100 transition-colors duration-300">
                WE AUTOMATICALLY CONVERT EACH WATT AND CALCULATE YOUR RESULTING REVENUE FROM CARBON CREDITS.
              </p>
            </section>
          </div>
        </main>
      )}

      {currentPage === 'contact' && (
        <main className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <h1 className="text-7xl md:text-8xl font-light mb-20 leading-tight tracking-tight uppercase"><span className="animate-pulse-red">CONTACT</span> US</h1>

          <p className="text-2xl md:text-3xl font-light text-gray-400 mb-24 leading-relaxed max-w-4xl uppercase scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 hover:text-gray-100">
            learn more. let's collaborate:
          </p>

          <div className="space-y-12 mb-24 max-w-3xl">
            <div className="pb-8 border-b border-gray-800 scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 group">
              <h3 className="text-sm font-light tracking-widest mb-4 text-gray-500 uppercase group-hover:text-red-600 transition-colors duration-300">EMAIL</h3>
              <a
                href="mailto:hello@entropy.us.com"
                className="text-2xl font-light text-gray-400 hover:text-gray-100 transition-colors"
              >
                natalienarima@gmail.com
              </a>
            </div>

            <div className="pb-8 border-b border-gray-800 scroll-section opacity-0 translate-y-20 transition-all duration-700 hover:scale-105 group">
              <h3 className="text-sm font-light tracking-widest mb-4 text-gray-500 uppercase group-hover:text-red-600 transition-colors duration-300">PHONE</h3>
              <a
                href="tel:+16464897569"
                className="text-2xl font-light text-gray-400 hover:text-gray-100 transition-colors"
              >
                (646) 489-7569
              </a>
            </div>
          </div>

          <div>
            <a
              href="https://calendly.com/natalienarima/30min?back=1&month=2025-10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-gray-100 px-10 py-4 hover:bg-gray-600 transition-colors text-sm font-light tracking-wide uppercase"
            >
              BOOK WITH ME
            </a>
          </div>
        </main>
      )}

      <footer className="border-t border-gray-800 py-12 px-6 mt-32 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm font-light uppercase">
          <p className="mb-2 tracking-wide">SECOND LAW, INC.</p>
          <p className="tracking-wide">TURN WASTE INTO WARMTH</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
