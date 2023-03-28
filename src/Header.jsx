import {useState } from 'react'
import './Header.scss'
import Temperature from "./Temperature"

export default function Header() {
    
const [etatDate,setEtatDate] = useState()    
    setInterval(() => {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric',hour:'2-digit',minute:'2-digit'}
        setEtatDate(date.toLocaleTimeString('fr-ca', options))
    }, []);

  return (
    <div className='Header'>
        <div className='capitalize'>
            {etatDate}
        </div>
        <Temperature/>
    </div>
  )
}
