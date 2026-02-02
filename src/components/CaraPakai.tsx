import { Keyboard, Palette, Copy, Share2 } from 'lucide-react';

const steps = [
  {
    icon: Keyboard,
    step: 1,
    title: 'Ketik teks',
    description: 'Masukkan teks yang ingin diubah ke kolom input. Maksimal 100 karakter.',
  },
  {
    icon: Palette,
    step: 2,
    title: 'Pilih gaya font kecil',
    description: 'Pilih dari 3 gaya utama (Small Caps, Superscript, Tiny Mix) atau 50 variasi lainnya.',
  },
  {
    icon: Copy,
    step: 3,
    title: 'Klik salin',
    description: 'Tekan tombol "Salin" pada gaya yang kamu suka. Teks otomatis tersimpan di clipboard.',
  },
  {
    icon: Share2,
    step: 4,
    title: 'Tempel di WA/IG/TikTok',
    description: 'Buka aplikasi tujuan, lalu tempel (paste) teks. Selesai!',
  },
];

export default function CaraPakai() {
  return (
    <section id="cara-pakai" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cara Pakai Font Kecil
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti 4 langkah mudah berikut untuk menggunakan generator tulisan kecil ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                {item.step}
              </div>
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                <item.icon className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
