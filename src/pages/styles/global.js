import { createGlobalStyles } from "styled-components";

export default createGlobalStyles `

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};
}

body, imput, butto, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  trasition: filter 0.2;
}

button:hover, a:hover {
  filter: brightness(0.9);
}

`;