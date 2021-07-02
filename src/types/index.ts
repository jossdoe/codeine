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

export type FontWeightScale = Record<FontWeight, number>;

export type Space =
  | 0
  | 4
  | 8
  | 12
  | 16
  | 24
  | 32
  | 48
  | 64
  | 80
  | 96
  | 128
  | 160
  | 240
  | 320
  | 480
  | 640
  | 800
  | 960
  | 1280
  | 1600;

export type SpaceScale = Record<Space, string>;
