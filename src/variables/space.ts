import type { Space, SpacePalette } from '@/types';

const rem = (key: Space) => `${key / 16}rem`;

const spacePalette: SpacePalette = {
  0: rem(0),
  4: rem(4),
  8: rem(8),
  12: rem(12),
  16: rem(16),
  24: rem(24),
  32: rem(32),
  48: rem(48),
  64: rem(64),
  80: rem(80),
  96: rem(96),
  128: rem(128),
  160: rem(160),
  240: rem(240),
  320: rem(320),
  480: rem(480),
  640: rem(640),
  800: rem(800),
  960: rem(960),
  1280: rem(1280),
  1600: rem(1600),
};

export function space(pixel: Space): string {
  return spacePalette[pixel];
}
