import styled from 'styled-components';

const Square = styled.div`
  width:25px;
  length:25px;
  background-color:#3C64B1;
  margin:10px;
`;

const ItemCont = styled.div`
  display:flex;
  margin:10px;
  `;
  
  const ItemName = styled.p`
  font-weight:bold;
  margin:10px;
  `;
  
  const ItemQuantity = styled.p`
  font-weight:bold;
  margin:10px;
`;

const EntryItem = ({
  itemn="Name",
  itemq="1"
}) => {
  return <ItemCont>
    <Square/>
    <ItemName>{itemn}</ItemName>
    <ItemQuantity>{itemq}</ItemQuantity>
  </ItemCont>
}

export default EntryItem;