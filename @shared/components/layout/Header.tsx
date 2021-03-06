import { React, styled } from '@shared/vendor';

import { FC } from '@shared/vendorTypes';

import { colors } from '@shared/settings/colors';
import { fontSizes, fontWeights } from '@shared/settings/fonts';

import { IGridProps, Grid } from '../container';
import { Logo, Title } from '@shared/components/presentational';

interface IProps {
  backgroundColor?: string; // *  set the background color of the Header component
  className?: string;
  color?: string; // * set the color of all text within the Header component
  gridProps?: IGridProps;
}

const HeaderContainer: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <header {...{ className }}>
      <HeaderGrid {...props}>
        <Logo
          href="/"
          image={{
            src: '/favicon.png',
            altText: 'logo',
          }}
        >
          <Title type="h2">Definitive</Title>
        </Logo>
      </HeaderGrid>
    </header>
  );
};

const Header = styled(HeaderContainer)<IProps>`
  position: relative;
  background: ${({ backgroundColor }: { backgroundColor?: string }) => backgroundColor || colors.neutrals.white};
`;

const HeaderGrid = styled(Grid)<IGridProps & IProps>`
  display: flex;
  align-items: center;
  padding: 10px 15px;

  * {
    color: ${({ color }: { color?: string }) => color || colors.grays.gray};
  }
`;

export type IHeaderProps = IProps;
export { Header };
