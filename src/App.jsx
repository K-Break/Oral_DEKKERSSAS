import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Glow from './components/Glow';
import Cover from './pages/Cover';
import Sommaire from './pages/Sommaire';
import Entreprise from './pages/Entreprise';
import StageLayout from './pages/stage/StageLayout';
import Mission from './pages/stage/Mission';
import Architecture from './pages/stage/Architecture';
import FormBuilder from './pages/stage/FormBuilder';
import PdfSignature from './pages/stage/PdfSignature';
import Modules from './pages/stage/Modules';
import Difficultes from './pages/Difficultes';
import Recul from './pages/Recul';
import Conclusion from './pages/Conclusion';

function AppLayout() {
  const location = useLocation();
  const isCover = location.pathname === '/';

  return (
    <>
      <Glow />
      {!isCover && <Navbar />}
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/sommaire" element={<Sommaire />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/stage" element={<StageLayout />}>
          <Route path="mission" element={<Mission />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="formbuilder" element={<FormBuilder />} />
          <Route path="pdf" element={<PdfSignature />} />
          <Route path="modules" element={<Modules />} />
        </Route>
        <Route path="/difficultes" element={<Difficultes />} />
        <Route path="/recul" element={<Recul />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}

export default App;
