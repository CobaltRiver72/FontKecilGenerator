import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';

export default function BlogPost3() {
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
            Tutorial
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Cara Membuat Tulisan Kecil untuk Bio, Nama, dan Caption
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              10 Januari 2024
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              4 menit baca
            </span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-6">
              Ingin bio Instagram atau nama profil kamu terlihat berbeda? Tulisan kecil bisa menjadi solusi untuk tampilan yang lebih estetik. Artikel ini membahas cara praktis membuat teks kecil yang rapi dan tidak berlebihan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Cara Cepat (Pakai Generator)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Metode tercepat adalah menggunakan generator online. Berikut langkah-langkahnya:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Input teks:</strong> Ketik atau tempel teks yang ingin diubah ke kolom input di{' '}
                <Link to="/" className="text-teal-600 hover:underline">
                  buat font kecil online
                </Link>
              </li>
              <li>
                <strong>Pilih gaya:</strong> Pilih dari Small Caps, Superscript, atau Tiny Mix sesuai kebutuhan
              </li>
              <li>
                <strong>Salin hasil:</strong> Klik tombol "Salin" pada gaya yang kamu suka
              </li>
              <li>
                <strong>Tempel:</strong> Buka aplikasi tujuan (Instagram, WhatsApp, dll) dan tempel teksnya
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contoh Pemakaian yang Rapi
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Berikut beberapa contoh penggunaan font kecil yang terlihat profesional:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Format bio:</strong> "ᴅᴇsɪɢɴᴇʀ | ᴊᴀᴋᴀʀᴛᴀ" - gunakan small caps untuk profesi dan lokasi
              </li>
              <li>
                <strong>Username style:</strong> Tambahkan satu kata kecil sebagai aksen, bukan seluruh username
              </li>
              <li>
                <strong>Pemisah estetis:</strong> "━━━ ᴍᴇɴᴜ ━━━" - font kecil sebagai label section
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kesalahan yang Bikin Bio Jadi Aneh
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hindari kesalahan berikut agar tampilan tetap rapi:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Kebanyakan Karakter Unik
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Menggunakan terlalu banyak simbol dan karakter khusus membuat teks sulit dibaca. Ingat, tujuan font kecil adalah mempercantik, bukan mempersulit pembacaan. Sebelum publish, pastikan{' '}
              <Link to="/blog/font-kecil-wa-ig-tiktok" className="text-teal-600 hover:underline">
                cek kompatibilitas dulu
              </Link>{' '}
              di berbagai perangkat.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Campur Terlalu Banyak Gaya
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mencampur small caps, superscript, dan gaya lain dalam satu kalimat terlihat berantakan. Pilih satu atau dua gaya maksimal untuk konsistensi visual. Pelajari{' '}
              <Link to="/blog/small-caps-vs-superscript" className="text-teal-600 hover:underline">
                pilih gaya font kecil yang aman dibaca
              </Link>{' '}
              untuk hasil terbaik.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tujuan</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Gaya Disarankan</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Contoh</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Catatan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Bio Instagram</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Small Caps</td>
                    <td className="px-4 py-3 text-sm text-gray-700">ᴄᴏɴᴛᴇɴᴛ ᴄʀᴇᴀᴛᴏʀ</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Elegan dan mudah dibaca</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Nama Profil</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Small Caps biasa</td>
                    <td className="px-4 py-3 text-sm text-gray-700">ᴀɴɪsᴀ</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Jangan terlalu panjang</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Caption</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Tiny Mix (aksen)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">✧ ᵗʰᵃⁿᵏ ʸᵒᵘ ✧</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Untuk bagian tertentu saja</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">WhatsApp Status</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Superscript</td>
                    <td className="px-4 py-3 text-sm text-gray-700">ᵍᵒᵒᵈ ᵐᵒʳⁿⁱⁿᵍ</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Singkat dan manis</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Highlight Cover</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Small Caps</td>
                    <td className="px-4 py-3 text-sm text-gray-700">ᴛʀᴀᴠᴇʟ</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Satu kata saja</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Prinsip Dasar</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Less is more - gunakan font kecil secukupnya</li>
                <li>Konsistensi - pilih satu gaya untuk satu konteks</li>
                <li>Keterbacaan - pastikan tetap bisa dibaca dengan jelas</li>
                <li>Uji coba - selalu preview sebelum publish</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-200">
              <h3 className="font-semibold text-gray-900 mb-2">Siap membuat bio yang menarik?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Gunakan generator kami untuk langsung membuat teks kecil sesuai kebutuhanmu.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Buka Generator Font Kecil
              </Link>
            </div>
          </div>
        </div>

        <nav className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/blog/font-kecil-wa-ig-tiktok"
            className="flex-1 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-300 transition-colors"
          >
            <span className="text-sm text-gray-500">Sebelumnya</span>
            <p className="font-semibold text-gray-900 mt-1">Kompatibilitas WA/IG/TikTok</p>
          </Link>
          <Link
            to="/blog/small-caps-vs-superscript"
            className="flex-1 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-300 transition-colors"
          >
            <span className="text-sm text-gray-500">Artikel berikutnya</span>
            <p className="font-semibold text-gray-900 mt-1">Small Caps vs Superscript</p>
          </Link>
        </nav>
      </article>
    </main>
  );
}
