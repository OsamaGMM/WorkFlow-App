import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./Filtre.scss"

function Filtre({ memos, setMemos, setMemosFiltrer }) {
  /**
   * Fonction pour supprimer les memos complétées
   */
  function supprimerMemoComplete() {
    const nouvMemos = memos.filter((memo) => !memo.complete);
    setMemos(nouvMemos);
    //Vide le tableau de memo filtrer
    setMemosFiltrer([]);
  }

  /**
   * Fonction pour afficher les memos complétées
   */
  function tacheComplete() {
    const memosAFiltrer = memos.filter((memo) => memo.complete);
    //Change la valeur de memoFiltrer
    setMemosFiltrer(memosAFiltrer);
  }
  /**
   * Fonction pour afficher les memos non-complétées
   */
  function tacheActive() {
    const memosAFiltrer = memos.filter((memo) => !memo.complete);
    //Change la valeur de memoFiltrer
    setMemosFiltrer(memosAFiltrer);
  }
  /**
   * Fonction pour afficher tout les memos
   */
  function afficherToute() {
    setMemosFiltrer(memos);
    //Vide le tableau de memo filtrer
    setMemosFiltrer([]);
  }

  return (
    <div className="uInteraction">
      <ButtonGroup
        color="primary"
        variant="text"
        aria-label="outlined button group"
      >
        <Button onClick={afficherToute}>TOUTES</Button>
        <Button onClick={tacheComplete}>COMPLÉTÉES</Button>
        <Button onClick={tacheActive}>ACTIVES</Button>
      </ButtonGroup>

      <div> {memos.filter((memo) => !memo.complete).length} Tâches actives</div>

      <Button
        onClick={supprimerMemoComplete}
        variant="outlined"
        size="small"
        color="error"
      >
        Supprimer complétées
      </Button>
    </div>
  );
}

export default Filtre;
