import { css, FlattenSimpleInterpolation } from 'styled-components';
import { breakpoints } from '@/variables/breakpoints';

function untilMobile(
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation {
  return css`
    @media (max-width: ${breakpoints.mobile.max}px) {
      ${styles}
    }
  `;
}

function fromTablet(
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation {
  return css`
    @media (min-width: ${breakpoints.tablet.min}px) {
      ${styles}
    }
  `;
}

function untilTablet(
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation {
  return css`
    @media (max-width: ${breakpoints.tablet.max}px) {
      ${styles}
    }
  `;
}

function fromDesktop(
  styles: FlattenSimpleInterpolation
): FlattenSimpleInterpolation {
  return css`
    @media (min-width: ${breakpoints.desktop.min}px) {
      ${styles}
    }
  `;
}

export const queries = {
  untilMobile,
  fromTablet,
  untilTablet,
  fromDesktop,
};
