import { height } from "@mui/system";
import React from "react";


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50$, -50%)',
    backgroundColor: '#fff',
    padding:'50px',
    zIndex: 1000,
    width: '500px',
    height: '250px',
}

const ButtonStyle = {
    display:'flex',
    marginTop:'10px',
    alignItems:'flex-end'

}

const ModalStyle = {
    display:'flex',
    alignItems:'center',
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

export default function Modal({ open,children, onClose }){
    if (!open) return null
    return (
        <div style={ModalStyle}>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>
                <button style={ButtonStyle} onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
        
    )
}