"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const divisions = [
    { 
      id: 'transportation',
      title: 'Transportation & Logistics', 
      desc: 'Empowering over 1,000+ low-income operators through structured asset financing.',
      imgSrc: '/transportation 1.jpeg'
    },
    { 
      id: 'agriculture',
      title: 'Agriculture', 
      desc: 'Direct-from-farm commodity aggregation, warehousing, and bulk distribution chains.',
      imgSrc: '/agriculture 2.jpg'
    },
    { 
      id: 'medical',
      title: 'Medical Services', 
      desc: 'On-site clinical infrastructure integrated with real-time telehealth networks.',
      imgSrc: '/medical 2.jpeg'
    },
    { 
      id: 'fashion',
      title: 'Fashion & Trading', 
      desc: 'Diverse commercial trading channels delivering consumer lifestyle goods.',
      imgSrc: null 
    }
  ];

  const reviews = [
    { name: 'Abubakar S.', text: 'The tricycle financing completely changed my daily income. Reliable and transparent.' },
    { name: 'Grace Y.', text: 'Their agricultural supply chain ensures we get our commodities on time, every time.' },
    { name: 'Ibrahim M.', text: 'Amanzassa operates with absolute professionalism. A trusted partner in the North.' },
    { name: 'Silas D.', text: 'The medical clinic setup was rapid and the telehealth response is highly reliable.' },
    { name: 'Fatima K.', text: 'Honest business practices. The hire-purchase model is exactly as they described.' },
    { name: 'Yohanna B.', text: 'Outstanding logistics support. They bridge the gap perfectly for our operations.' },
  ];

  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 40s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}} />
      
      {/* Navigation */}
      <nav className="fixed w-full z-[100] px-4 py-3 md:px-8 flex justify-between items-center bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/amanzassa-logo.svg" 
            alt="Amanzassa Logo" 
            width={50} 
            height={50} 
            className="w-8 md:w-12 h-auto object-contain"
            priority
          />
          <span className="font-bold text-[#152C4A] text-lg md:text-xl hidden sm:block">AMANZASSA GLOBAL RESOURCES</span>
          <span className="font-bold text-[#152C4A] text-lg sm:hidden">AGR</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest text-[#152C4A] uppercase">
          <a href="#about" className="hover:text-blue-500 transition-colors">Enterprise</a>
          <a href="#sectors" className="hover:text-blue-500 transition-colors">Divisions</a>
          <a href="#contact" className="hover:bg-[#152C4A] hover:text-white px-4 py-2 border border-[#152C4A] transition-all">Partner With Us</a>
        </div>

        <button 
          className="md:hidden p-2 text-[#152C4A] focus:outline-none relative z-[101]" 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#152C4A] text-white flex flex-col items-center justify-center gap-8 md:hidden w-full h-screen">
          <button 
            className="absolute top-4 right-4 p-2 text-white focus:outline-none" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <Image 
            src="/amanzassa-logo.svg" 
            alt="Amanzassa Logo" 
            width={80} 
            height={80} 
            className="mb-4 brightness-0 invert" 
          />

          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase tracking-widest hover:text-blue-400">Enterprise</a>
          <a href="#sectors" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase tracking-widest hover:text-blue-400">Divisions</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black uppercase tracking-widest bg-white text-[#152C4A] px-8 py-4 mt-4 rounded">Partner</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-16 px-4 md:px-12 md:pt-48 md:pb-32" id="about">
        <div className="relative max-w-6xl mx-auto z-10">
          <p className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Est. 2018 | CAC RC: 1462476</p>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-[#152C4A] tracking-tighter mb-8 leading-[1.1]">
            One Company.<br/>Many Solutions.
          </h1>
          
          <div className="max-w-4xl border-l-4 border-blue-500 pl-4 md:pl-8 py-2">
            <p className="text-lg md:text-3xl text-gray-800 font-normal leading-relaxed mb-6">
              Founded in 2018, Amanzassa Global Resources has transformed from a localized operation into a diversified multi-sector enterprise. We build, finance, and scale sustainable solutions across critical areas of the regional economy.
            </p>
            <p className="text-base md:text-xl text-gray-600 font-normal leading-relaxed">
              By combining grassroots operational execution with structured enterprise strategies, we actively lower barriers to entry for commercial transit, secure staple food supply chains, and deliver modern clinical care precisely where market inefficiencies persist.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="relative py-16 md:py-24 px-4 md:px-12 bg-[#FAFAFA] overflow-hidden" id="sectors">
        <div 
          className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-multiply" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#152C4A] tracking-tight">Enterprise Divisions</h2>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
          {divisions.map((sector, idx) => (
            <Link 
              href={`/divisions/${sector.id}`} 
              key={sector.id} 
              className={`group relative block w-full md:w-4/5 h-[400px] md:h-[550px] overflow-hidden rounded-2xl bg-[#152C4A] shadow-lg hover:shadow-2xl transition-all duration-500 ${idx % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}
            >
              {sector.imgSrc ? (
                <Image 
                  src={sector.imgSrc} 
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-70"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#152C4A]">
                   <span className="text-white/30 tracking-widest uppercase text-sm font-bold">Asset Pending</span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1526]/90 via-[#10223A]/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full flex justify-between items-end">
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-3 tracking-tighter leading-tight">{sector.title}</h3>
                  <p className="text-blue-100/90 text-sm md:text-lg font-light leading-relaxed">{sector.desc}</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white group-hover:text-[#152C4A] transition-all duration-300 border border-white/20">
                  <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-white border-t border-gray-100" id="contact">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-[#152C4A] mb-4 md:mb-6 tracking-tighter">Initiate a Dialogue</h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 font-light leading-relaxed">
              Align with Amanzassa for strategic partnerships across logistics, agriculture, and healthcare.
            </p>
          </div>
          {/* Formspree Integration */}
          <form 
            action="https://formspree.io/f/xvzjyaop" 
            method="POST"
            className="w-full md:w-1/2 flex flex-col gap-6 bg-[#FAFAFA] p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm"
          >
            <input type="text" name="name" required placeholder="Full Name" className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-[#152C4A] transition-colors placeholder:text-gray-400" />
            <input type="email" name="email" required placeholder="Corporate Email" className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-[#152C4A] transition-colors placeholder:text-gray-400" />
            <textarea name="message" rows={4} required placeholder="Inquiry Details" className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-[#152C4A] transition-colors resize-none placeholder:text-gray-400"></textarea>
            <button type="submit" className="bg-[#152C4A] text-white font-bold uppercase tracking-widest text-sm py-5 mt-4 hover:bg-[#0A1526] transition-colors w-full rounded-md shadow-md">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Sliding Client Reviews Ticker */}
      <section className="bg-[#152C4A] py-6 border-t border-white/10 overflow-hidden flex whitespace-nowrap">
        <div className="animate-slide flex w-max">
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="inline-flex items-center gap-4 mx-4 md:mx-8">
              <span className="text-blue-400 font-bold text-sm md:text-base">{review.name}</span>
              <span className="text-white/20">—</span>
              <span className="text-gray-300 font-light italic text-sm md:text-base">&quot;{review.text}&quot;</span>
              <span className="text-white/20 ml-4 md:ml-8">•</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}