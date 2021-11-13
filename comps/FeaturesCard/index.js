import styled from 'styled-components';
import Image from 'next/image';

const CardCont = styled.div`
  min-width:100px;
  max-width:300px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#0E73AA;
  border-radius:10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding:60px 40px 60px 40px;
  margin:10px;
  text-align:center;
`;

const SmallHeading = styled.h2`
color:white;
`;

const Paragraph = styled.p`
color:white;
`;

const myLoader = ({src}) => {
  return `${src}`
}

const FeaturesCard = ({
  src="icon_system_information.png",
  alt="system information",
  h="Input",
  p="Input how much garbage you produce to keep track of compost, recycling, and landfill garbage"
}) => {
  return <CardCont>
    <Image loader={myLoader} src={src} width={100} height={100} alt={alt}/>
    <SmallHeading>{h}</SmallHeading>
    <Paragraph>{p}</Paragraph>
  </CardCont>
}

export default FeaturesCard;