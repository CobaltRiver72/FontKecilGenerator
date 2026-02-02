import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

const posts = [
  {
    slug: 'font-kecil-itu-apa',
    title: 'Font Kecil Itu Apa?',
    description: 'Pahami cara kerja tulisan kecil berbasis Unicode dan perbedaannya dengan font biasa.',
  },
  {
    slug: 'font-kecil-wa-ig-tiktok',
    title: 'Kompatibilitas WA/IG/TikTok',
    description: 'Pelajari masalah umum dan cara mengatasinya saat menggunakan font kecil di berbagai platform.',
  },
  {
    slug: 'cara-membuat-tulisan-kecil',
    title: 'Cara Membuat Tulisan Kecil',
    description: 'Panduan lengkap membuat tulisan kecil untuk bio, nama profil, dan caption.',
  },
  {
    slug: 'small-caps-vs-superscript',
    title: 'Small Caps vs Superscript',
    description: 'Bandingkan dua gaya font kecil paling populer dan temukan mana yang cocok untuk kebutuhanmu.',
  },
];

export default function BlogGuide() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Artikel Panduan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Panduan Font Kecil
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pelajari lebih dalam tentang font kecil, tulisan kecil, dan cara menggunakannya dengan optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.description}
              </p>
              <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium group-hover:gap-2 transition-all">
                Baca selengkapnya
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Lihat Semua Artikel
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
