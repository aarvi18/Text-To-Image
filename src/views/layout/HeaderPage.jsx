import React from 'react'
import './HeaderPage.main.css'
import TextInputField from '../../assets/TextInputField'
import PictureExample from './PictureExample'

const HeaderPage = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h1 className='boujee-text'>Welcome to Text2pic.io</h1>
        <p>Transforming Words into Visuals, Effortlessly</p>
        <TextInputField />
        <PictureExample />
      </div>
    </div>
  )
}

export default HeaderPage