import React from 'react'
import './HeaderPage.main.css'
import TextInputField from '../../assets/TextInputField'
import PictureExample from './PictureExample'
import Prompts from '../../components/prompts/Prompts'

const HeaderPage = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h1 className='boujee-text'>Text To Image</h1>
        <p>Transforming Words into Visuals, Effortlessly</p>
        <TextInputField />
        <PictureExample />
        <Prompts />
      </div>
    </div>
  )
}

export default HeaderPage