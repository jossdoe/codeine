import { css } from 'styled-components';
import { variables } from '@/variables';
import {
  FontFamilyCategory,
  FontSizeCategory,
  FontWeight,
  LineHeightCategory,
} from '@/types';

const { fontFamily, fontSize, fontWeight, lineHeight } = variables.typo;

/**
 * Utilities
 */
function applyFontFamily(category: FontFamilyCategory) {
  return css`
    font-family: ${fontFamily(category)};
  `;
}

function applyFontSize(category: FontSizeCategory) {
  return css`
    font-family: ${fontSize(category)};
  `;
}

function applyFontWeight(weight: FontWeight) {
  return css`
    font-weight: ${fontWeight(weight)};
  `;
}

function applyLineHeight(category: LineHeightCategory) {
  return css`
    font-weight: ${lineHeight(category)};
  `;
}

/**
 * Variants
 */
const base = css`
  ${applyFontFamily('default')};
  ${applyLineHeight('default')};
`;

const body = css`
  ${base}
  ${applyFontWeight('normal')};
  ${applyFontSize('body')};
`;

const h1 = css`
  ${base}
  ${applyFontWeight('bold')};
  ${applyFontSize('h1')};
`;

const h2 = css`
  ${base}
  ${applyFontWeight('bold')};
  ${applyFontSize('h2')};
`;

const h3 = css`
  ${base}
  ${applyFontWeight('bold')};
  ${applyFontSize('h3')};
`;

const h4 = css`
  ${base}
  ${applyFontWeight('bold')};
  ${applyFontSize('h4')};
`;

const h5 = css`
  ${base}
  ${applyFontWeight('bold')};
  ${applyFontSize('h5')};
`;

const paragraph = css`
  ${base}
  ${applyFontWeight('normal')};
  ${applyFontSize('paragraph')};
`;

const small = css`
  ${base}
  ${applyFontWeight('normal')};
  ${applyFontSize('small')};
`;

export const typo = {
  utils: {
    applyFontFamily,
    applyFontSize,
    applyFontWeight,
    applyLineHeight,
  },
  variants: {
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    paragraph,
    small,
  },
};
