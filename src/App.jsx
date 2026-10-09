import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./lib/auth";
import { useNews, useTrustees, usePhotos } from "./lib/store";
import Header from "./components/Header";
import Home from "./pages/Home";
import Itihas from "./pages/Itihas";
import Photos from "./pages/Photos";
import Suvidha from "./pages/Suvidha";
import Trustees from "./pages/Trustees";
import Daan from "./pages/Daan";
import Sampark from "./pages/Sampark";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function Guard({ children }) {
  const { isAdmin } = useAuth();
  if (!isAdmin) return <Navigate to="/login" replace />;
  return children;
}

function Shell() {
  const { items, add, remove, update } = useNews();
  const trustees = useTrustees();
  const photos = usePhotos();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home news={items} uploads={photos.items} />} />
        <Route path="/itihas" element={<Itihas />} />
        <Route path="/photos" element={<Photos uploads={photos.items} />} />
        <Route path="/suvidha" element={<Suvidha />} />
        <Route path="/trust" element={<Trustees trustees={trustees.items} />} />
        <Route path="/daan" element={<Daan />} />
        <Route path="/sampark" element={<Sampark />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Guard><Admin news={items} add={add} remove={remove} update={update} trustees={{ n: trustees.items, add: trustees.add, remove: trustees.remove, update: trustees.update }} photos={photos} /></Guard>} />
        <Route path="*" element={<div className="container narrow center-box"><h2>404</h2></div>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Shell />
      </AuthProvider>
    </BrowserRouter>
  );
}
