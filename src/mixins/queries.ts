import { css, FlattenSimpleInterpolation } from 'styled-components';
import { breakpoints } from '@/variables/breakpoints';

export function untilMobile(
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation {
  return css`
    @media (max-width: ${breakpoints.mobile.max}px) {
      ${styles}
    }
  `;
}

export function fromTablet(
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation {
  return css`
    @media (min-width: ${breakpoints.tablet.min}px) {
      ${styles}
    }
  `;
}

export function untilTablet(
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation {
  return css`
    @media (max-width: ${breakpoints.tablet.max}px) {
      ${styles}
    }
  `;
}

export function fromDesktop(
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation {
  return css`
    @media (min-width: ${breakpoints.desktop.min}px) {
      ${styles}
    }
  `;
}
