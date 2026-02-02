import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';

export default function BlogPost1() {
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
            Dasar
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Font Kecil Itu Apa? Cara Kerja Tulisan Kecil (Unicode)
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              15 Januari 2024
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
              Font kecil adalah karakter Unicode khusus yang menampilkan huruf dalam ukuran yang lebih kecil dari teks normal. Berbeda dengan font biasa yang memerlukan instalasi file, tulisan kecil ini bisa langsung di-copy paste ke mana saja karena merupakan bagian dari standar Unicode. Dengan menggunakan{' '}
              <Link to="/" className="text-teal-600 hover:underline">
                generator font kecil
              </Link>
              , kamu bisa mengubah teks biasa menjadi berbagai gaya font kecil dalam hitungan detik.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kenapa Font Kecil Bisa Dipakai Tanpa Aplikasi?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rahasia di balik font kecil adalah Unicode - standar internasional untuk encoding karakter. Unicode menyediakan ribuan karakter khusus, termasuk huruf-huruf kecil seperti small caps dan superscript. Karena karakter ini sudah terdaftar dalam Unicode, perangkat apapun yang mendukung Unicode bisa menampilkannya.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Unicode vs Font Asli (TTF/OTF)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Unicode:</strong> Karakter bawaan sistem, tidak perlu instalasi, bisa di-copy paste</li>
              <li><strong>Font TTF/OTF:</strong> Perlu diinstal di perangkat, hanya tampil di perangkat yang memiliki font tersebut</li>
              <li><strong>Kelebihan Unicode:</strong> Universal, bisa digunakan di semua platform</li>
              <li><strong>Keterbatasan Unicode:</strong> Tidak semua huruf tersedia dalam semua gaya, tampilan bisa berbeda di perangkat berbeda</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Jenis Font Kecil yang Paling Umum
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ada beberapa jenis teks kecil yang bisa kamu gunakan. Masing-masing memiliki tampilan dan karakteristik berbeda.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Small Caps
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Small caps atau kapital kecil menampilkan huruf dalam bentuk huruf besar (kapital) dengan ukuran lebih kecil. Contoh: ᴀʙᴄᴅᴇ. Gaya ini terlihat elegan dan sering digunakan untuk nama atau judul.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Superscript
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Superscript adalah teks yang posisinya lebih tinggi dari baseline normal. Contoh: ᵃᵇᶜᵈᵉ. Biasanya digunakan untuk notasi pangkat atau dekorasi teks. Pelajari lebih lanjut tentang{' '}
              <Link to="/blog/small-caps-vs-superscript" className="text-teal-600 hover:underline">
                tips memilih small caps vs superscript
              </Link>{' '}
              untuk hasil terbaik.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Tiny Mix
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kombinasi dari berbagai gaya font kecil yang menciptakan tampilan unik dan kreatif. Cocok untuk dekorasi yang lebih ekspresif.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kapan Sebaiknya Pakai Font Kecil?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Bio profil:</strong> Instagram, TikTok, Twitter untuk tampilan yang berbeda</li>
              <li><strong>Nama kontak:</strong> Membedakan kontak tertentu di WhatsApp</li>
              <li><strong>Catatan:</strong> Penanda khusus dalam notes atau dokumen</li>
              <li><strong>Caption:</strong> Dekorasi pada caption media sosial</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Untuk panduan lengkap,{' '}
              <Link to="/blog/cara-membuat-tulisan-kecil" className="text-teal-600 hover:underline">
                cara membuat tulisan kecil untuk bio
              </Link>{' '}
              bisa membantu kamu memahami penggunaan yang tepat.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Gaya</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Contoh</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Kegunaan</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Risiko tampil beda</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Small Caps</td>
                    <td className="px-4 py-3 text-sm text-gray-700">ꜰᴏɴᴛ ᴋᴇᴄɪʟ</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Bio, nama profil</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Rendah</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Superscript</td>
                    <td className="px-4 py-3 text-sm text-gray-700">ᶠᵒⁿᵗ ᵏᵉᶜⁱˡ</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Dekorasi, catatan</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Sedang</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Tiny Mix</td>
                    <td className="px-4 py-3 text-sm text-gray-700">ᶠᴏⁿᴛ ᵏᴇᶜⁱˡ</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Kreativitas</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Tinggi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sebelum menggunakan font kecil di platform favoritmu, pastikan untuk mengecek{' '}
              <Link to="/blog/font-kecil-wa-ig-tiktok" className="text-teal-600 hover:underline">
                kompatibilitas font kecil di WhatsApp dan Instagram
              </Link>{' '}
              agar hasilnya sesuai harapan.
            </p>

            <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-200">
              <h3 className="font-semibold text-gray-900 mb-2">Siap membuat font kecil?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Gunakan generator kami untuk mengubah teks biasa menjadi berbagai gaya tulisan kecil.
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
            <span className="text-sm text-gray-500">Artikel berikutnya</span>
            <p className="font-semibold text-gray-900 mt-1">Kompatibilitas WA/IG/TikTok</p>
          </Link>
          <Link
            to="/blog/cara-membuat-tulisan-kecil"
            className="flex-1 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-300 transition-colors"
          >
            <span className="text-sm text-gray-500">Terkait</span>
            <p className="font-semibold text-gray-900 mt-1">Cara Membuat Tulisan Kecil</p>
          </Link>
        </nav>
      </article>
    </main>
  );
}
