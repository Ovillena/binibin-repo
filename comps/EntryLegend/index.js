import styled from 'styled-components';
import EntryItem from '../EntryItem';
import BoldText from '../BoldText';
import Subhead from '../SubheadText';

const LegendCont = styled.div`
  max-height:220px;
  margin:30px 20px 0 0;
  padding:10px 0 0 0;
  border: 3px solid #95AFBA;
  border-radius:10px;
`;

const ItemCont = styled.div`
  display:flex;
  margin:10px;
  padding:5px;
  align-items:center;
`;

const Square = styled.div`
  min-width:30px;
  max-width:30px;
  min-height:30px;
  max-height:30px;
  border-radius:5px;
  background-color:${props=>props.color};
`;

const ItemName = styled.p`
  font-weight:bold;
  margin:10px;
`;

const EntryLegend  = ({
  color="#2C5489",
}) => {
  return <LegendCont>
    <Subhead text="Colour Key"></Subhead>
    <ItemCont>
      <Square color="#000"/>
      <ItemName>Garbage</ItemName>
    </ItemCont>
    <ItemCont>
      <Square color="#598B2C"/>
      <ItemName>Compost</ItemName>
    </ItemCont>
    <ItemCont>
      <Square color={color}/>
      <ItemName>Recycling</ItemName>
    </ItemCont>
  </LegendCont>
}

export default EntryLegend;