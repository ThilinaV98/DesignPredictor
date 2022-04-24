import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper"> 
            <div className="topLeft">
                <span className="logo">Design Predictor</span>
            </div>
            <div className="topLight">
                <img src="https://www.pinclipart.com/picdir/big/196-1966244_png-file-whatsapp-profile-photo-icon-clipart.png" alt="" className="topAvatar" />
            </div>
        </div>
        
    </div>
  )
}
