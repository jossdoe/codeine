import { Space, SpaceScale } from '@/types';
import { utils } from '@/utils';

const { pxToRem } = utils;

const spacePalette: SpaceScale = {
  0: 0,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  24: 24,
  32: 32,
  48: 48,
  64: 64,
  80: 80,
  96: 96,
  128: 128,
  160: 160,
  240: 240,
  320: 320,
  480: 480,
  640: 640,
  800: 800,
  960: 960,
  1280: 1280,
  1600: 1600,
};

function space(pixel: Space): string {
  return pxToRem(spacePalette[pixel]);
}

export { space };
