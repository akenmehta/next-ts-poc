import { convertPixelsToRem } from '@shared/services';

const baseFontSize: string = '10px';

const getfontSize = (fontSize: number) => {
  return convertPixelsToRem(`${fontSize}px`, baseFontSize);
};

const fontFamilies = {
  openSans: '"Open Sans", sans-serif',
  rokkitt: 'Rokkitt, serif',
};

const fontSizes = {
  baseFontSize,
  f14: getfontSize(14),
  f16: getfontSize(16),
  f18: getfontSize(18),
  f20: getfontSize(20),
  f22: getfontSize(22),
  f24: getfontSize(24),
  f26: getfontSize(26),
  f28: getfontSize(28),
  f30: getfontSize(30),
  f36: getfontSize(36),
  f38: getfontSize(38),
  f40: getfontSize(40),
  f54: getfontSize(54),
};

const fontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

export { fontFamilies, fontWeights, fontSizes };
