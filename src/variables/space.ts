import type { Space, SpaceScale } from '@/types';
import { pxToRem } from '@/utils';

const spacePalette: SpaceScale = {
  0: pxToRem(0),
  4: pxToRem(4),
  8: pxToRem(8),
  12: pxToRem(12),
  16: pxToRem(16),
  24: pxToRem(24),
  32: pxToRem(32),
  48: pxToRem(48),
  64: pxToRem(64),
  80: pxToRem(80),
  96: pxToRem(96),
  128: pxToRem(128),
  160: pxToRem(160),
  240: pxToRem(240),
  320: pxToRem(320),
  480: pxToRem(480),
  640: pxToRem(640),
  800: pxToRem(800),
  960: pxToRem(960),
  1280: pxToRem(1280),
  1600: pxToRem(1600),
};

export function space(pixel: Space): string {
  return spacePalette[pixel];
}
