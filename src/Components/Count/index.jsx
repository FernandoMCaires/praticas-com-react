import React, {useState} from 'react'

export default function Count() {
  //Inicializa o estado com o valor 0
  const [contador, setContador] = useState(0);

  //função para aumentar o valor do estado
  const aumentar = ()=> {
    setContador(contador + 1);
  }

  const diminuir = ()=>{
    setContador(contador - 1);
  }


  return (
    <div>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
      <p>
        {contador}
      </p>
    </div>
  )
}
