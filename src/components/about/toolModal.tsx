/* eslint-disable @next/next/no-img-element */

import { css } from "@emotion/react";
import { useState } from "react";

import { center, click, flex } from "@/styles/common";
import { bp, dg4Color } from "@/styles/config";

const cover = css`
  img {
    display: block;
  }
`;

const modal = css`
  position: fixed;
  top: 100%;
  left: 0;

  z-index: 1000;

  width: 100%;
  height: 100vh;

  background-color: #fff;
`;

const closeBtn = css`
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;

  width: 40px;
  height: 40px;

  ${bp.sp} {
    top: 20px;
  }

  ::before,
  ::after {
    content: "";
    display: block;
    width: 40px;
    border-top: 3px solid ${dg4Color.black};
    position: absolute;
    top: 50%;
  }
  ::before {
    transform: rotate(25deg);
  }
  ::after {
    transform: rotate(-25deg);
  }
`;

const scrolls = css`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  padding: 64px;

  ${bp.sp} {
    flex-direction: column;
    justify-content: normal;
    overflow-y: auto;
    padding: 64px 24px;
  }

  img {
    display: block;
    width: 60%;
    max-width: 760px;

    ${bp.sp} {
      width: 100%;
      max-width: 380px;
    }
  }
`;

const desc = css`
  width: 40%;
  line-height: 1.5;
  margin-left: 40px;

  ${bp.sp} {
    width: 100%;
    margin-left: 0;
    margin-top: 24px;
  }

  .name {
    font-weight: bold;
    font-size: 24px;
  }
  .about {
    margin-top: 16px;
  }
`;

type Props = {
  name: string;
  maker: string;
  about: string;
  gen: Number | string;
  variety?: string;
  owning?: Number;
};

const ToolModal = ({ name, maker, about, gen, variety, owning }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const fmtMaker = maker.toLowerCase().replace(/[."+() -]/g, "");
  const fmtName = name.toLowerCase().replace(/[."+() -]/g, "");
  const fmtVariety = variety ? variety.toLowerCase().replace(/[."+() -]/g, "") : undefined;
  const imgName = fmtVariety
    ? `/images/tool/${fmtMaker}-${fmtName}-${fmtVariety}.png`
    : `/images/tool/${fmtMaker}-${fmtName}.png`;

  const nameNOwn = variety ? `${name} - ${variety}` : name;

  let isOpen = modalIsOpen
    ? css`
        top: 0;
        transition: all 0.3s;
      `
    : css`
        top: 100%;
        transition: all 0.3s;
      `;

  return (
    <>
      <div css={[cover, click]} onClick={() => setIsOpen(true)}>
        <img src={imgName} alt="" />
      </div>
      <div css={[modal, isOpen]}>
        <div css={[closeBtn, center, click]} onClick={() => setIsOpen(false)}></div>
        <div css={[scrolls, flex]}>
          <img src={imgName} alt="" />
          <div css={desc}>
            <div className="name">{nameNOwn}</div>
            <div className="maker-and-gen">{`${maker}・${gen}`}</div>
            <div className="about">{about}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolModal;
