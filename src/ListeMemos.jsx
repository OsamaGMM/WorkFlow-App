import React from "react";
import Memo from "./Memo";
import Filtre from "./Filtre";
import "./ListeMemos.scss";
import Exemple from "./Exemple";

function ListeMemos({
  listeMemos,
  setMemos,
  toggleMemo,
  timestamp,
  memosFiltrer,
  setMemosFiltrer,
}) {
  /**
   * Fonction pour supprimer un memo
   * @param {String} id
   * Paramètre qui sert à savoir quelle memo a été supprimer
   */
  function supprimerMemo(id) {
    //Je change les deux au cas ou la personne supprime a partir de memoFiltrer
    setMemos(listeMemos.filter((memo) => memo.id !== id));
    setMemosFiltrer(memosFiltrer.filter((memo) => memo.id !== id));
  }

  //Conditionnel pour determiner lequel des deux tableaux au map()
  const filteredMemos = memosFiltrer.length > 0 ? memosFiltrer : listeMemos;
  //Affiche le div si il n'y a pas de memos
  const nbrMemos = listeMemos.filter((memo) => !memo.complete).length;
  //Si ya pas de memos on retourne un message
  if (nbrMemos === 0) {
    return <Exemple timestamp={timestamp} memo={listeMemos}/>;
  }

  return (
    <div className="ListeMemos">
      {filteredMemos.map((memo) => (
        <Memo
          memo={memo}
          key={memo.id}
          toggleMemo={toggleMemo}
          timestamp={timestamp}
          supprimerMemo={supprimerMemo}
        />
      ))}

      <Filtre
        memos={listeMemos}
        setMemos={setMemos}
        setMemosFiltrer={setMemosFiltrer}
      />

    </div>
  );
}

export default ListeMemos;
