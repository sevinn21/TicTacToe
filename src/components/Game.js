import React from 'react'
import { useState } from "react";
import Board from './Board';
import { calculateWinner,areAllBoxesClicked } from './Calculate';
import '../Game.css';
const moveStyles = {
    backgroundcolor:'blue',
    left : '60%',
    top: '35%',
    position:'absolute'
    
}   

const statusStyles = {
    backgroundcolor:'blue',
    left : '60%',
    top: '45%',
    position:'absolute'
    
}

const titleStyles = {
    left : '40%',
    top: '2%',
    fontSize : '50px',
    position:'absolute',
    
}

const Game = () => {
    
    const[board,setBoard] = useState(Array(9).fill(null));
    const[xIsNext,setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const together= areAllBoxesClicked(board);

    const handleClick = (i) => {
      const boardCopy = [...board];
      if(winner || boardCopy[i]) return;
      boardCopy[i] = xIsNext ? "X" : "O" ;
      setBoard(boardCopy);
      setXisNext(!xIsNext);
    }
    
    
    const renderMoves = () => {
      return  <button  onClick = {() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    }
    
    return (

         <div className="game" >

           <div className="game-title">
             <label style={titleStyles}>Tic Tac Toe</label>
           </div>

           <div>
              <div className="game-board" >
              <div className="game-board-sub1">
              <Board  squares={board} onClick={handleClick} />
              </div>
              <div className="game-board-sub2" >
              {renderMoves()}
              </div>
           </div>
            
            <div className="game-status">
               <p style={moveStyles}>{winner || together ? 'Hamle Sayısı Bitti' : 'Hamle Sırası : ' + (xIsNext ? 'X' : 'O')} </p>
               <p style={statusStyles}>{winner ? 'Kazanan Takım ' + winner : together ? 'Berabere' : null}</p>  
            </div>

          </div>
        </div>
        
    )
}

export default Game;
