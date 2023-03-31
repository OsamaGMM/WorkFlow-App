import { useRef, useState, useEffect } from "react";
import "./Appli.scss";
import ListeMemos from "./ListeMemos";
import Button from "@mui/material/Button";
import InputUtilisateur from "./InputUtilisateur";
import Citation from "./Citation";
import Header from "./Header";

export default function Appli() {
  //Variable d'état, on affiche le contenue du localstorage si yen a
  const [memos, setMemos] = useState(
    () => JSON.parse(localStorage.getItem("Memos")) || []
  );
  useEffect(
    () => localStorage.setItem("Memos", JSON.stringify(memos)),
    [memos]
  );
  //Variable d'état pour les memos filtrées
  const [memosFiltrer, setMemosFiltrer] = useState([]);

  //Je set la varible ici pis ensuite je la "drill" jusqu'a memo (sûrement une meilleur façon?)
  const timestamp = new Date().getTime();

  /**
   * Fonction pour le toggle si le memo est completé ou non
   * @param {String} id
   * Paramètre qui sert à savoir quelle memo a été toggle
   * @returns les nouveaux memos
   */
  function toggleComplete(id) {
    //Duplique la variable memos avant de la manipuler
    const nouvMemo = [...memos];
    //Changer la valeur du memo changer
    const memo = nouvMemo.find((memo) => memo.id === id);
    memo.complete = !memo.complete;
    //Re-set les memos avec les nouveaux
    setMemos(nouvMemo);
  }

  //////////////////SMOOTHSCROLLL
  function smoothScroll() {
    const element = document.querySelector(".taches");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="Appli">
      <div className="bienvenue">
        <header>
          <h1>
            Bienvenue <br /> sur <br /> <span className="glow">WorkFlow</span>
          </h1>
          <Button variant="contained" onClick={smoothScroll}>
            Commencez
          </Button>
        </header>
        <Citation />
        <Header date={new Date()} />
      </div>

      <div className="taches">
        <InputUtilisateur setMemos={setMemos} />
        <ListeMemos
          listeMemos={memos}
          setMemosFiltrer={setMemosFiltrer}
          setMemos={setMemos}
          toggleMemo={toggleComplete}
          timestamp={timestamp}
          memosFiltrer={memosFiltrer}
        />
      </div>
    </div>
  );
}
