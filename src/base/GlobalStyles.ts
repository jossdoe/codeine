import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { mixins } from '../mixins';
import { variables } from '../variables';

const { body, h1, h2, h3, h4, h5, paragraph, small } = mixins.typo.variants;
const { applyFontWeight } = mixins.typo.utils;
const { gray, primary } = variables.colors;

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
    ${applyFontWeight('semibold')}

    color: ${primary(400)};
    text-decoration: inherit;
  }

  h1 {
    ${h1}
  }

  h2 {
    ${h2}
  }

  h3 {
    ${h3}
  }

  h4 {
    ${h4}
  }

  h5 {
    ${h5}
  }

  p {
    ${paragraph}
  }

  small {
    ${small}
  }
`;
