import React,{useState} from 'react'

const Display = () => {
    const [contador,setContador] = useState(0)
  return (
    <>
       <h2>{contador}</h2>
       <div>
             <button onClick={()=>setContador(contador-1)}>-</button>
             <button onClick={()=>setContador(0)}>reset</button>
             <button onClick={()=>setContador(contador+1)}>+</button>
       </div>
    </>
  )
}

export default Display