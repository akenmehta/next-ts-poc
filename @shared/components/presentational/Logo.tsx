import { React, styled, Link, Image } from '@shared/vendor';
import { FC } from '@shared/vendorTypes';
import { colors } from "@shared/settings/colors";
import { ISvgProps, Svg } from './Svg';
import { Text } from "./Text";

interface IProps {
  className?: string;
  icon?: string;
  image?: {
    src: string;
    altText: string;
  };
  srText?: string;
  svgProps?: ISvgProps;
  href: string;
}

const LogoContainer: FC<IProps> = (props) => {
  const {
    className,
    srText,
    svgProps,
    href,
    image,
    children,
  } = props;

  if (image && svgProps) {
    console.error(
      'ERROR: Logo expects either and image or svg icon, not both.'
    );
  }

  return (
    <Link href={href}>
      <span {...{ className }}>
        {srText && <Text srText={srText} />}
        {svgProps && <Svg {...svgProps} />}
        {image && <Image src={image.src} width={45} height={45} alt={image.altText} />}
        {children}
      </span>
    </Link>
  );
};

const Logo = styled(LogoContainer)`
  display: flex;
  align-items: center;

  a {
    display: block;
  }

  svg {
    position: relative;
    display: inherit;
    width: 100%;
    height: 100%;
  }

  h2 {
    margin-bottom: 0;
    margin-left: 12px;
    color: ${colors.neutrals.black};
  }
`;

export type ILogoProps = IProps;
export { Logo };
