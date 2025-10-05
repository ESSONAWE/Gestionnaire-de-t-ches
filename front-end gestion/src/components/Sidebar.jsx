import React from 'react';

function Sidebar({ categorieActuelle, setCategorieActuelle }) {
  const categories = [
    { label: 'Toutes', icon: 'bi-list-task' },
    { label: 'À faire', icon: 'bi-clipboard' },
    { label: 'En cours', icon: 'bi-hourglass-split' },
    { label: 'Terminé', icon: 'bi-check-circle' },
  ];

  return (
    <div className="bg-white shadow-sm d-flex flex-column vh-100 p-3" style={{ width: '240px' }}>
      <h5 className="text-primary fw-bold mb-4">📊 Tableau de bord</h5>
      <ul className="nav nav-pills flex-column gap-2">
        {categories.map((cat) => (
          <li key={cat.label}>
            <button
              className={`nav-link d-flex align-items-center ${
                categorieActuelle === cat.label ? 'active' : 'text-dark'
              }`}
              onClick={() => setCategorieActuelle(cat.label)}
              style={{ borderRadius: '8px' }}
            >
              <i className={`bi ${cat.icon} me-2`}></i>
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
