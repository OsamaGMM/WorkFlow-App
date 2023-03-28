import React from "react";
import "./Memo.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Memo({ memo, toggleMemo, timestamp, supprimerMemo }) {
  /**
   * Toggle la valeur complete d'un memo
   */
  function toggleComplete() {
    toggleMemo(memo.id);
  }

  return (
    <div className={`Memo ${memo.complete ? "complete" : ""}`} key={memo.id}>
      <div>
      <input
        type="checkbox"
        checked={memo.complete}
        onChange={toggleComplete}
      />
      <p>{memo.text}</p>
      </div>

      <div>
      <p id="date">
        ({new Date(timestamp).toLocaleDateString("fr-CA", { dateStyle: "long" })})
        {/* Je sais comment mettre la date (JJ/MM/AAAA et HH/MM/SS) mais c'est laid donc je le fait pas */}
      </p>

        <Button
          color="error"
          onClick={() => supprimerMemo(memo.id)}
        >
          <DeleteIcon fontSize="small"></DeleteIcon>
        </Button>
        </div>
    </div>
  );
}

export default Memo;
