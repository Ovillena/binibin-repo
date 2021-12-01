import styled from 'styled-components';
import Image from 'next/image';

import { motion } from 'framer-motion';

const ImgCont = styled.div`
  width:${props=>props.width};
  height:${props=>props.height};
  z-index:${props=>props.zindex};
`;


const myLoader = ({src}) => {
  return `${src}`
}

const EduImage = ({
  src="juicebox.png",
  alt="image",
  width="128px",
  height="128px",
  zindex="1"

}) => {
  return <ImgCont>
    <Image loader={myLoader} src={src} width={width} height={height} alt={alt} zindex={zindex}/>
  </ImgCont>
}

export default EduImage;