import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import ImgCard from "./Components/ImgCard";
import Count from "./Components/Count";

import "./app.css";

function App() {
  const handlerClick = () =>{
    console.log("Hackeado mlkão")
  }

  const handlerClickConsole = () =>{
    alert("Hackeado mlkinho")
  }
  return (
    <>
     <div className="container">

        <Header title="Meu site" subTitulo='New titulo' />
        <Card />
        <Count/>
        <ImgCard caption="Uma imagem interessante"/>
        <Button Onclick={handlerClickConsole} title='ClicaAki' />
        <Button Onclick={handlerClick} title='ClicaAki' />

        <Banner>
          <h1>Seja bem vindo!</h1>
          <p>Aqui você encontra as melhores ofertas!</p>
        </Banner>


        <Footer title="Todos os direitos reservados - 2024" />
        
     </div>
    </>
  )
}

export default App
