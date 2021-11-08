import styled from 'styled-components';

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
  background-color:${({color}) =>
    color === "garbage" && "#000" ||
    color === "compost" && "#598B2C" ||
    color === "recycling" && "#2C5489"
  };
`;
  
const ItemName = styled.p`
  font-weight:bold;
  margin:10px 5px 10px 10px;
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
  waste_type="recycling",
  item_name="Component Can (200mL)",
  item_count="0",
  unit="u"
}) => {
  return <ItemCont>
    <Square color={waste_type}/>
    <ItemName>{item_name}</ItemName>
    <ItemQuantity>&times; {item_count} {unit}</ItemQuantity>
  </ItemCont>
}

export default EntryItem;