import React from 'react'
//import da imagem diretamente
import imagem1 from "../../assets/img/imagem1.jpg"
import "./ImgCard.css";

export default function ImgCard({caption}) {
  return (
    <div className='image-card'>
        <img src={imagem1} alt={caption} className='image-card-img'/>
        <p className='image-card-caption'>{caption} </p>
    </div>
  )
}
