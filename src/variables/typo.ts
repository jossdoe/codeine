import {
  FontWeight,
  FontWeightScale,
  FontSizeScale,
  FontSizeCategory,
  FontFamilyMap,
  FontFamilyCategory,
  LineHeightMap,
  LineHeightCategory,
} from '@/types';
import { pxToRem } from '@/utils';

/**
 * Font family
 */
const fontFamilies: FontFamilyMap = {
  default: "'Inter', sans-serif",
};

function fontFamily(category: FontFamilyCategory) {
  return fontFamilies[category];
}

/**
 * Font weight scale
 */
const fontWeightScale: FontWeightScale = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

function fontWeight(weight: FontWeight) {
  return fontWeightScale[weight];
}

/**
 * Font size scale
 */
const fontSizeScale: FontSizeScale = {
  body: 16,
  h1: 48,
  h2: 40,
  h3: 32,
  h4: 24,
  h5: 20,
  paragraph: 16,
  small: 12,
};

function fontSize(category: FontSizeCategory) {
  return pxToRem(fontSizeScale[category]);
}

/**
 * Line height
 */
const lineHeights: LineHeightMap = {
  default: 1.5,
};

function lineHeight(category: LineHeightCategory) {
  return lineHeights[category];
}

export const typo = { fontFamily, fontWeight, fontSize, lineHeight };
