import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import BlogPost4 from './pages/BlogPost4';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/font-kecil-itu-apa" element={<BlogPost1 />} />
            <Route path="/blog/font-kecil-wa-ig-tiktok" element={<BlogPost2 />} />
            <Route path="/blog/cara-membuat-tulisan-kecil" element={<BlogPost3 />} />
            <Route path="/blog/small-caps-vs-superscript" element={<BlogPost4 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
