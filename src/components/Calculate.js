export function calculateWinner(squares) {
  //kazanmak için tüm durumlar kontrol ediliyor
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          
        return squares[a];
      }
    }
    return null;
  }
  
  export function areAllBoxesClicked(squares) {
   //tüm kutulara tıklanıp tıklanmadığı kontrolu sağlanıyor.
    let count = 0
 
    squares.forEach(function (item) {

        if (item !== null) {
    
            count++
        }
    }) 

    if (count === 9) {
        return true
    } else {
        return false
    }
}