import './Citation.scss'
import { useEffect, useState } from "react";

function Citation() {
  //URL de l'API de citation aleatoir
  const URL = 'https://api.api-ninjas.com/v1/quotes?category=money'
  const [citations,setCitation] = useState()

  useEffect(()=>{
    const fetchCitation = async () =>{
      const resultat = await fetch(URL, {
        method : 'GET',
        headers: { 'X-Api-Key': 'Q1Rm5pdqcH1svfZ0B1SMdg==JDgGUSBshYpMnm2l'},
      })
      //Mettre les resultats en format JSON
      resultat.json().then(resJson=>{
        //
        setCitation(resJson[0].quote)
      })
    }
    
    fetchCitation()
  }, [])

  return (
    <div className="Citation">
        <p>"{citations}"</p>
      </div>
  )
}

export default Citation