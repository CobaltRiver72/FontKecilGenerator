import { Sparkles, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Generator Teks Unicode Online</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Font Kecil (Teks Kecil) – Copas Tulisan Kecil Online
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Ubah teks biasa menjadi <strong>font kecil</strong> dan <strong>tulisan kecil</strong> unik dalam hitungan detik.
            Langsung <strong>copy paste</strong> ke <strong>WhatsApp</strong>, <strong>Instagram</strong>, <strong>TikTok</strong>, dan berbagai platform lainnya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <span>Ubah teks jadi font kecil dalam 1 klik</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <span>Aman untuk bio, caption, nama kontak (tergantung dukungan aplikasi)</span>
            </div>
          </div>

          <a
            href="#generator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Mulai Buat Font Kecil
          </a>
        </div>
      </div>
    </section>
  );
}
