import styled from "styled-components";
import Square from "./Square"
import {useState,useRef} from "react"

const BoardWrap = styled.div`
  width: 570px;
  height: 570px;
  background: white;
  box-shadow: 0px 0px 20px rgba(0,0,0,.3);
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

function Board() {
  const [board, setBoard] = useState(Array(19).fill(Array(19).fill(null)))
  return (
    <BoardWrap>
    {
      board.map((square, indexY)=>(
        square.map((eachSquare,indexX)=>(
          <Square indexY={indexY} indexX={indexX} />))
      ))
    }
    </BoardWrap>
  );
}
export default Board;
