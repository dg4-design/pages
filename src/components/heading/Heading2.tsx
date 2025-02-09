import { css } from "@emotion/react";

import { breakPoint, dg4Color } from "@/styles/config";

const heading2 = css`
  width: fit-content;
  height: 100px;
  position: relative;

  text-align: center;

  padding-top: 8px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;

  ${breakPoint.tab} {
    margin-bottom: 60px;
  }
  ${breakPoint.sp} {
    height: 50px;

    padding-top: 0px;
    margin-bottom: 40px;
  }

  .en {
    font-family: "Atomic Dot", sans-serif;
    font-variation-settings:
      "RNDS" 0,
      "wght" 400;
    font-size: 60px;

    ${breakPoint.sp} {
      font-size: 40px;
    }
  }
  .ja {
    font-family: "Zen Kaku Gothic New", sans-serif;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.2em;
    color: ${dg4Color.cyan};

    margin-top: 8px;
  }
`;

type Props = {
  en: string;
  ja: string;
  className?: string;
};

const H2 = ({ en, ja, className }: Props) => {
  return (
    <div css={heading2} className={className}>
      <h2 className="en">{en}</h2>
      <div className="ja">{ja}</div>
    </div>
  );
};

export default H2;
