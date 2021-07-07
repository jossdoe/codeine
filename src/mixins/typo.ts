import { css } from 'styled-components';
import { fontFamily, fontSize, fontWeight, lineHeight } from '@/variables/typo';
import {
  FontFamilyCategory,
  FontSizeCategory,
  FontWeight,
  LineHeightCategory,
} from '@/types';

/**
 * Utilities
 */
export function applyFontFamily(category: FontFamilyCategory) {
  return css`
    font-family: ${fontFamily(category)};
  `;
}

export function applyFontSize(category: FontSizeCategory) {
  return css`
    font-family: ${fontSize(category)};
  `;
}

export function applyFontWeight(weight: FontWeight) {
  return css`
    font-weight: ${fontWeight(weight)};
  `;
}

export function applyLineHeight(category: LineHeightCategory) {
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

export const variants = {
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  paragraph,
  small,
};
