import styled from 'styled-components';
import BoldText from '../BoldText';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import React from 'react';

const Counter = ({type='A'}) => {
  const [count, setCount] = useState(0);
  return (
    <>
      Count {type}: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => console.log(`${type} ${count}`)}>Log</button>
    </>
  );
}

export default Counter;