import styled from 'styled-components';
import Image from 'next/image';


const ImgCont = styled.div`
  width:${props=>props.width};
  height:${props=>props.height};
`;


const myLoader = ({src}) => {
  return `${src}`
}

const EduImage = ({
  src="juicebox.png",
  alt="image",
  width="128px",
  height="128px",

}) => {
  return <ImgCont>
    <Image loader={myLoader} src={src} width={width} height={height} alt={alt}/>
  </ImgCont>
}

export default EduImage;