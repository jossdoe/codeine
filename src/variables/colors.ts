/**
 * Functional color values are based on the defaults by Chakra UI
 * https://chakra-ui.com/docs/theming/theme
 * 
 * Pure colors are 400
 */
import type { ColorPalette, ColorShade } from '@/types';

const primaryPalette: ColorPalette = {
  50: '#efe6ff',
  100: '#d4c3fe',
  200: '#b69bff',
  300: '#956fff',
  400: '#784dff',
  500: '#5426ff',
  600: '#4422f8',
  700: '#2319f0',
  800: '#0011eb',
  900: '#0000e7',
};

export function primary(shade: ColorShade): string {
  return primaryPalette[shade];
}

const grayPalette: ColorPalette = {
  50: '#F7FAFC',
  100: '#EDF2F7',
  200: '#E2E8F0',
  300: '#CBD5E0',
  400: '#A0AEC0',
  500: '#718096',
  600: '#4A5568',
  700: '#2D3748',
  800: '#1A202C',
  900: '#171923',
};

export function gray(shade: ColorShade): string {
  return grayPalette[shade];
}

const redPalette: ColorPalette = {
  50: '#FFF5F5',
  100: '#FED7D7',
  200: '#FEB2B2',
  300: '#FC8181',
  400: '#F56565',
  500: '#E53E3E',
  600: '#C53030',
  700: '#9B2C2C',
  800: '#822727',
  900: '#63171B',
}

export function red(shade: ColorShade): string {
  return redPalette[shade];
}

const yellowPalette: ColorPalette = {
  50: '#FFFFF0',
  100: '#FEFCBF',
  200: '#FAF089',
  300: '#F6E05E',
  400: '#ECC94B',
  500: '#D69E2E',
  600: '#B7791F',
  700: '#975A16',
  800: '#744210',
  900: '#5F370E',
}

export function yellow(shade: ColorShade): string {
  return yellowPalette[shade];
}

const greenPalette: ColorPalette = {
  50: '#F0FFF4',
  100: '#C6F6D5',
  200: '#9AE6B4',
  300: '#68D391',
  400: '#48BB78',
  500: '#38A169',
  600: '#2F855A',
  700: '#276749',
  800: '#22543D',
  900: '#1C4532',
}

export function green(shade: ColorShade): string {
  return greenPalette[shade];
}

const bluePalette: ColorPalette = {
  50: '#EBF8FF',
  100: '#BEE3F8',
  200: '#90CDF4',
  300: '#63B3ED',
  400: '#4299E1',
  500: '#3182CE',
  600: '#2B6CB0',
  700: '#2C5282',
  800: '#2A4365',
  900: '#1A365D',
}

export function blue(shade: ColorShade): string {
  return bluePalette[shade];
}
