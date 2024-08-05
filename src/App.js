import logo from './logo.svg';
import './App.css';
import MoissaniteRingsPage from './components/Hero';
import EthicalRingsPage from './pages/Rings';
import PopularDesigns from './pages/Items';
import CertificationsAndGuarantees from './pages/Certifcate';
import Popular from './pages/Review';
import Photo from './pages/Photo';
import Footer from './pages/Footer';

function App() {
  return (
    <>
        <MoissaniteRingsPage/>
        <EthicalRingsPage/>
        <PopularDesigns/>
        <CertificationsAndGuarantees/>
        <Popular/>
        <Photo/>
        <Footer/>

    </>
  
  );
}

export default App;
