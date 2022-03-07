import { React, styled } from '@shared/vendor';

import { FC } from '@shared/vendorTypes';

import { colors } from '@shared/settings/colors';

interface IProps {
  icon: string;
  className?: string;
  rotate?: number;
  isCentered?: boolean; // * default: false
  width?: number; // * default :100%
  height?: number; // * default :100%,
  fill?: string;
}

const SvgContainer: FC<IProps> = (props) => {
  const { icon, className } = props;

  return <span {...{ className }}>{icon}</span>;
};

const Svg = styled(SvgContainer)<IProps>`
  display: inline-flex;
  min-width: 5px;
  max-width: 100%;
  max-height: 100%;
  ${({ rotate }) =>
    rotate &&
    `
        transform: rotate(${rotate}deg); 
  `}
  ${({ isCentered }) =>
    isCentered &&
    `
        margin: auto;  // * Center horizontally
        align-self: center;
    `}
    
    ${({ width, height }) => {
    const getDimensions = (dimension?: number): string => {
      return dimension ? `${dimension}px` : '';
    };
    return `
        width: ${getDimensions(width) || '40px'};
        height: ${getDimensions(height) || getDimensions(width) || '40px'};             
    `;
  }}

	svg {
    display: inline-block;
    vertical-align: top;
    margin: auto;
    max-width: 100%;
    width: 100%;
    height: 100%;
    ${({ fill }) => `fill :${fill || colors.neutrals.black};`}
  }
`;

export type ISvgProps = IProps;
export { Svg };
