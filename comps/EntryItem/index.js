import styled from 'styled-components';

const ItemCont = styled.div`
display:flex;
margin:10px;
padding:5px;
background-color:#ccc;
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
  
const ItemQuantity = styled.p`
  font-weight:bold;
`;

//"entry_id": 1,
// "item_name": "Can (200 mL)",
// "item_count": 5,
// "unit": "unit",
// "waste_type": "recycling"
// how to change color based on waste_type

const EntryItem = ({
  color="#3C64B1",
  item_name="Component Can (200mL)",
  item_count="0",
  unit="u"
}) => {
  return <ItemCont>
    <Square color={color}/>
    <ItemName>{item_name}</ItemName>
    <ItemQuantity>&times; {item_count} {unit}</ItemQuantity>
  </ItemCont>
}

export default EntryItem;