import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import BlogPost4 from './pages/BlogPost4';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/font-kecil-itu-apa', element: <BlogPost1 /> },
      { path: 'blog/font-kecil-wa-ig-tiktok', element: <BlogPost2 /> },
      { path: 'blog/cara-membuat-tulisan-kecil', element: <BlogPost3 /> },
      { path: 'blog/small-caps-vs-superscript', element: <BlogPost4 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
