import styled from 'styled-components';
import BoldText from '../BoldText';
import Image from 'next/image';
  
const ItemCont = styled.form`
  display:flex;
  flex-direction:column;
  margin:10px;
  padding:10px;
  background-color:#ccc;
`;


const Description = styled.p`
  margin-top:10px;
  max-width:180px;
  word-wrap:wrap;
`;

const Number = styled.input`
  display:flex;
  min-height:35px;
  max-width:90px;
`;

const Select = styled.select`
  display:flex;
  min-height:35px;
  max-width:90px;
`;

const TextBox = styled.textarea`
  min-height:60px;
`;

const Submit = styled.input`
  min-height:35px;
  margin-top:10px;
`;

const myLoader = ({src}) => {
  return `${src}`
}

const IGCR = ({
  item_name="Garbage",
  waste_type="garbage",
  note="Example: two snack wrappers and a straw",
  unit="g",
  src="garbagebag.png",
  alt="garbage bag",
  optional="optional"
}) => {
  return <ItemCont>
    <BoldText text={item_name}></BoldText>
    <Image loader={myLoader} src={src} width={50} height={150} alt={alt}/>
    <Description>How many pieces of {waste_type} are you throwing out?</Description>
    <Select>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
    <Description>Write a note to remember this entry ({optional})</Description>
    <TextBox placeholder={note}></TextBox>
    <Submit type="submit" value="Add Entry"></Submit>
  </ItemCont>
}

export default IGCR;