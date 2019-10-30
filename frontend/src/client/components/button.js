import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--white);
  border-color: ${props => (props.cart ? "var(--dark)" : "var(--primary)")};
  color: ${prop => (prop.cart ? "var(--dark)" : "var(--primary)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => (prop.cart ? "var(--dark)" : "var(--primary)")};
    color: var(--white);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer1 = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--white);
  border-color: ${props => (props.cart ? "var(--dark)" : "var(--red)")};
  color: ${prop => (prop.cart ? "var(--dark)" : "var(--red)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => (prop.cart ? "var(--dark)" : "var(--red)")};
    color: var(--white);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonContainerCarrito = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--white);
  border-color: ${props => (props.cart ? "var(--dark)" : "var(--white)")};
  color: ${prop => (prop.cart ? "var(--dark)" : "var(--white)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => (prop.cart ? "var(--dark)" : "var(--orange)")};
    color: var(--white);
  }
  &:focus {
    outline: none;
  }
`;
