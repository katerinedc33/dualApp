import React, { useState } from 'react'

const Clima = () => {
     const [temperatura,setTemperatura] =useState(null)
     
     function buscarClima(e){
        e.preventDefault()
          const city =e.target.ciudad.value;
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8e76533d49342768241dd6ce39ca8e7&units=metric`
          fetch(url)
              .then(res =>res.json())
              .then(data => setTemperatura(data.main.temp))
     }
  return (
    <div>
      <h2>consulta el clima</h2>
      <form onSubmit={buscarClima}>
        <input type="text" id="ciudad" placeholder='escribe la ciudad'/>
      </form>
    <div>
      <h2>{temperatura}</h2>
    </div>
    </div>
  )
}

export default Clima