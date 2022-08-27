import { css } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";

import type { NextPage } from "next";

import HeaderLink from "@/components/header/headerLink";
import common from "@/styles/common";
import bp from "@/styles/config/breakpoint";
import dg4Color from "@/styles/config/color";

const header = css`
  .inside.is-open {
    height: 100vh;
  }
`;

const outside = css`
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  padding-left: 26px;
  z-index: 1000;

  ${bp.sp} {
    padding-left: 12px;
  }
`;

const logo = css`
  width: 150px;
  height: auto;

  ${bp.sp} {
    width: 120px;
  }
`;

const burger = css`
  width: 90px;
  height: 90px;
  background-color: ${dg4Color.cyan};

  justify-content: center;
  align-items: center;

  ${bp.sp} {
    width: 65px;
    height: 65px;
  }

  :hover .line-item1 {
    top: 6px;
    transition: all 0.2s;

    ${bp.sp} {
      top: 4px;
    }
  }
  :hover .line-item2 {
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s;
  }

  :hover .line-item3 {
    top: 18px;
    transition: all 0.2s;
    ${bp.sp} {
      top: 12px;
    }
  }
`;

const line = css`
  width: 35px;
  height: 27px;

  position: relative;

  ${bp.sp} {
    width: 30px;
    height: 19px;
  }

  .line-item {
    width: 100%;
    height: 3px;

    position: absolute;

    background-color: #fff;
  }

  .line-item1 {
    top: 0;
    transition: all 0.2s;
  }

  .line-item1.is-open {
    top: 12px;
    transition: all 0.2s;

    ${bp.sp} {
      top: 8px;
    }
  }

  .line-item2 {
    visibility: visible;
    opacity: 1;
    top: 12px;
    transition: all 0.2s;

    ${bp.sp} {
      top: 8px;
    }
  }

  .line-item2.is-open {
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s;
  }

  .line-item3 {
    top: 24px;
    transition: all 0.2s;
    ${bp.sp} {
      top: 16px;
    }
  }

  .line-item3.is-open {
    top: 12px;
    transition: all 0.2s;

    ${bp.sp} {
      top: 8px;
    }
  }
`;

const inside = css`
  position: fixed;
  width: 100%;
  z-index: 999;

  justify-content: space-between;

  .white.is-open {
    left: 0;
    transition: all 0.2s;
  }

  .cyan.is-open {
    width: 40%;
    height: 100vh;
    transition: all 0.2s;

    ${bp.tab} {
      width: 100%;
      justify-content: normal;
      padding-top: 100px;
      padding-bottom: 100px;

      overflow-y: auto;
    }

    ${bp.sp} {
      visibility: visible;
      padding-top: 70px;
      padding-bottom: 170px;
    }
  }
`;

const white = css`
  position: absolute;
  top: 0;
  left: -60%;
  width: 60%;
  height: 100vh;
  background-color: #fff;

  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  ${bp.tab} {
    display: none;
  }

  ul li:not(:first-child) {
    margin-top: 20px;
  }
`;

const cyan = css`
  width: 90px;
  height: 90px;
  background-color: ${dg4Color.cyan};

  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-left: auto;
  transition: all 0.2s;

  ${bp.sp} {
    width: 65px;
    height: 65px;
    visibility: hidden;
  }

  .nav.is-open {
    visibility: visible;
    opacity: 1;
    transition: all 0.2s;
  }

  .link-wrapper.is-open {
    visibility: visible;
    opacity: 1;
  }
`;

const nav = css`
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;

  ${bp.tab} {
    width: 354px;
  }
  ${bp.sp} {
    width: 284px;
  }

  ul li:not(:first-child) {
    margin-top: 26px;

    ${bp.sp}
    margin-top: 16px;
  }

  ul li.indent {
    padding-left: 32px;
    margin-top: 0px;
  }

  ul li.indent a .ja {
    font-size: 20px;
    ${bp.sp} {
      font-size: 16px;
    }
  }
`;

const linkWrapper = css`
  display: none;
  visibility: hidden;
  opacity: 0;
  margin-top: 24px;
  ${bp.tab} {
    display: block;
  }

  ul li:not(:first-child) {
    margin-top: 20px;
  }
`;

const Header: NextPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  let openState = openMenu ? "is-open" : "";

  return (
    <header css={[header, common.flex]}>
      <div css={[outside, common.flex]}>
        <Link href="/">
          <a css={logo}>
            <object data="/images/logo.svg" type="image/svg+xml" />
          </a>
        </Link>
        <div css={[burger, common.click, common.flex]} onClick={() => menuFunction()}>
          <div css={[line, common.flex]}>
            <div className={`line-item line-item1 ${openState}`} />
            <div className={`line-item line-item2 ${openState}`} />
            <div className={`line-item line-item3 ${openState}`} />
          </div>
        </div>
      </div>

      <div css={[inside, common.flex]} className={`inside ${openState}`}>
        <div css={[white, common.flex]} className={`white ${openState}`}>
          <ul>
            <li>
              <HeaderLink
                href="https://www.radio.dgdgdgdg.com/"
                en="Enter the radio title"
                ja="ラジオのタイトルを入力"
                ext={true}
              />
            </li>
            <li>
              <HeaderLink
                href="https://www.apps.dgdgdgdg.com/"
                en="dg4 app archive"
                ja="dg4アプリアーカイブ"
                ext={true}
              />
            </li>
          </ul>
        </div>
        <div css={[cyan, common.flex]} className={`cyan ${openState}`}>
          <nav css={nav} className={`nav ${openState}`}>
            <ul>
              <li>
                <HeaderLink href="/about" en="About" ja="dgdgdgdgとは" />
                <ul>
                  <li className="indent">
                    <HeaderLink href="/about/brand" en="Brand resource" ja="ブランドリソース" />
                  </li>
                  <li className="indent">
                    <HeaderLink href="/about/tool" en="Tool" ja="ツール一覧" />
                  </li>
                </ul>
              </li>
              <li>
                <HeaderLink href="/works" en="Works" ja="dgdgdgdgの作品" />
              </li>
              <li>
                <HeaderLink href="/service" en="Service" ja="dgdgdgdgのプラン" />
              </li>
              <li>
                <HeaderLink href="/contact" en="Contact" ja="dgdgdgdgに問い合わせる" />
              </li>
            </ul>
          </nav>
          <div css={linkWrapper} className={`link-wrapper ${openState}`}>
            <ul>
              <li>
                <HeaderLink
                  href="https://www.radio.dgdgdgdg.com/"
                  en="Enter the radio title"
                  ja="ラジオのタイトルを入力"
                  ext={true}
                />
              </li>
              <li>
                <HeaderLink
                  href="https://www.apps.dgdgdgdg.com/"
                  en="dg4 app archive"
                  ja="dg4アプリアーカイブ"
                  ext={true}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
