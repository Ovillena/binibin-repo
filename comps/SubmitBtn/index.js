import styled from 'styled-components';
import React from 'react';

const Cont = styled.div`

`

const SubmitBtn = styled.input.attrs({ type: 'submit' })`
  background:#2C5489;
  color: #fff;
  height:${props=>props.height};
  width:${props=>props.width};
  cursor: pointer;
  margin-bottom: 0;
  border-radius: 10px;
  border-color: transparent;
  text-align: center;
  font-size:24px;
  font-family: font-family: 'Hind', sans-serif;
  &:hover {
    background-color:${props=>props.hoverbg};
  }
`

const Submit = ({
    width="200px",
    height="60px",
    hoverbg="#6193D6",
    

}) =>{

    return <Cont>
        <SubmitBtn width={width} height={height} hoverbg={hoverbg}></SubmitBtn>
    </Cont>
}

export default Submit;