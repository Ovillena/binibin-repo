import styled from 'styled-components';

const Bold = styled.h4`
  margin:10px;
`;

const BoldText = ({
  text="bold"
}) => {
  return <Bold>{text}</Bold>
}

export default BoldText;