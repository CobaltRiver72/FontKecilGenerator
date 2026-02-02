import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Kenapa font kecil tidak muncul di beberapa HP?',
    answer: 'Font kecil menggunakan karakter Unicode khusus yang tidak semua perangkat mendukung dengan sempurna. HP dengan sistem operasi lama atau font sistem yang terbatas mungkin menampilkan kotak kosong atau karakter pengganti. Ini bukan masalah dari generator, melainkan keterbatasan perangkat penerima.',
  },
  {
    question: 'Apakah font kecil aman untuk WhatsApp?',
    answer: 'Ya, font kecil aman digunakan di WhatsApp karena hanya menggunakan karakter Unicode standar. WhatsApp tidak akan menghapus atau memblokir pesan dengan font kecil. Namun, tampilan di perangkat penerima bisa berbeda tergantung versi aplikasi dan sistem operasinya.',
  },
  {
    question: 'Bedanya small caps vs superscript?',
    answer: 'Small caps adalah huruf kapital dengan ukuran yang lebih kecil dari huruf kapital biasa, terlihat lebih elegan dan formal. Superscript adalah teks yang posisinya lebih tinggi dari baseline (seperti pangkat dalam matematika), terlihat lebih ringkas dan kompak. Pilih sesuai kebutuhan estetika kamu.',
  },
  {
    question: 'Kenapa ada kotak/kode aneh (?)',
    answer: 'Kotak atau karakter aneh (?) muncul ketika perangkat tidak memiliki font yang mendukung karakter Unicode tertentu. Ini sering terjadi pada perangkat lama, browser yang ketinggalan update, atau sistem operasi dengan dukungan Unicode terbatas. Coba gunakan gaya font yang lebih umum seperti Small Caps biasa.',
  },
  {
    question: 'Apakah bisa untuk nama profil/bio?',
    answer: 'Bisa, tetapi dengan catatan. Instagram, TikTok, dan platform lain umumnya mendukung font kecil di bio dan nama profil. Namun, beberapa platform mungkin memiliki batasan karakter khusus. Selalu coba dulu dan lihat hasilnya sebelum menyimpan perubahan secara permanen.',
  },
  {
    question: 'Apakah generator ini gratis?',
    answer: 'Ya, generator font kecil ini sepenuhnya gratis dan tidak memerlukan registrasi. Kamu bisa menggunakan semua 50 gaya font kecil tanpa batasan. Tidak ada biaya tersembunyi atau fitur premium.',
  },
  {
    question: 'Bagaimana cara menyalin banyak gaya sekaligus?',
    answer: 'Saat ini kamu perlu menyalin satu per satu dengan mengklik tombol "Salin" di setiap gaya. Tips: buka aplikasi Notes atau catatan di HP, lalu tempel beberapa gaya favoritmu di sana untuk referensi cepat di kemudian hari.',
  },
  {
    question: 'Apakah bisa digunakan di komputer/laptop?',
    answer: 'Tentu saja! Generator ini bisa diakses dari browser apapun di komputer, laptop, tablet, maupun smartphone. Desainnya responsif dan berfungsi dengan baik di semua ukuran layar.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FAQ Font Kecil
          </h2>
          <p className="text-gray-600">
            Pertanyaan yang sering diajukan seputar penggunaan font kecil dan tulisan kecil.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:border-teal-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
