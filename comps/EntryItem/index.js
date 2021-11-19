import styled from 'styled-components';

const ItemCont = styled.div`
  display:flex;
  flex-direction:column;
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
  margin:10px 5px 10px 10px;
`;
  
const ItemQuantity = styled.p`
  font-weight:bold;
`;

const SingleItem = styled.div`
  display:flex;
  align-items:center;
  margin:0 10px 10px; 10px;
`;

const Notes = styled.span`
  display:flex;
  background-color:${({color}) =>
    color === "garbage" && "#ccc" ||
    color === "compost" && "#598B2C" ||
    color === "recycling" && "#2C5489"
  };
`;

const Minimized = styled.div`
  display:flex;
`;

// [
//   {
//     "item_count": 1,
//     "waste_type": "compost",
//     "notes": "apples, oranges, banana peels",
//     "account_id": 2
//   },
//   {
//     "item_count": 5,
//     "waste_type": "recycling",
//     "notes": "pop cans",
//     "account_id": 2
//   },
//   {
//     "item_count": 1,
//     "waste_type": "garbage",
//     "notes": "",
//     "account_id": 2
//   }
// ]

const EntryItem = ({
  waste_type="recycling",
  item_count_g="0",
  item_count_c="0",
  item_count_r="0",
  notes="banana peels, bottle"
}) => {
  return <ItemCont>
    <Minimized>
      <SingleItem>
        <Square color="#000"/>
        <ItemName>Garbage</ItemName>
        <ItemQuantity>&times; {item_count_g}</ItemQuantity>
      </SingleItem>
      <SingleItem>
        <Square color="#598B2C"/>
        <ItemName>Compost</ItemName>
        <ItemQuantity>&times; {item_count_c}</ItemQuantity>
      </SingleItem>
      <SingleItem>
        <Square color="#2C5489"/>
        <ItemName>Recycling</ItemName>
        <ItemQuantity>&times; {item_count_r}</ItemQuantity>
      </SingleItem>
    </Minimized>
    <Notes color={waste_type}>{notes}</Notes>
  </ItemCont>
}

export default EntryItem;