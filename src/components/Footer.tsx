import { Link } from 'react-router-dom';
import { Type } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Type className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Font Kecil</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Generator font kecil dan tulisan kecil online. Ubah teks biasa menjadi berbagai gaya font kecil Unicode yang bisa langsung disalin dan ditempel.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-teal-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/#cara-pakai" className="text-sm hover:text-teal-400 transition-colors">
                  Cara Pakai
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Panduan Font Kecil</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/font-kecil-itu-apa" className="text-sm hover:text-teal-400 transition-colors">
                  Font Kecil Itu Apa?
                </Link>
              </li>
              <li>
                <Link to="/blog/font-kecil-wa-ig-tiktok" className="text-sm hover:text-teal-400 transition-colors">
                  Kompatibilitas WA/IG/TikTok
                </Link>
              </li>
              <li>
                <Link to="/blog/cara-membuat-tulisan-kecil" className="text-sm hover:text-teal-400 transition-colors">
                  Cara Membuat Tulisan Kecil
                </Link>
              </li>
              <li>
                <Link to="/blog/small-caps-vs-superscript" className="text-sm hover:text-teal-400 transition-colors">
                  Small Caps vs Superscript
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Font Kecil. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
