import styled from "styled-components";
import {useState} from "react"

const SquareWrap = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 999;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,.1);
    background: rgba(0,0,0,.1);
    border-radius: 50px;
  }
  &:before{
    content: '';
    width: 100%;
    height: 1px;
    background: #666;
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
  }
  &:after{
    content: '';
    height: 100%;
    width: 1px;
    background: #666;
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
  }
  .white {
    width: 20px;
    height: 20px;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 25px;
    z-index: 997;
    box-shadow: 0px 0px 7px rgba(0,0,0,.5)
  }
  .black {
    width: 20px;
    height: 20px;
    background: #333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 25px;
    z-index: 998;
    box-shadow: 0px 0px 7px rgba(0,0,0,.5);
  }
`;

function Square({indexX,indexY}) {
  const [chess, setChess] = useState('')
  return (
    <SquareWrap onClick={() => setChess('white')}>  
      <div className={chess}></div>
    </SquareWrap>
  );
}
export default Square;
