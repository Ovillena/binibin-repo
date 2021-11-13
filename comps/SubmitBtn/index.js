import styled from 'styled-components';
import React from 'react';

const Cont = styled.div`

`

const SubmitBtn = styled.input.attrs({ type: 'submit' })`
  background:#95AFBA;
  color: #fff;
  height:${props=>props.height};
  width:${props=>props.width};
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  border-radius: 5px;
  border-color: transparent;
  text-align: center;
  &:hover {
    background-color:${props=>props.hoverbg};
  }
`

const Submit = ({
    width="200px",
    height="60px",
    hoverbg="yellow",
    

}) =>{

    return <Cont>
        <SubmitBtn width={width} height={height} hoverbg={hoverbg}></SubmitBtn>
    </Cont>
}

export default Submit;