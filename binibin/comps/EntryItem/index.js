import styled from 'styled-components';

const Square = styled.div`
  width:25px;
  length:25px;
  background-color:${color};
`;

const ItemCont = styled.div`
  display:flex;
`;

const ItemName = styled.p`
  font-weight:bold;
`;

const ItemQuantity = styled.p`
  font-weight:bold;
`;

const EntryItem = ({
  color="#3C64B1",
  itemn="Name",
  itemq="1"
}) => {
  <ItemCont>
    <Square color={color}/>
    <ItemName>{itemn}</ItemName>
    <ItemQuantity>{itemq}</ItemQuantity>
  </ItemCont>
}