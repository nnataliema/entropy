import { useState } from 'react';

type Page = 'home' | 'about' | 'solutions' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden w-full">
      <nav className="border-b border-white/20 py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-3xl hover:underline"
          >
            [ENTROPY]
          </button>
          <div className="flex items-center gap-8 text-lg">
            <button
              onClick={() => setCurrentPage('about')}
              className="hover:underline"
            >
              about
            </button>
            <button
              onClick={() => setCurrentPage('solutions')}
              className="hover:underline"
            >
              solutions
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="hover:underline"
            >
              contact
            </button>
          </div>
        </div>
      </nav>

      {currentPage === 'home' && (
        <main className="max-w-4xl mx-auto px-6 py-20">
          <div className="mb-20">
            <h1 className="text-7xl mb-8 leading-tight">
              Turn Waste into <span className="animate-turn-red">Warmth</span>
            </h1>
            <p className="text-3xl mb-6 text-white/80">
              Data centers generate massive amounts of heat. We connect them with businesses that need it.
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-4xl mb-6 border-b border-white/20 pb-2">The Problem</h2>
              <p className="text-2xl text-white/80 leading-relaxed">
                Data centers use enormous energy to cool their servers. That heat is typically wasted.
              </p>
            </section>

            <section>
              <h2 className="text-4xl mb-6 border-b border-white/20 pb-2">Our Solution</h2>
              <p className="text-2xl text-white/80 leading-relaxed">
                We capture that heat and deliver it to facilities that need it for heating, manufacturing, or agriculture.
              </p>
            </section>

            <section>
              <h2 className="text-4xl mb-6 border-b border-white/20 pb-2">The Impact</h2>
              <p className="text-2xl text-white/80 leading-relaxed">
                Lower energy costs for buyers. New revenue for data centers. Better for the planet.
              </p>
            </section>

            <section>
              <h2 className="text-4xl mb-6 border-b border-white/20 pb-2">How It Works</h2>
              <div className="space-y-4 text-2xl text-white/80 leading-relaxed">
                <p>
                  Data centers produce heat as servers run. Instead of releasing it into the air, we capture it through heat exchange systems.
                </p>
                <p>
                  That heat gets transferred to nearby facilities: agricultural operations, warehouses, district heating systems, or industrial processes.
                </p>
                <p>
                  Everyone wins. Data centers earn revenue from waste. Buyers get affordable heat. Communities reduce emissions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl mb-6 border-b border-white/20 pb-2">Who Benefits</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl mb-4 font-semibold">For Data Centers</h3>
                  <ul className="space-y-2 text-2xl text-white/80">
                    <li>→ Create a new revenue stream from waste heat</li>
                    <li>→ Improve sustainability metrics</li>
                    <li>→ Reduce cooling costs</li>
                    <li>→ Meet ESG goals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-3xl mb-4 font-semibold">For Heat Buyers</h3>
                  <ul className="space-y-2 text-2xl text-white/80">
                    <li>→ Access reliable, cost-effective heating</li>
                    <li>→ Lower operational expenses</li>
                    <li>→ Reduce carbon footprint</li>
                    <li>→ Simple integration with existing systems</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="border border-white/20 p-8 text-center">
              <h2 className="text-4xl mb-4">Ready to Connect?</h2>
              <p className="text-2xl text-white/80 mb-8">
                Whether you have heat to sell or need a heating solution, we make the connection simple.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-2xl"
              >
                Contact Us
              </button>
            </section>
          </div>
        </main>
      )}

      {currentPage === 'about' && (
        <main className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-7xl mb-12">About Entropy</h1>

          <div className="space-y-8 text-2xl text-white/80 leading-relaxed">
            <p>
              <strong className="text-white">Entropy</strong> is a <strong className="text-white">B2B marketplace platform</strong> connecting <strong className="text-white">data centers</strong> with nearby buildings to reuse <strong className="text-white">waste heat</strong>.
              We believe that the <strong className="text-white">massive amounts of heat</strong> generated by data centers shouldn't be wasted when so many
              facilities need <strong className="text-white">reliable, affordable heating</strong>.
            </p>

            <p>
              Our mission is to <strong className="text-white">transform waste heat</strong> into a valuable resource, creating <strong className="text-white">new revenue streams</strong> for data
              centers while providing <strong className="text-white">cost-effective, carbon-negative heating solutions</strong> for businesses and communities.
            </p>

            <p>
              By matching <strong className="text-white">heat suppliers</strong> with <strong className="text-white">heat offtakers</strong> based on location, temperature requirements, and demand
              profiles, we're enabling <strong className="text-white">sustainable heating at scale</strong> and helping <strong className="text-white">reduce carbon emissions</strong> across industries.
            </p>
          </div>
        </main>
      )}

      {currentPage === 'solutions' && (
        <main className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-7xl mb-12">Our Solution</h1>

          <p className="text-3xl text-white/80 leading-relaxed mb-12">
            Entropy connects data centers with nearby buildings to reuse their waste heat. Our platform matches
            heat suppliers with heat offtakers based on location, temperature, and demand profiles to enable
            carbon-negative heating at scale.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-3xl mb-3 border-b border-white/20 pb-2">Matchmaking Algorithm</h3>
              <p className="text-2xl text-white/80 leading-relaxed">
                We match supply (data centers) with the most compatible demand (offtakers).
              </p>
            </section>

            <section>
              <h3 className="text-3xl mb-3 border-b border-white/20 pb-2">Savings + Cost Calculator</h3>
              <p className="text-2xl text-white/80 leading-relaxed">
                We calculate how much it costs to deploy your heat reuse project and how much you will save.
              </p>
            </section>

            <section>
              <h3 className="text-3xl mb-3 border-b border-white/20 pb-2">Real-time Heat Transfer Monitoring</h3>
              <p className="text-2xl text-white/80 leading-relaxed">
                We use IoT sensors embedded in the infrastructure to track each Watt transferred.
              </p>
            </section>

            <section>
              <h3 className="text-3xl mb-3 border-b border-white/20 pb-2">Carbon Credits Dashboard</h3>
              <p className="text-2xl text-white/80 leading-relaxed">
                We automatically convert each Watt and calculate your resulting revenue from carbon credits.
              </p>
            </section>
          </div>
        </main>
      )}

      {currentPage === 'contact' && (
        <main className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-7xl mb-12">Contact Us</h1>

          <p className="text-3xl text-white/80 mb-12 leading-relaxed">
            Interested in learning more about Entropy or exploring partnership opportunities?
            We'd love to hear from you.
          </p>

          <div className="space-y-8 mb-12">
            <div className="border-b border-white/20 pb-4">
              <h3 className="text-3xl mb-2">Email</h3>
              <a
                href="mailto:hello@entropy.us.com"
                className="text-2xl text-white/80 hover:text-white hover:underline"
              >
                hello@entropy.us.com
              </a>
            </div>

            <div className="border-b border-white/20 pb-4">
              <h3 className="text-3xl mb-2">Phone</h3>
              <a
                href="tel:+16464897569"
                className="text-2xl text-white/80 hover:text-white hover:underline"
              >
                (646) 489-7569
              </a>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/natalienarima/30min?back=1&month=2025-10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-2xl"
            >
              Book With Me
            </a>
          </div>
        </main>
      )}

      <footer className="border-t border-white/20 py-8 px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center text-white/60 text-lg">
          <p className="mb-1">Second Law, Inc.</p>
          <p>Turn waste into warmth</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
