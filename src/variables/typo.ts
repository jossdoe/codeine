import type { FontWeight, FontWeightScale } from '@/types';

/**
 * Font weight scale
 */
const fontWeightPalette: FontWeightScale = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

export function fontWeight(weight: FontWeight) {
  return fontWeightPalette[weight];
}
