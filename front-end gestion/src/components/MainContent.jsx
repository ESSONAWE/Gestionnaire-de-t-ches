import React from "react";

function MainContent({ categorieActuelle, taches, modifierTache, supprimerTache }) {
  const tachesFiltrees =
    categorieActuelle === "Toutes"
      ? taches
      : taches.filter((tache) => tache.statut === categorieActuelle);

  return (
    <div className="p-3">
      {(!tachesFiltrees || tachesFiltrees.length === 0) ? (
        <div className="alert alert-info text-center">
          Aucune tâche trouvée pour cette catégorie.
        </div>
      ) : (
        <>
          {/* Version desktop */}
          <div className="table-responsive d-none d-md-block shadow-sm rounded">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Titre</th>
                  <th>Projet</th>
                  <th>Employé</th>
                  <th>Priorité</th>
                  <th>Statut</th>
                  <th>Échéance</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tachesFiltrees.map((t) => (
                  <tr key={t._id}>
                    <td className="fw-bold">{t.titre}</td>
                    <td>{t.projet || "-"}</td>
                    <td>{t.employe || "-"}</td>
                    <td>
                      <span
                        className={`badge rounded-pill px-3 py-2 ${
                          t.priorite === "Haute"
                            ? "bg-danger"
                            : t.priorite === "Moyenne"
                            ? "bg-warning text-dark"
                            : "bg-info text-dark"
                        }`}
                      >
                        {t.priorite}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge rounded-pill px-3 py-2 ${
                          t.statut === "Terminé"
                            ? "bg-success"
                            : t.statut === "En cours"
                            ? "bg-primary"
                            : "bg-secondary"
                        }`}
                      >
                        {t.statut}
                      </span>
                    </td>
                    <td>{t.dateEcheance ? new Date(t.dateEcheance).toLocaleDateString() : "-"}</td>
                    <td className="text-center">
                      <div className="btn-group btn-group-sm" role="group">
                        <button
                          className="btn btn-outline-primary"
                          title="Marquer En cours"
                          onClick={() => modifierTache(t._id, { ...t, statut: "En cours" })}
                        >
                          ⏳
                        </button>
                        <button
                          className="btn btn-outline-success"
                          title="Marquer Terminé"
                          onClick={() => modifierTache(t._id, { ...t, statut: "Terminé" })}
                        >
                          ✅
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          title="Supprimer"
                          onClick={() => supprimerTache(t._id)}
                        >
                          ❌
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Version mobile */}
          <div className="d-md-none">
            {tachesFiltrees.map((t) => (
              <div key={t._id} className="card mb-3 shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="fw-bold mb-0">{t.titre}</h6>
                    <span
                      className={`badge ${
                        t.statut === "Terminé"
                          ? "bg-success"
                          : t.statut === "En cours"
                          ? "bg-primary"
                          : "bg-secondary"
                      }`}
                    >
                      {t.statut}
                    </span>
                  </div>
                  <p className="mb-1 text-muted small">
                    <strong>Projet:</strong> {t.projet || "-"}
                  </p>
                  <p className="mb-1 text-muted small">
                    <strong>Employé:</strong> {t.employe || "-"}
                  </p>
                  <p className="mb-1 text-muted small">
                    <strong>Priorité:</strong>{" "}
                    <span
                      className={`badge ${
                        t.priorite === "Haute"
                          ? "bg-danger"
                          : t.priorite === "Moyenne"
                          ? "bg-warning text-dark"
                          : "bg-info text-dark"
                      }`}
                    >
                      {t.priorite}
                    </span>
                  </p>
                  <p className="mb-2 text-muted small">
                    <strong>Échéance:</strong>{" "}
                    {t.dateEcheance
                      ? new Date(t.dateEcheance).toLocaleDateString()
                      : "-"}
                  </p>
                  <div className="d-flex justify-content-end gap-2">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      title="Marquer En cours"
                      onClick={() => modifierTache(t._id, { ...t, statut: "En cours" })}
                    >
                      ⏳
                    </button>
                    <button
                      className="btn btn-outline-success btn-sm"
                      title="Marquer Terminé"
                      onClick={() => modifierTache(t._id, { ...t, statut: "Terminé" })}
                    >
                      ✅
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      title="Supprimer"
                      onClick={() => supprimerTache(t._id)}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MainContent;
