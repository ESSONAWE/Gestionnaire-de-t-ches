import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-rose shadow-sm py-3 mt-auto">
      <div className="container text-center">
        <small>
          © {new Date().getFullYear()} <strong>Entreprise Corp</strong> | Gestionnaire de Tâches Pro
        </small>
      </div>
    </footer>
  );
}

export default Footer;
