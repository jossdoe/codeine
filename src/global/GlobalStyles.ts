import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { gray } from '@/variables/colors';
import { variants } from '@/mixins/typo';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Inter:400');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: ${gray(700)};
    ${variants.body}
  }

  a, a:visited {
    color: inherit;
    text-decoration: inherit;
  }
`;
