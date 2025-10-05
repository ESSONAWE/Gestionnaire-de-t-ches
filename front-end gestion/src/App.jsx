import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [categorieActuelle, setCategorieActuelle] = useState('Toutes');
  const [taches, setTaches] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const chargerTaches = () => {
    axios.get('http://localhost:3001/taches').then(res => setTaches(res.data));
  };

  const ajouterTache = (nouvelleTache) => {
    axios.post('http://localhost:3001/taches', nouvelleTache).then(() => chargerTaches());
  };

  const modifierTache = (id, tacheModifiee) => {
    axios.put(`http://localhost:3001/taches/${id}`, tacheModifiee).then(() => chargerTaches());
  };

  const supprimerTache = (id) => {
    axios.delete(`http://localhost:3001/taches/${id}`).then(() => chargerTaches());
  };

  useEffect(() => {
    chargerTaches();
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header */}
      <Header ajouterTache={ajouterTache} toggleSidebar={toggleSidebar} />

      <div className="flex-grow-1 d-flex">
        {/* Sidebar */}
        <aside
          className={`bg-white border-end p-3 shadow-sm ${
            sidebarOpen ? 'position-absolute d-block w-75' : 'd-none'
          } d-md-block`}
          style={{
            width: '260px',
            zIndex: 1040,
            height: '100%',
            transition: 'transform 0.3s ease',
          }}
        >
          <Sidebar
            categorieActuelle={categorieActuelle}
            setCategorieActuelle={setCategorieActuelle}
          />
        </aside>

        {/* Overlay mobile */}
        {sidebarOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 d-md-none"
            onClick={toggleSidebar}
            style={{ zIndex: 1030 }}
          ></div>
        )}

        {/* Contenu principal */}
        <main
          className="flex-grow-1 bg-white"
          style={{
            marginLeft: '0',
            marginRight: '0',
            padding: '1.5rem',
            overflowX: 'auto',
          }}
        >
          <div className="container-fluid px-md-4">
            <MainContent
              categorieActuelle={categorieActuelle}
              taches={taches}
              modifierTache={modifierTache}
              supprimerTache={supprimerTache}
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
