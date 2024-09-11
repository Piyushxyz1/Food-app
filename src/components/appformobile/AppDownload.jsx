import React from 'react'
import "./formobile.css"
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id = "appdownload">
        <p>Download our mobile app here <br/> </p>

        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            
            <img src={assets.app_store} alt="" />
        </div>



    </div>
  )
}

export default AppDownload