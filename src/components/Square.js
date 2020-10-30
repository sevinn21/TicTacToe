import React from 'react'
import '../Game.css';

const Square = ({ value, onClick }) => {
    return (
     <div >
        <button className="square" onClick={onClick}>
        {value}
        </button>
     </div>
    )
}   

export default Square

