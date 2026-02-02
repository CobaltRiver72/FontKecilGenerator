import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { fontStyles } from '../utils/fontTransform';

interface StylesGalleryProps {
  inputText: string;
}

export default function StylesGallery({ inputText }: StylesGalleryProps) {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const displayText = inputText || 'Font Kecil';

  const handleCopy = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            50 Gaya Font Kecil Siap Copas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih dari 50 variasi tulisan kecil berikut. Klik tombol salin untuk langsung meng-copy hasilnya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fontStyles.map((style) => {
            const result = style.transform(displayText);
            const isCopied = copiedId === style.id;

            return (
              <div
                key={style.id}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    #{style.id}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-700 flex-1 truncate">
                    {style.name}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    style.category === 'small-caps' ? 'bg-teal-100 text-teal-700' :
                    style.category === 'superscript' ? 'bg-blue-100 text-blue-700' :
                    style.category === 'subscript' ? 'bg-orange-100 text-orange-700' :
                    style.category === 'special' ? 'bg-pink-100 text-pink-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {style.category === 'small-caps' ? 'Small Caps' :
                     style.category === 'superscript' ? 'Superscript' :
                     style.category === 'subscript' ? 'Subscript' :
                     style.category === 'special' ? 'Tiny Mix' : 'Dekoratif'}
                  </span>
                </div>
                <div className="min-h-[3rem] flex items-center">
                  <p className="text-lg text-gray-800 break-all leading-relaxed">{result}</p>
                </div>
                <button
                  onClick={() => handleCopy(result, style.id)}
                  className={`w-full mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    isCopied
                      ? 'bg-green-100 text-green-700'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Disalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://FontKeren.info"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl"
          >
            More Fonts Keren
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Kalau Anda butuh variasi font yang lebih banyak (bukan hanya font kecil), Anda bisa lanjut ke koleksi lengkap di FontKeren.info.
          </p>
        </div>
      </div>
    </section>
  );
}
