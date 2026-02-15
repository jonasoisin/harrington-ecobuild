import Link from "next/link";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { CookieBanner } from "@/components/ui/cookie-banner";

const partnerLogos = [
  { id: 1, name: "ExxonMobil", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Exxon_logo.svg" },
  { id: 2, name: "Shell", src: "https://upload.wikimedia.org/wikipedia/en/e/e8/Shell_logo.svg" },
  { id: 3, name: "BP", src: "https://cms-assets.great.prod.uktrade.digital/images/BP.width-700.png" },
  { id: 4, name: "Chevron", src: "https://arda.africa/wp-content/uploads/2024/03/Arda_Sponsor_Logos_Silver_Chevron_V2.png" },
  { id: 5, name: "TotalEnergies", src: "https://mrenergy.gr/wp-content/uploads/2017/05/total-logo.jpg" },
  { id: 6, name: "Saudi Aramco", src: "https://marcopolis.net/wp-content/uploads/saudi-arabia-report/2022/top_companies/Saudi_Aramco.jpg" },
  { id: 7, name: "ConocoPhillips", src: "https://www.theladders.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcompany-photo.theladders.com%2F6496%2Fdfe58114-0ac1-4da8-ba05-8537f73970a9.png&w=1080&q=75" },
  { id: 8, name: "Eni", src: "https://www.eni.com/content/dam/enicom/images/loghi/marchio-eni-page.jpg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light text-slate-900 transition-colors duration-200 font-sans">


      <header className="relative min-h-fit md:h-[85vh] overflow-hidden">
        <img alt="Offshore wind farm at sunset" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-95dvbjJwsmLWBdV_bTb6eSHeytAiZ9NwA8oaYoSFCzjxaaH0XwbCAYQrxdrWSToAbd0Bm2fNPqFZL9WuYyJTLOI9WDXxWds5WbjLsvfc9mSEB2pJk7Sf-a8n1BAmnDnQMbGXW0ZFhsa2HU_iCh5Sbllf8UWVZ56iP6wL5j3crzulhpRkWHDycpFD2sMi85zyb2mKN7ywEsw0wdHdotTEfPBeMTc7gFebvGhSHgThc_PpTqGaHJFAUXYcYwOdT-w7VYKh8hQs0w" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,43,64,0.9)] to-[rgba(11,43,64,0.4)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-20 md:py-0">
          <div className="max-w-2xl border-l-4 border-deep-red pl-8 py-4 border-deep-red">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6">
              Welcome...<br />to PillarVolt.
            </h1>
            <p className="text-base sm:text-xl text-slate-200 mb-6 md:mb-10 leading-relaxed max-w-lg">
              Where we energize the lives of millions of people.
            </p>
            <Link href="/about" className="bg-[#8B0000] text-white px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-bold tracking-wider  transition-all flex items-center gap-2 w-fit">
              Learn more.
              <span className="material-icons-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="col-span-2 md:col-span-4 text-white">
            <h3 className="text-2xl font-bold mb-4">On track to increase returns and grow production...</h3>
            <p className="text-lg font-semibold mb-4 text-deep-red">Can an oil and gas company be part of a sustainable energy future?</p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              We're working actively to reduce climate emissions, put a price on carbon, and benefit societies around the world. We aim to be the world's most carbon-efficient oil and gas producer, and are investing actively in renewable.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Trusted by Industry Leaders
          </p>
          <LogoCarousel logos={partnerLogos} columns={4} />
        </div>
      </section>



      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            {/* Open */}
            <div className="bg-white p-8 border-t-4 border-deep-red shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Open.</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">check_circle</span>
                  <span>Pro-actively communicate in a clear truthful, direct and sincere way</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">groups</span>
                  <span>Work together and share experiences</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">visibility</span>
                  <span>Promote and value transparency.</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">chat</span>
                  <span>Say what you mean, and do what you say</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">balance</span>
                  <span>Stand up for what you believe is just and good.</span>
                </li>
              </ul>
            </div>

            {/* Trust */}
            <div className="bg-white p-8 border-t-4 border-deep-red shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Trust.</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">volunteer_activism</span>
                  <span>Believe in your colleague's capabilities and competences.</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">bolt</span>
                  <span>Empower yourself and your colleagues to work towards our strategic goals</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">handshake</span>
                  <span>Respect that the value of your contributions depends on the contributions from others.</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">verified</span>
                  <span>Set high standards for yourself and your colleagues</span>
                </li>
              </ul>
            </div>

            {/* Integrity */}
            <div className="bg-white p-8 border-t-4 border-deep-red shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Integrity.</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">shield</span>
                  <span>Be ethically unyielding and honest</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">gavel</span>
                  <span>Accept that you are empowered and have influence over our decisions and actions</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">assignment_turned_in</span>
                  <span>Take responsibility for your actions and deliver on promises</span>
                </li>
                <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="material-icons-outlined text-deep-red shrink-0 text-lg">loyalty</span>
                  <span>Act decisively and be loyal to decisions</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black">
          <img alt="Oil refinery" className="w-full h-full object-cover opacity-40" src="https://media.istockphoto.com/id/484834404/photo/oil-refinery.jpg?s=612x612&w=0&k=20&c=QO1-in3-u-WEFhVjqkzuKrqxpSbfbKXxhvSYP0fEGPA=" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <h2 className="text-4xl font-bold text-#8B0000 mb-6">Energy for life</h2>
            <p className="text-white text-lg mb-4">
              In all our business activities we comply with applicable laws, act in an ethical, sustainable and socially responsible manner, practise good corporate governance and respect internationally recognised human rights.
            </p>
            <p className="text-slate-300 mb-10 text-sm">
              Discover how we're innovating in oil and gas energy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-bold text-deep-red tracking-widest uppercase border border-deep-red px-3 py-1">Ongoing Project</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Oil refining.</h2>
              <div className="prose prose-slate text-slate-600">
                <p className="mb-4">
                  PillarVolt is capable of carrying out high volumes of oil refining. In recent years, the Company's refining activities have been focused on meeting the market demand for quality petroleum products.
                </p>
                <p className="mb-4">
                  Over a number of years, PillarVolt has been consistently implementing the modernization program for refineries, which has improved the quality of its products and increased its competitiveness.
                </p>
                <p className="mb-8">
                  This is the most ambitious program for the modernization of oil refining capacities in the oil industry, which includes the fulfilment of the Company's obligations under the quadripartite agreement.
                </p>
              </div>
              <Link href="/projects" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold tracking-wider transition-all uppercase inline-flex items-center gap-2">
                Find out more.
                <span className="material-icons-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img alt="Oil refinery modernization" className="w-full h-full object-cover" src="https://www.mbenergy.com/fileadmin/_processed_/0/5/csm_image_raffinerie_AdobeStock_202041790_Standardlizenz_2022-03-31_1920_3ce4ef600e.jpg" />
            </div>
          </div>
        </div>
      </section>

      <CookieBanner />
    </main>
  );
}
