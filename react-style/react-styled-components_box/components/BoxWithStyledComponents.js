import styled, {css} from "styled-components";


export default function BoxWithClassName({ isBlack }) {
    return (
      <StyledBox $isBlack >
       
      </StyledBox>
    );
  }

const StyledBox = styled.div`
width: 100px;
height: 100px;
background-color: green;
margin: 2rem;



&:hover 
background-color: red; `


const StyledBox = styled.div`
`${({ $isBlack }) => ($isBlack ? "box-with-classname--black" : "")} `

`

/*.box-with-classname {
    width: 100px;
    height: 100px;
    background-color: green;
    margin: 2rem;
  }
  
  .box-with-classname:hover {
    background-color: red;
  }
  
  .box-with-classname--black {
    background-color: black;
  }