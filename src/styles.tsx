import styled from "styled-components";

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  width: 550px;
  height: 450px;
  left: 400px;
  top: 120px;
  background: #ffffff;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: "Quicksand", sans-serif;
`;
export const BotaoEstilo = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  /* color: white; */
  margin: auto;
  background-color: ${(props) => (props.disabled ? "#d5d5d5d5" : "#003c5e")};
  margin-top: 30px;
  color: white;
  :hover {
    cursor: pointer;
    box-shadow: black 5px;
  }
`;

export default Login;
