import React from "react";
import "./Exemple.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import fleche from "./curve-arrow-svgrepo-com.svg";

function Exemple() {
  return (
    <div className="wrap">
      <div className="instructions">
        <img id="fleche" src={fleche} />
        <p>Ajoutez une tache</p>
      </div>

      <div className="Exemple">
        <div className="chaqueEx">
          <input type="checkbox" />
          <p>Aller acheter du lait</p>

          <Button color="error">
            <DeleteIcon fontSize="small"></DeleteIcon>
          </Button>
        </div>
        <div className="chaqueEx">
          <input type="checkbox" />
          <p>Aller au gym</p>

          <Button color="error">
            <DeleteIcon fontSize="small"></DeleteIcon>
          </Button>
        </div>
        <div className="chaqueEx">
          <input type="checkbox" />
          <p>Lire 25 pages d'un livre</p>

          <Button color="error">
            <DeleteIcon fontSize="small"></DeleteIcon>
          </Button>
        </div>
      </div>



    </div>
  );
}

export default Exemple;
