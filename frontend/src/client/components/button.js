import styled from 'styled-components'

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size:1.4rem;
  background: transparent;
  border: 0.05rem solid var(--blue);
  color: var(--blue)
  padding:0.2rem 0.5rem;
  margun:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.5s ease-in-out;
&:hover{
  background:var(--blue);
  color:var(--orange)
}
&:focus{
  outline: none;
}
`