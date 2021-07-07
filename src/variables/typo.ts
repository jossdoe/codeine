import {
  FontWeight,
  FontWeightScale,
  FontSizeScale,
  FontSizeCategory,
} from '@/types';
import { pxToRem } from '@/utils';

/**
 * Font family
 */
const fontFamilies = {
  default: "'Inter', sans-serif",
};

export function fontFamily(category: keyof typeof fontFamilies) {
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

export function fontWeight(weight: FontWeight) {
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

export function fontSize(category: FontSizeCategory) {
  return pxToRem(fontSizeScale[category]);
}

/**
 * Line height
 */
const lineHeights = {
  default: 1.5,
};

export function lineHeight(category: keyof typeof lineHeights) {
  return lineHeights[category];
}
