import { useState } from 'react';
import { Copy, RotateCcw, Check, AlertCircle } from 'lucide-react';
import { transformToSmallCaps, transformToSuperscript, transformToTinyMix } from '../utils/fontTransform';

interface GeneratorOutput {
  name: string;
  description: string;
  transform: (text: string) => string;
}

const outputs: GeneratorOutput[] = [
  {
    name: 'Small Caps',
    description: 'Huruf kapital kecil yang elegan',
    transform: transformToSmallCaps,
  },
  {
    name: 'Superscript',
    description: 'Teks pangkat atas yang ringkas',
    transform: transformToSuperscript,
  },
  {
    name: 'Tiny Mixed',
    description: 'Kombinasi gaya kecil yang unik',
    transform: transformToTinyMix,
  },
];

export default function Generator() {
  const [input, setInput] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  const handleReset = () => {
    setInput('');
    setCopiedIndex(null);
  };

  return (
    <section id="generator" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Generator Font Kecil
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ketik atau tempel teks di bawah, lalu pilih gaya font kecil yang diinginkan. Hasil bisa langsung disalin.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
              Masukkan teks (maks. 100 karakter)
            </label>
            <div className="relative">
              <input
                id="text-input"
                type="text"
                maxLength={100}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik teks kamu di sini..."
                className="w-full px-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                {input.length}/100
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {outputs.map((output, index) => {
                const result = output.transform(input || 'Contoh Teks');
                const isCopied = copiedIndex === index;

                return (
                  <div
                    key={output.name}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:border-teal-300 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{output.name}</h3>
                          <span className="text-xs text-gray-500">({output.description})</span>
                        </div>
                        <p className="text-xl text-gray-800 break-all font-mono">{result}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(result, index)}
                        disabled={!input}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                          isCopied
                            ? 'bg-green-100 text-green-700'
                            : input
                            ? 'bg-teal-600 text-white hover:bg-teal-700'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4" />
                            Disalin
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Salin
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Catatan kompatibilitas:</strong> Tampilan font kecil bisa berbeda di setiap perangkat atau aplikasi tergantung dukungan Unicode. Beberapa karakter mungkin muncul sebagai kotak atau tidak ditampilkan dengan benar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
