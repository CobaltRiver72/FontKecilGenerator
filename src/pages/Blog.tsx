import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ChevronLeft } from 'lucide-react';

const posts = [
  {
    slug: 'font-kecil-itu-apa',
    title: 'Font Kecil Itu Apa? Cara Kerja Tulisan Kecil (Unicode)',
    excerpt: 'Pahami apa itu font kecil, bagaimana cara kerjanya menggunakan Unicode, dan perbedaannya dengan font biasa (TTF/OTF). Pelajari juga jenis-jenis font kecil yang paling umum digunakan.',
    date: '2024-01-15',
    readTime: '5 menit',
    category: 'Dasar',
  },
  {
    slug: 'font-kecil-wa-ig-tiktok',
    title: 'Font Kecil di WhatsApp, Instagram, TikTok: Kompatibilitas & Masalah Umum',
    excerpt: 'Temukan cara mengatasi masalah kompatibilitas font kecil di berbagai platform seperti WhatsApp, Instagram, dan TikTok. Termasuk checklist sebelum copas dan tabel kompatibilitas.',
    date: '2024-01-12',
    readTime: '6 menit',
    category: 'Troubleshooting',
  },
  {
    slug: 'cara-membuat-tulisan-kecil',
    title: 'Cara Membuat Tulisan Kecil untuk Bio, Nama, dan Caption',
    excerpt: 'Panduan lengkap membuat tulisan kecil yang rapi untuk bio Instagram, nama profil, dan caption. Termasuk contoh pemakaian dan kesalahan yang harus dihindari.',
    date: '2024-01-10',
    readTime: '4 menit',
    category: 'Tutorial',
  },
  {
    slug: 'small-caps-vs-superscript',
    title: 'Small Caps vs Superscript: Mana yang Paling Cocok untuk Font Kecil?',
    excerpt: 'Bandingkan dua gaya font kecil paling populer: small caps dan superscript. Temukan rekomendasi berdasarkan kebutuhan dan panduan agar tidak terlihat berlebihan.',
    date: '2024-01-08',
    readTime: '5 menit',
    category: 'Perbandingan',
  },
];

export default function Blog() {
  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog Font Kecil
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Kumpulan artikel panduan seputar font kecil, tulisan kecil, dan cara menggunakannya di berbagai platform. Pelajari tips, trik, dan solusi untuk masalah umum.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-teal-600 font-medium hover:gap-2 transition-all"
              >
                Baca selengkapnya
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 bg-teal-50 rounded-xl border border-teal-200">
          <h3 className="font-semibold text-gray-900 mb-2">Butuh generator font kecil?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Kunjungi halaman utama untuk langsung membuat teks kecil dari generator kami.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Buka Generator Font Kecil
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
