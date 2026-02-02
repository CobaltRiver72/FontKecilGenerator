import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';

export default function BlogPost4() {
  return (
    <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <article className="max-w-3xl mx-auto px-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Kembali ke Blog
        </Link>

        <header className="mb-8">
          <span className="inline-block text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-4">
            Perbandingan
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Small Caps vs Superscript: Mana yang Paling Cocok untuk Font Kecil?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              8 Januari 2024
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 menit baca
            </span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-6">
              Dua gaya tulisan kecil yang paling populer adalah small caps dan superscript. Masing-masing punya karakteristik berbeda yang cocok untuk situasi tertentu. Artikel ini membantu kamu memilih gaya yang tepat. Jika belum familiar dengan font kecil, baca dulu{' '}
              <Link to="/blog/font-kecil-itu-apa" className="text-teal-600 hover:underline">
                pengertian font kecil
              </Link>{' '}
              sebagai dasar.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Perbedaan Visual & Keterbacaan
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Secara visual, kedua gaya ini memiliki tampilan yang sangat berbeda meskipun sama-sama "kecil".
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Small Caps</h4>
                <p className="text-2xl mb-3">ꜰᴏɴᴛ ᴋᴇᴄɪʟ</p>
                <p className="text-sm text-gray-600">Huruf kapital dengan ukuran lebih kecil, posisi sejajar dengan baseline</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Superscript</h4>
                <p className="text-2xl mb-3">ᶠᵒⁿᵗ ᵏᵉᶜⁱˡ</p>
                <p className="text-sm text-gray-600">Huruf yang posisinya terangkat ke atas, lebih kecil dari small caps</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Keterbacaan di Layar Kecil
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Small caps lebih mudah dibaca di layar HP karena ukurannya lebih besar dan posisinya stabil di baseline. Superscript bisa terlihat terlalu kecil di layar kecil, terutama untuk teks panjang. Untuk teks yang perlu dibaca dengan jelas, small caps adalah pilihan yang lebih aman.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Kesan Aesthetic vs Formal
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Small caps memberikan kesan yang lebih formal dan profesional, cocok untuk nama brand atau profesi. Superscript terlihat lebih playful dan aesthetic, cocok untuk dekorasi atau caption casual. Lihat{' '}
              <Link to="/blog/cara-membuat-tulisan-kecil" className="text-teal-600 hover:underline">
                contoh bio dengan tulisan kecil
              </Link>{' '}
              untuk inspirasi penggunaan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Rekomendasi Berdasarkan Kebutuhan
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Bio Instagram:</strong> Small caps - terlihat clean dan profesional
              </li>
              <li>
                <strong>WhatsApp status:</strong> Superscript - singkat dan cute untuk pesan pendek
              </li>
              <li>
                <strong>Nama profil:</strong> Small caps - lebih mudah dibaca dan diingat
              </li>
              <li>
                <strong>Caption foto:</strong> Kombinasi keduanya secukupnya - small caps untuk kata kunci, superscript untuk aksen
              </li>
              <li>
                <strong>Catatan pribadi:</strong> Superscript - untuk membedakan teks tertentu
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Panduan Aman: Jangan Sampai Terlihat 'Alay'
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Penggunaan font kecil yang berlebihan bisa membuat tampilan justru terlihat tidak profesional. Berikut tips agar tetap terlihat stylish tanpa berlebihan:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Gunakan maksimal 1-2 gaya dalam satu konteks</li>
              <li>Jangan ubah seluruh teks menjadi font kecil - sisakan teks biasa untuk balance</li>
              <li>Hindari mencampur dengan terlalu banyak simbol atau emoji</li>
              <li>Pilih gaya yang sesuai dengan personality yang ingin ditampilkan</li>
              <li>Tes dulu di berbagai perangkat sebelum publish</li>
            </ul>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Kebutuhan</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Pilih</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Alasan</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Alternatif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Nama bisnis/brand</td>
                    <td className="px-4 py-3 text-sm font-medium text-teal-600">Small Caps</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Profesional, mudah dibaca</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Teks biasa + simbol</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Quote singkat</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">Superscript</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Aesthetic, eye-catching</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Italic biasa</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Bio panjang</td>
                    <td className="px-4 py-3 text-sm font-medium text-teal-600">Small Caps (sebagian)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Keterbacaan tetap bagus</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Mix dengan teks biasa</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Pesan WA spesial</td>
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">Superscript</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Cute dan berbeda</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Tiny Mix</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Label/kategori</td>
                    <td className="px-4 py-3 text-sm font-medium text-teal-600">Small Caps</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Jelas dan terorganisir</td>
                    <td className="px-4 py-3 text-sm text-gray-700">CAPS LOCK biasa</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Ringkasan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Pilih Small Caps jika:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>- Butuh keterbacaan tinggi</li>
                    <li>- Konteks profesional</li>
                    <li>- Teks lebih panjang</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Pilih Superscript jika:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>- Ingin tampilan aesthetic</li>
                    <li>- Teks pendek/aksen</li>
                    <li>- Konteks casual</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-200">
              <h3 className="font-semibold text-gray-900 mb-2">Coba kedua gaya sekarang</h3>
              <p className="text-gray-600 text-sm mb-4">
                Gunakan generator kami untuk membandingkan tampilan small caps dan superscript secara langsung.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Coba Generator Font Kecil
              </Link>
            </div>
          </div>
        </div>

        <nav className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/blog/cara-membuat-tulisan-kecil"
            className="flex-1 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-300 transition-colors"
          >
            <span className="text-sm text-gray-500">Sebelumnya</span>
            <p className="font-semibold text-gray-900 mt-1">Cara Membuat Tulisan Kecil</p>
          </Link>
          <Link
            to="/blog/font-kecil-itu-apa"
            className="flex-1 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-300 transition-colors"
          >
            <span className="text-sm text-gray-500">Terkait</span>
            <p className="font-semibold text-gray-900 mt-1">Font Kecil Itu Apa?</p>
          </Link>
        </nav>
      </article>
    </main>
  );
}
