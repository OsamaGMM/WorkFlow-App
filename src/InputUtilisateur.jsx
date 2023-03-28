import { useRef } from "react";
import Button from "@mui/material/Button";
import "./InputUtilisateur.scss";

function InputUtilisateur({ setMemos }) {
  //Réf au input en utilisant la fonction useRef() de React
  const refText = useRef();
  //Je set la varible ici pis ensuite je la "drill" jusqu'a memo (sûrement une meilleur façon?)
  const timestamp = new Date().getTime();

  /**
   * Fonction pour ajouter un memo
   * @returns Les memos précédent et le nouveau memo
   */
  function ajouterMemo() {
    //On utilise la réf du input et on la store dans une variable
    const memoText = refText.current.value;
    //Si le input est vide on return
    if (memoText === "") return;
    //On set la variable nouvMemo a un object avec un id, le text et complète à false
    const nouvMemo = {
      id: crypto.randomUUID(),
      text: memoText,
      timestamp,
      complete: false,
    };
    //Combine le nouveau memo avec les ancients
    setMemos((prevMemo) => {
      return [nouvMemo, ...prevMemo];
    });
    //On vide le input du texte que l'utilisateur à mis
    refText.current.value = "";
  }

  return (
    <div className="InputUtilisateur">
      <label>
        <input type="text" ref={refText} placeholder="Ajouter une tâche..." />
        <Button variant="outlined" size="small" onClick={ajouterMemo}>
          AJOUTER
        </Button>
      </label>
    </div>
  );
}

export default InputUtilisateur;
