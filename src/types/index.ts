export type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type ColorPalette = Record<ColorShade, string>;

export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export type FontWeightPalette = Record<FontWeight, number>;
