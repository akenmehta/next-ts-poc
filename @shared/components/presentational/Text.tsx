import { React, styled } from '@shared/vendor';

import { FC } from '@shared/vendorTypes';

import { colors } from '@shared/settings/colors';

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  error?: boolean;
  srText?: React.ReactNode;
  underline?: boolean;
}

const TextContainer: FC<IProps> = (props) => {
  const { children, className, srText, ...rest } = props;

  if (srText) {
    return (
      <span {...rest}>
        <ScreenReaderText aria-hidden="false">{srText}</ScreenReaderText>
        {children && (
          <span
            aria-hidden="true"
            tabIndex={-1}
            className={className}
            role="presentation">
            {children}
          </span>
        )}
      </span>
    );
  }

  return <span className={className}>{children}</span>;
};

const ScreenReaderText = styled.span`
  color: transparent !important;
  float: left !important;
  font-size: 0 !important;
  font-size: 0 !important;
  line-height: 0 !important;
  width: 0 !important;
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  display: inline !important;
`;

const Text = styled(TextContainer)<IProps>`
  display: inline-block;
  ${({ error }) =>
    error &&
    `
        font-size: 90%;
        color: ${colors.reds.guardsmanRed};
    `};
  ${({ underline }) => underline && `text-decoration: underline;`}
`;

export type ITextProps = IProps;
export { Text };