import { Metadata } from 'next';
import CalculatorWidget from '../../../components/CalculatorWidget';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  
  const title = `${slug.replace(/-/g, ' ').toUpperCase()} — Nova Epoksi Zemin Çözümleri`;
  const description = `${slug.replace(/-/g, ' ')} alanında 10 yıl garantili endüstriyel epoksi zemin kaplama. m² fiyatı hesaplayın ve yerinde keşif isteyin.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: [{ url: `/images/services/${slug}.jpg` }]
    }
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params;

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
              🏭 Uzman Endüstriyel Altyapı
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white capitalize leading-tight mb-4">
              {slug.replace(/-/g, ' ')}
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Fabrika, lojistik depo ve ağır yük tesisleri için mühendislik standartlarında yüksek mukavemetli kaplama çözümleri.
            </p>
          </div>

          <div>
            <CalculatorWidget />
          </div>
        </div>
      </div>
    </main>
  );
}
