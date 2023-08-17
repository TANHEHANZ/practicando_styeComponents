import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
`;

export default Button;
