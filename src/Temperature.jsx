import { URL } from "./Code/HiddenVars";
import"./Temperature.scss";
import { useEffect, useState } from "react";


function Temperature() {
  const [temp,setTemp] = useState(0);

  useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch(URL)
      res.json().then(resJson =>{
        setTemp(resJson.current.temp_c)
      })
    }
    fetchData()
  },[])
  return (
    <div className="Temperature">
      {temp.toFixed(0)}°C.
    </div>
  )
}

export default Temperature