import React, { useState } from 'react';
import TacheForm from './TacheForm';

function Header({ ajouterTache }) {
  const [visibleForm, setVisibleForm] = useState(false);

  const handleSave = (tache) => {
    ajouterTache(tache);
    setVisibleForm(false);
  };

  return (
    <>
      <header className="bg-dark text-white shadow-sm mb-3 p-3">
        <div className="container-fluid d-flex align-items-center justify-content-center position-relative">

          {/* Titre centré */}
          <h1 className="h5 m-0 text-truncate text-center flex-grow-1">
            Gestionnaire de Tâches
          </h1>

          {/* Bouton Ajouter Tâche positionné à droite */}
          <button
            className="btn btn-primary position-absolute end-0 me-3"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => setVisibleForm(true)}
          >
            Ajouter Tâche
          </button>

        </div>
      </header>

      {/* Formulaire d'ajout */}
      <TacheForm 
        visible={visibleForm} 
        onClose={() => setVisibleForm(false)} 
        onSave={handleSave} 
      />
    </>
  );
}

export default Header;
