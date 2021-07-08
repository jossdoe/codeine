import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { mixins } from '../mixins';
import { variables } from '../variables';

const { body } = mixins.typo.variants;
const { gray } = variables.colors;

export const GlobalStyles = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    ${body}
    color: ${gray(700)};
  }

  a, a:visited {
    color: inherit;
    text-decoration: inherit;
  }
`;
