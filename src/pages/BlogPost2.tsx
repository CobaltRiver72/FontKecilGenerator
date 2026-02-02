import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, CheckCircle } from 'lucide-react';

export default function BlogPost2() {
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
            Troubleshooting
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Font Kecil di WhatsApp, Instagram, TikTok: Kompatibilitas & Masalah Umum
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              12 Januari 2024
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              6 menit baca
            </span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-6">
              Salah satu pertanyaan paling sering muncul saat menggunakan tulisan kecil adalah "kenapa tampilan di HP orang lain berbeda?". Artikel ini membahas masalah kompatibilitas font kecil di berbagai platform dan cara mengatasinya. Pastikan kamu sudah memahami{' '}
              <Link to="/blog/font-kecil-itu-apa" className="text-teal-600 hover:underline">
                cara kerja Unicode untuk tulisan kecil
              </Link>{' '}
              sebelum melanjutkan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kenapa Hasilnya Beda di HP Orang Lain?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Perbedaan tampilan teks kecil antar perangkat adalah hal yang wajar dan bukan kesalahan dari generator atau cara pemakaianmu.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Perbedaan Font Sistem
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Setiap perangkat memiliki font sistem yang berbeda. iPhone menggunakan San Francisco, Samsung menggunakan One UI Font, dan setiap brand Android memiliki font khasnya sendiri. Karakter Unicode yang sama bisa terlihat sedikit berbeda di font yang berbeda.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Versi OS & Aplikasi
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sistem operasi yang lebih baru biasanya memiliki dukungan Unicode yang lebih lengkap. Android 10+ dan iOS 13+ umumnya sudah mendukung sebagian besar karakter font kecil. Versi aplikasi juga berpengaruh - WhatsApp dan Instagram yang ter-update biasanya menampilkan karakter dengan lebih baik.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Masalah Paling Sering Terjadi
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Karakter jadi kotak (□):</strong> Perangkat tidak memiliki glyph untuk karakter tersebut. Sering terjadi pada HP dengan OS lama atau font sistem yang terbatas.
              </li>
              <li>
                <strong>Spasi berantakan:</strong> Beberapa karakter Unicode memiliki lebar yang berbeda, menyebabkan spasi terlihat tidak rata. Ini lebih sering terjadi pada gaya font yang kompleks.
              </li>
              <li>
                <strong>Beberapa huruf tidak berubah:</strong> Tidak semua huruf tersedia dalam semua gaya Unicode. Misalnya, huruf 'x' dan 'q' sering tidak memiliki versi small caps yang sempurna.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Checklist Cepat Sebelum Copas
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Coba preview di HP kamu sendiri dulu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pilih gaya yang lebih umum (Small Caps) untuk kompatibilitas lebih baik</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hindari mencampur terlalu banyak gaya dalam satu teks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tes kirim ke teman dengan HP berbeda sebelum publish</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Siapkan alternatif teks biasa jika diperlukan</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Untuk memilih gaya yang tepat, baca panduan{' '}
              <Link to="/blog/small-caps-vs-superscript" className="text-teal-600 hover:underline">
                tips memilih small caps vs superscript
              </Link>{' '}
              yang membahas kelebihan dan kekurangan masing-masing.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Platform</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Small Caps</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Superscript</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Catatan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">WhatsApp</td>
                    <td className="px-4 py-3 text-sm text-green-600">Baik</td>
                    <td className="px-4 py-3 text-sm text-yellow-600">Sedang</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Tergantung OS penerima</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Instagram</td>
                    <td className="px-4 py-3 text-sm text-green-600">Baik</td>
                    <td className="px-4 py-3 text-sm text-green-600">Baik</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Bio & caption mendukung penuh</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">TikTok</td>
                    <td className="px-4 py-3 text-sm text-green-600">Baik</td>
                    <td className="px-4 py-3 text-sm text-yellow-600">Sedang</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Beberapa karakter tidak tampil</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Twitter/X</td>
                    <td className="px-4 py-3 text-sm text-green-600">Baik</td>
                    <td className="px-4 py-3 text-sm text-green-600">Baik</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Dukungan Unicode lengkap</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Facebook</td>
                    <td className="px-4 py-3 text-sm text-yellow-600">Sedang</td>
                    <td className="px-4 py-3 text-sm text-yellow-600">Sedang</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Bisa berbeda di app vs web</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Kamu bisa langsung{' '}
              <Link to="/" className="text-teal-600 hover:underline">
                salin font kecil dari generator
              </Link>{' '}
              dan tes di berbagai platform untuk melihat hasilnya secara langsung.
            </p>

            <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="font-semibold text-gray-900 mb-2">Tips Penting</h3>
              <p className="text-gray-700 text-sm">
                Jika kamu mengirim pesan penting, selalu sertakan versi teks biasa sebagai cadangan. Tidak semua orang bisa melihat font kecil dengan sempurna, dan pesan yang tidak terbaca bisa menimbulkan miskomunikasi.
              </p>
            </div>

            <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-200">
              <h3 className="font-semibold text-gray-900 mb-2">Coba sekarang</h3>
              <p className="text-gray-600 text-sm mb-4">
                Gunakan generator kami untuk membuat teks kecil dan langsung tes kompatibilitasnya.
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
            to="/blog/font-kecil-itu-apa"
            className="flex-1 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-300 transition-colors"
          >
            <span className="text-sm text-gray-500">Sebelumnya</span>
            <p className="font-semibold text-gray-900 mt-1">Font Kecil Itu Apa?</p>
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
