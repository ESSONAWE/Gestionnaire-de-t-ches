import React, { useState } from 'react';

function TacheForm({ visible, onClose, onSave }) {
  const [tache, setTache] = useState({
    titre: '',
    description: '',
    statut: 'À faire',
    priorite: 'Moyenne',
    dateEcheance: '',
    projet: '',
    employe: ''
  });

  const handleChange = (e) => setTache({ ...tache, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(tache);
    setTache({
      titre: '',
      description: '',
      statut: 'À faire',
      priorite: 'Moyenne',
      dateEcheance: '',
      projet: '',
      employe: ''
    });
    onClose();
  };

  if (!visible) return null; // ne pas afficher si visibe = false

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Ajouter une tâche</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Titre</label>
                <input name="titre" className="form-control" value={tache.titre} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea name="description" className="form-control" rows="3" value={tache.description} onChange={handleChange}></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Projet</label>
                <input name="projet" className="form-control" value={tache.projet} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Employé</label>
                <input name="employe" className="form-control" value={tache.employe} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Statut</label>
                <select name="statut" className="form-select" value={tache.statut} onChange={handleChange}>
                  <option>À faire</option>
                  <option>En cours</option>
                  <option>Terminé</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Priorité</label>
                <select name="priorite" className="form-select" value={tache.priorite} onChange={handleChange}>
                  <option>Haute</option>
                  <option>Moyenne</option>
                  <option>Basse</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Échéance</label>
                <input type="date" name="dateEcheance" className="form-control" value={tache.dateEcheance} onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary me-2">Enregistrer</button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Annuler</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TacheForm;
