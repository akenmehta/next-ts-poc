import { React, styled } from '@shared/vendor';

import { FC } from '@shared/vendorTypes';

type TitleType = 'h1' | 'h2' | 'h3' | 'h4';

interface IProps {
  className?: string;
  type: TitleType;
  center?: boolean;
  flat?: boolean;
}

const TitleContainer: FC<IProps> = (props) => {
  const { className, children, type } = props;

  if (type === 'h1') {
    return <h1 className={className}>{children}</h1>;
  }
  if (type === 'h2') {
    return <h2 className={className}>{children}</h2>;
  }
  if (type === 'h3') {
    return <h3 className={className}>{children}</h3>;
  }
  if (type === 'h4') {
    return <h4 className={className}>{children}</h4>;
  }

  return <s>Missing title type</s>;
};

const Title = styled(TitleContainer)<IProps>`
  color: inherit;
  ${({ center }) => center && `text-align:center`};
  ${({ flat }) => (flat ? `margin:0;` : `margin: 5px 0 20px;`)};
`;

export type { TitleType, IProps as ITitleProps };
export { Title};