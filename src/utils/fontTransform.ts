const smallCapsMap: Record<string, string> = {
  'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ',
  'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ',
  'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x',
  'y': 'ʏ', 'z': 'ᴢ',
  'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ',
  'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ',
  'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x',
  'Y': 'ʏ', 'Z': 'ᴢ'
};

const superscriptMap: Record<string, string> = {
  'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ',
  'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ',
  'q': 'q', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ',
  'y': 'ʸ', 'z': 'ᶻ',
  'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ',
  'I': 'ᴵ', 'J': 'ᴶ', 'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ',
  'Q': 'Q', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ', 'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ',
  'Y': 'ʸ', 'Z': 'ᶻ',
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷',
  '8': '⁸', '9': '⁹'
};

const subscriptMap: Record<string, string> = {
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ',
  'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ',
  'x': 'ₓ',
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇',
  '8': '₈', '9': '₉'
};

const circledMap: Record<string, string> = {
  'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ',
  'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ',
  'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ',
  'y': 'ⓨ', 'z': 'ⓩ',
  'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ',
  'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ',
  'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ',
  'Y': 'Ⓨ', 'Z': 'Ⓩ',
  '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦',
  '8': '⑧', '9': '⑨'
};

const squaredMap: Record<string, string> = {
  'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶', 'H': '🄷',
  'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾', 'P': '🄿',
  'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇',
  'Y': '🅈', 'Z': '🅉',
  'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷',
  'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿',
  'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇',
  'y': '🅈', 'z': '🅉'
};

const boldMap: Record<string, string> = {
  'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡',
  'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩',
  'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱',
  'y': '𝐲', 'z': '𝐳',
  'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇',
  'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏',
  'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗',
  'Y': '𝐘', 'Z': '𝐙'
};

const italicMap: Record<string, string> = {
  'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ',
  'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝',
  'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥',
  'y': '𝑦', 'z': '𝑧',
  'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻',
  'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃',
  'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋',
  'Y': '𝑌', 'Z': '𝑍'
};

const frakturMap: Record<string, string> = {
  'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥',
  'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭',
  'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵',
  'y': '𝔶', 'z': '𝔷',
  'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ',
  'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓',
  'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛',
  'Y': '𝔜', 'Z': 'ℨ'
};

const scriptMap: Record<string, string> = {
  'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽',
  'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅',
  'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍',
  'y': '𝓎', 'z': '𝓏',
  'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ',
  'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫',
  'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳',
  'Y': '𝒴', 'Z': '𝒵'
};

const doubleStruckMap: Record<string, string> = {
  'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙',
  'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡',
  'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩',
  'y': '𝕪', 'z': '𝕫',
  'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ',
  'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ',
  'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏',
  'Y': '𝕐', 'Z': 'ℤ',
  '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟',
  '8': '𝟠', '9': '𝟡'
};

const monospaceMap: Record<string, string> = {
  'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑',
  'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙',
  'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡',
  'y': '𝚢', 'z': '𝚣',
  'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷',
  'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿',
  'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇',
  'Y': '𝚈', 'Z': '𝚉',
  '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽',
  '8': '𝟾', '9': '𝟿'
};

function transformWithMap(text: string, map: Record<string, string>): string {
  return text.split('').map(char => map[char] || char).join('');
}

function addCombiningMark(text: string, mark: string): string {
  return text.split('').map(char => char + mark).join('');
}

export interface FontStyle {
  id: number;
  name: string;
  transform: (text: string) => string;
  category: 'small-caps' | 'superscript' | 'subscript' | 'decorative' | 'special';
}

