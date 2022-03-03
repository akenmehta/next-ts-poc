import { React, styled, Link } from '@shared/vendor';
import { FC } from '@shared/vendorTypes';
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

  /* !TODO add dev env specific implementation  */
  if (image && svgProps) {
    console.error(
      'ERROR: Logo expects either and image or svg icon, not both.'
    );
  }

  return (
    <span {...{ className }}>
      <Link href={href}>
        <>
          {srText && <Text srText={srText} />}
          {svgProps && <Svg {...svgProps} />}
          {image && <img src={image.src} alt={image.altText} />}
          {children}
        </>
      </Link>
    </span>
  );
};

const Logo = styled(LogoContainer)`
  display: inline-block;

  a {
    display: block;
  }

  svg {
    position: relative;
    display: inherit;
    width: 100%;
    height: 100%;
  }

  img {
    position: relative;
    display: inherit;
    max-width: 100px;
    height: 60px;
  }
`;

export type ILogoProps = IProps;
export { Logo };
