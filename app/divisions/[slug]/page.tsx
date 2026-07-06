import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const divisionData = {
  transportation: {
    title: 'Transportation & Logistics',
    longDesc: 'Operating since 2018, Amanzassa Global Resources has systematically scaled its mobility finance division to empower local transit economies. Through our targeted asset deployment framework, we have helped more than 1,000+ low-income drivers secure access to commercial tricycles (Keke Napep). By transforming unbacked transport demand into structured hire-purchase agreements, we enable drivers across underserved regions primarily scaling operations in Taraba and Adamawa states to achieve financial autonomy while actively strengthening municipal logistics networks.',
    image: '/transportation 1.jpeg',
    stats: [
      { value: '1,000+', label: 'Drivers Empowered' },
      { value: '2', label: 'Operational States' },
      { value: '100%', label: 'Hire-Purchase' },
      { value: '12', label: 'Active Routes' },
      { value: '94%', label: 'Repayment Rate' }
    ]
  },
  agriculture: {
    title: 'Agriculture Supply Chain',
    longDesc: 'Amanzassa Global Resources connects local farming ecosystems with institutional demand. We partner directly with smallholder farmers to cultivate, source, and warehouse essential primary commodities, driving consistency and food security throughout the supply chain. Our operations handle large-scale stocking, preservation, and bulk distribution across an expanding portfolio including rice, maize, beans, kidney beans, soya beans, hibiscus, and sesame seeds.',
    image: '/agriculture 2.jpg',
    stats: [
      { value: '7+', label: 'Core Commodities' },
      { value: '1,500+', label: 'Partner Farmers' },
      { value: '3', label: 'Storage Hubs' },
      { value: '5,000+', label: 'Tons Annually' },
      { value: 'Direct', label: 'Sourcing Model' }
    ]
  },
  medical: {
    title: 'Medical Services & Telehealth',
    longDesc: 'Our medical division deploys a hybrid care model designed to bridge structural access gaps in healthcare delivery. Amanzassa integrates brick-and-mortar on-site medical clinics with highly adaptive telehealth consulting platforms. This configuration ensures rural and urban patients alike can connect immediately with verified clinical teams for rapid diagnostics, prescription access, and ongoing clinical consultations without traditional geographic boundaries.',
    image: '/medical 2.jpeg',
    stats: [
      { value: 'Hybrid', label: 'Delivery Model' },
      { value: '2', label: 'On-Site Clinics' },
      { value: '24/7', label: 'Telehealth Access' },
      { value: '2,500+', label: 'Consultations' },
      { value: '15+', label: 'Medical Partners' }
    ]
  },
  fashion: {
    title: 'Fashion & General Trading',
    longDesc: 'Formed as part of Amanzassa’s broader portfolio diversification strategy, our general trading and retail apparel unit satisfies evolving consumer lifestyle needs. Based out of our Kaduna hub, we manage structured product sourcing, inventory networks, and consumer-facing retail outlets with an emphasis on quality consistency and operational reliability.',
    image: null,
    stats: [
      { value: '1', label: 'Retail Hub (Kaduna)' },
      { value: '50+', label: 'Product Lines' },
      { value: '12', label: 'Supply Partners' },
      { value: '500+', label: 'Monthly Units' },
      { value: '100%', label: 'Quality Assurance' }
    ]
  }
};

export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = divisionData[resolvedParams.slug as keyof typeof divisionData];

  if (!data) return notFound();

  return (
    <main className="min-h-screen bg-[#FAFAFA] pt-24 px-4 md:px-12 pb-24">
      <nav className="mb-12 max-w-5xl mx-auto">
        <Link 
          href="/#sectors" 
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-brand-navy uppercase tracking-widest transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Enterprise
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto">
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter leading-tight">
            {data.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
            {data.longDesc}
          </p>
        </div>

        {/* Division Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 border-y border-gray-200 py-8">
          {data.stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-2xl md:text-4xl font-black text-brand-navy tracking-tight">{stat.value}</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Single High-Impact Image */}
        {data.image ? (
          <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-gray-100 ring-1 ring-gray-900/5 shadow-sm">
            <Image 
              src={data.image} 
              alt={`${data.title} operational view`} 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none"></div>
          </div>
        ) : (
          <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl bg-gray-100 ring-1 ring-gray-900/5 shadow-sm flex items-center justify-center">
            <span className="text-gray-400 font-bold tracking-widest uppercase">Asset Pending</span>
          </div>
        )}
      </div>
    </main>
  );
}