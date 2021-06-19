import type { FontWeight, FontWeightPalette } from '@/types';

const fontWeightPalette: FontWeightPalette = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

export function fontWeight(weight: FontWeight) {
  return fontWeightPalette[weight];
}