export const fontStyles: FontStyle[] = [
  { id: 1, name: 'Small Caps 01', transform: (t) => transformWithMap(t, smallCapsMap), category: 'small-caps' },
  { id: 2, name: 'Superscript 01', transform: (t) => transformWithMap(t, superscriptMap), category: 'superscript' },
  { id: 3, name: 'Subscript 01', transform: (t) => transformWithMap(t, subscriptMap), category: 'subscript' },
  { id: 4, name: 'Small Caps 02', transform: (t) => transformWithMap(t.toLowerCase(), smallCapsMap), category: 'small-caps' },
  { id: 5, name: 'Superscript 02', transform: (t) => transformWithMap(t.toLowerCase(), superscriptMap), category: 'superscript' },
  { id: 6, name: 'Circled 01', transform: (t) => transformWithMap(t, circledMap), category: 'decorative' },
  { id: 7, name: 'Squared 01', transform: (t) => transformWithMap(t, squaredMap), category: 'decorative' },
  { id: 8, name: 'Bold Mini', transform: (t) => transformWithMap(transformWithMap(t, smallCapsMap), boldMap), category: 'small-caps' },
  { id: 9, name: 'Italic Mini', transform: (t) => transformWithMap(t, italicMap), category: 'decorative' },
  { id: 10, name: 'Fraktur Mini', transform: (t) => transformWithMap(t, frakturMap), category: 'decorative' },
  { id: 11, name: 'Script Mini', transform: (t) => transformWithMap(t, scriptMap), category: 'decorative' },
  { id: 12, name: 'Double Struck', transform: (t) => transformWithMap(t, doubleStruckMap), category: 'decorative' },
  { id: 13, name: 'Monospace Mini', transform: (t) => transformWithMap(t, monospaceMap), category: 'decorative' },
  { id: 14, name: 'Small Caps 03', transform: (t) => '(' + transformWithMap(t, smallCapsMap) + ')', category: 'small-caps' },
  { id: 15, name: 'Superscript 03', transform: (t) => '⁽' + transformWithMap(t, superscriptMap) + '⁾', category: 'superscript' },
  { id: 16, name: 'Tiny Mix 01', transform: (t) => t.split('').map((c, i) => i % 2 === 0 ? (superscriptMap[c] || c) : (smallCapsMap[c] || c)).join(''), category: 'special' },
  { id: 17, name: 'Tiny Mix 02', transform: (t) => t.split('').map((c, i) => i % 2 === 0 ? (smallCapsMap[c] || c) : (superscriptMap[c] || c)).join(''), category: 'special' },
  { id: 18, name: 'Underline Mini', transform: (t) => addCombiningMark(transformWithMap(t, smallCapsMap), '\u0332'), category: 'small-caps' },
  { id: 19, name: 'Strikethrough Mini', transform: (t) => addCombiningMark(transformWithMap(t, smallCapsMap), '\u0336'), category: 'small-caps' },
  { id: 20, name: 'Dots Above', transform: (t) => addCombiningMark(transformWithMap(t, smallCapsMap), '\u0307'), category: 'special' },
  { id: 21, name: 'Small Caps 04', transform: (t) => '【' + transformWithMap(t, smallCapsMap) + '】', category: 'small-caps' },
  { id: 22, name: 'Superscript 04', transform: (t) => '『' + transformWithMap(t, superscriptMap) + '』', category: 'superscript' },
  { id: 23, name: 'Small Caps 05', transform: (t) => '「' + transformWithMap(t, smallCapsMap) + '」', category: 'small-caps' },
  { id: 24, name: 'Superscript 05', transform: (t) => '〖' + transformWithMap(t, superscriptMap) + '〗', category: 'superscript' },
  { id: 25, name: 'Tiny Mix 03', transform: (t) => t.split('').map((c, i) => i % 3 === 0 ? (superscriptMap[c] || c) : i % 3 === 1 ? (smallCapsMap[c] || c) : (subscriptMap[c] || c)).join(''), category: 'special' },
  { id: 26, name: 'Small Caps 06', transform: (t) => '≪' + transformWithMap(t, smallCapsMap) + '≫', category: 'small-caps' },
  { id: 27, name: 'Superscript 06', transform: (t) => '«' + transformWithMap(t, superscriptMap) + '»', category: 'superscript' },
  { id: 28, name: 'Small Caps 07', transform: (t) => '•' + transformWithMap(t, smallCapsMap) + '•', category: 'small-caps' },
  { id: 29, name: 'Superscript 07', transform: (t) => '○' + transformWithMap(t, superscriptMap) + '○', category: 'superscript' },
  { id: 30, name: 'Tiny Mix 04', transform: (t) => '◇' + t.split('').map((c, i) => i % 2 === 0 ? (superscriptMap[c] || c) : (smallCapsMap[c] || c)).join('') + '◇', category: 'special' },
  { id: 31, name: 'Small Caps 08', transform: (t) => '★' + transformWithMap(t, smallCapsMap) + '★', category: 'small-caps' },
  { id: 32, name: 'Superscript 08', transform: (t) => '☆' + transformWithMap(t, superscriptMap) + '☆', category: 'superscript' },
  { id: 33, name: 'Small Caps 09', transform: (t) => '►' + transformWithMap(t, smallCapsMap) + '◄', category: 'small-caps' },
  { id: 34, name: 'Superscript 09', transform: (t) => '▸' + transformWithMap(t, superscriptMap) + '◂', category: 'superscript' },
  { id: 35, name: 'Tiny Mix 05', transform: (t) => '⊱' + t.split('').map((c, i) => i % 2 === 0 ? (smallCapsMap[c] || c) : (superscriptMap[c] || c)).join('') + '⊰', category: 'special' },
  { id: 36, name: 'Small Caps 10', transform: (t) => '─' + transformWithMap(t, smallCapsMap) + '─', category: 'small-caps' },
  { id: 37, name: 'Superscript 10', transform: (t) => '━' + transformWithMap(t, superscriptMap) + '━', category: 'superscript' },
  { id: 38, name: 'Small Caps 11', transform: (t) => '⌈' + transformWithMap(t, smallCapsMap) + '⌉', category: 'small-caps' },
  { id: 39, name: 'Superscript 11', transform: (t) => '⌊' + transformWithMap(t, superscriptMap) + '⌋', category: 'superscript' },
  { id: 40, name: 'Tiny Mix 06', transform: (t) => '╔' + t.split('').map((c, i) => i % 2 === 0 ? (superscriptMap[c] || c) : (smallCapsMap[c] || c)).join('') + '╗', category: 'special' },
  { id: 41, name: 'Small Caps 12', transform: (t) => '╭' + transformWithMap(t, smallCapsMap) + '╮', category: 'small-caps' },
  { id: 42, name: 'Superscript 12', transform: (t) => '╰' + transformWithMap(t, superscriptMap) + '╯', category: 'superscript' },
  { id: 43, name: 'Small Caps 13', transform: (t) => '┃' + transformWithMap(t, smallCapsMap) + '┃', category: 'small-caps' },
  { id: 44, name: 'Superscript 13', transform: (t) => '│' + transformWithMap(t, superscriptMap) + '│', category: 'superscript' },
  { id: 45, name: 'Tiny Mix 07', transform: (t) => '⟦' + t.split('').map((c, i) => i % 2 === 0 ? (smallCapsMap[c] || c) : (superscriptMap[c] || c)).join('') + '⟧', category: 'special' },
  { id: 46, name: 'Small Caps 14', transform: (t) => '⟨' + transformWithMap(t, smallCapsMap) + '⟩', category: 'small-caps' },
  { id: 47, name: 'Superscript 14', transform: (t) => '⟪' + transformWithMap(t, superscriptMap) + '⟫', category: 'superscript' },
  { id: 48, name: 'Small Caps 15', transform: (t) => '⊰' + transformWithMap(t, smallCapsMap) + '⊱', category: 'small-caps' },
  { id: 49, name: 'Superscript 15', transform: (t) => '⊲' + transformWithMap(t, superscriptMap) + '⊳', category: 'superscript' },
  { id: 50, name: 'Tiny Mix 08', transform: (t) => '⊹' + t.split('').map((c, i) => i % 2 === 0 ? (superscriptMap[c] || c) : (smallCapsMap[c] || c)).join('') + '⊹', category: 'special' },
];

export function transformToSmallCaps(text: string): string {
  return transformWithMap(text, smallCapsMap);
}

export function transformToSuperscript(text: string): string {
  return transformWithMap(text, superscriptMap);
}

export function transformToTinyMix(text: string): string {
  return text.split('').map((char, index) => {
    if (index % 2 === 0) {
      return superscriptMap[char] || char;
    }
    return smallCapsMap[char] || char;
  }).join('');
}
