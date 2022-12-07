import { css } from "@emotion/react";
import Link from "next/link";

import { bp, dg4Color } from "@/styles/config";

const btn = css`
  display: block;

  transition: all 0.2s;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;

  width: fit-content;
  height: 50px;
  line-height: 46px;
  text-align: center;

  padding: 0 16px;
  padding-bottom: 4px;
  box-shadow: 4px 4px 0px 0px ${dg4Color.black};

  transform: translate(-4px, -4px);

  ${bp.sp} {
    height: 40px;
    line-height: 38px;
    font-size: 16px;
    padding-bottom: 2px;
  }

  :hover {
    box-shadow: 0px 0px 0px 0px ${dg4Color.black};
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;

type Props = {
  href: string;
  text?: string;
  className?: string;
  ext?: Boolean;
};

const Button = ({ href, text = "See more", className, ext = false }: Props) => {
  return ext ? (
    <a href={href} css={btn} className={className} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <Link href={href}>
      <a css={btn} className={className}>
        {text}
      </a>
    </Link>
  );
};

export default Button;
