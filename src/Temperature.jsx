import"./Temperature.scss";
import { useEffect, useState } from "react";

const URL = 'http://api.weatherapi.com/v1/current.json?key=eb9fcd8bdcb245f4b5f33241232102&q=Montreal&aqi=no'

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