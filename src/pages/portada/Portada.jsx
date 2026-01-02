import React from 'react'
import './portada.css'
import Aloha from '../../images/Aloha.jpg'

export default function Portada() {
  return (
    <section className='portada_section' id='portada'>
      <div className='portada'>
          <div className='portada_image'>
            <img src={Aloha} alt="" className='aloha_image'/>
          </div>
          <div className='portada_text'>
            <div className='portada_text_content'>
              <h1 className='portada_titulo'>Rubén Ruiz Osma</h1>
              <h2 className='portada_subtitulo'>Telecom Engineer</h2>
              <h3 className='portada_servicenow'>Technical ServiceNow Developer</h3>
          </div>
            </div>
      </div>
    </section>
  )
}
