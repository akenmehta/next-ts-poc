import { React, styled } from '@shared/vendor';
import { colors } from '@shared/settings/colors';
import { FC } from '@shared/vendorTypes';
import { Grid } from '@shared/components/container';

const Footer: FC<unknown> = () => {
  return (
    <FooterWrapper>
      <Grid>&copy; {new Date().getFullYear()} Definitive Inc. All rights reserved.</Grid>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  color: ${colors.grays.gray};
  background-color: ${colors.neutrals.white};
  padding: 20px 0;
`;

export { Footer };
