import styled from "styled-components";
import Square from "./Square"
import {useState} from "react"

const GameWrap = styled.div``;

const PlayerStatus = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 900
`

const BoardWrap = styled.div`
  width: 570px;
  height: 570px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0,0,0,.4);
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 570px;
    height: 570px;
    border: solid 15px #666;
    z-index: 1
  }
`;

function Game() {
  const [squares, setSquares] = useState(Array(19).fill(Array(19).fill(null)))
  const [xIsNext, setXisNext] = useState(true)
  const [winner,SetWinner] = useState()
  const handleClick = (x,y,xIsNext) =>{
    const newBoard = JSON.parse(JSON.stringify(squares))
    newBoard[x][y] = xIsNext? 'black':'white'
    setSquares(newBoard)
    if(calculateWinner(newBoard)){
      SetWinner(xIsNext? '黑子':'白子')
      return
    }
    setSquares(newBoard)
    setXisNext(xIsNext=!xIsNext)
  }
  return (
    <GameWrap>
      <PlayerStatus>下一位玩家：{xIsNext? '黑子':'白子'}</PlayerStatus>
      <PlayerStatus>獲勝：{winner}</PlayerStatus>
      <BoardWrap>
      {
        squares.map((square, indexY)=>(
          square.map((eachSquare,indexX)=>(
            <Square 
              key={indexX} 
              value = {squares[indexX][indexY]}
              handleClick={() => handleClick(indexX,indexY,xIsNext)}
          />))
        ))
      }
      </BoardWrap>
    </GameWrap>
  );
}
export default Game;


function calculateWinner (squares) {
  for (let x = 0; x < 19; x++) {
    for (let y = 0; y < 15; y++) {
      if (
        squares[0 + x][0 + y] !== null &&
        squares[0 + x][0 + y] === squares[0 + x][1 + y] &&
        squares[0 + x][0 + y] === squares[0 + x][2 + y] &&
        squares[0 + x][0 + y] === squares[0 + x][3 + y] &&
        squares[0 + x][0 + y] === squares[0 + x][4 + y]
        ) {
        return squares[0 + x][0 + y]
      }
    }
  }
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 19; y++) {
      if (
        squares[0 + x][0 + y] !== null &&
        squares[0 + x][0 + y] === squares[1 + x][0 + y] &&
        squares[0 + x][0 + y] === squares[2 + x][0 + y] &&
        squares[0 + x][0 + y] === squares[3 + x][0 + y] &&
        squares[0 + x][0 + y] === squares[4 + x][0 + y]
        ) {
        return squares[0 + x][0 + y]
      }
    }
  }
  // 斜線 1 
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      if (
        squares[0 + x][0 + y] !== null &&
        squares[0 + x][0 + y] === squares[1 + x][1 + y] &&
        squares[0 + x][0 + y] === squares[2 + x][2 + y] &&
        squares[0 + x][0 + y] === squares[3 + x][3 + y] &&
        squares[0 + x][0 + y] === squares[4 + x][4 + y]
        ) {
        console.log(squares[0 + x][0 + y])
        return squares[0 + x][0 + y]
      }
    }
  }
  // 斜線 2
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      if (
        squares[0 + x][4 + y] !== null &&
        squares[0 + x][4 + y] === squares[1 + x][3 + y] &&
        squares[0 + x][4 + y] === squares[2 + x][2 + y] &&
        squares[0 + x][4 + y] === squares[3 + x][1 + y] &&
        squares[0 + x][4 + y] === squares[4 + x][0 + y]
        ) {
        return squares[0 + x][4 + y]
      }
    }
  }
  return null
}

