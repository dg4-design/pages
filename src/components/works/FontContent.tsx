import { css } from "@emotion/react";
import { useState } from "react";

import H3 from "../heading/Heading3";

import { breakPoint, dg4Color } from "@/styles/config";

const FontContent = ({ name, text }: { name: "Dont" | "Dont Round" | "Dont Circle"; text: string }) => {
  // font size
  const defaultFontSize = 32;
  const [fontSize, setFontSizeValue] = useState<number>(defaultFontSize);
  const changeFontSize = (event: React.ChangeEvent<HTMLInputElement>) => setFontSizeValue(parseInt(event.target.value));

  // line height
  const defaultLineHeight = 100;
  const [lineHeight, setLineHeightValue] = useState<number>(defaultLineHeight);
  const changeLineHeight = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLineHeightValue(parseInt(event.target.value));

  // letter spacing
  const defaultLetterSpacing = 0;
  const [letterSpacing, setLetterSpacingValue] = useState<number>(defaultLetterSpacing);
  const changeLetterSpacing = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLetterSpacingValue(parseInt(event.target.value));

  // text align
  const defaultTextAlign = "center";
  const [textAlign, setTextAlign] = useState<string>(defaultTextAlign);
  const changeTextAlign = (event: React.ChangeEvent<HTMLInputElement>) => setTextAlign(event.target.value);

  // background color
  const defaultBackgroundColor = "#eeeeee";
  const [backgroundColor, setBackgroundColor] = useState<string>(defaultBackgroundColor);
  const changeBackgroundColor = (event: React.ChangeEvent<HTMLInputElement>) => setBackgroundColor(event.target.value);

  // text color
  const defaultTextColor = dg4Color.black;
  const [textColor, setTextColor] = useState<string>(defaultTextColor);
  const changeTextColor = (event: React.ChangeEvent<HTMLInputElement>) => setTextColor(event.target.value);

  // reverse color
  const reverseColor = () => {
    setBackgroundColor(textColor);
    setTextColor(backgroundColor);
  };

  // shuffle value
  const shuffleValue = () => {
    const randomNumber = (n: number) => {
      return Math.floor(Math.random() * n);
    };

    const threeAlternate = () => {
      if (randomNumber(3) === 0) {
        return "left";
      } else if (randomNumber(3) === 2) {
        return "right";
      } else {
        return "center";
      }
    };

    const randomColor = () => {
      return `#${Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0")}`;
    };

    setFontSizeValue(randomNumber(170) + 10);
    setLineHeightValue(randomNumber(100) + 100);
    setLetterSpacingValue(randomNumber(50));
    setTextAlign(threeAlternate);
    setBackgroundColor(randomColor);
    setTextColor(randomColor);
  };

  // reset value
  const resetValue = () => {
    setFontSizeValue(defaultFontSize);
    setLineHeightValue(defaultLineHeight);
    setLetterSpacingValue(defaultLetterSpacing);
    setTextAlign(defaultTextAlign);
    setBackgroundColor(defaultBackgroundColor);
    setTextColor(defaultTextColor);
  };

  // copy value
  const copyValue = () => {
    // create textarea
    const copyElement = document.createElement("textarea");
    copyElement.value = `font-family: "${name}";\nfont-size: ${fontSize}px;\nline-height: ${
      lineHeight / 100
    }em;\nletter-spacing: ${
      letterSpacing / 100
    }em;\ntext-align: ${textAlign};\nbackground-color: ${backgroundColor};\ncolor: ${textColor};`;
    document.body.appendChild(copyElement);

    // copy
    navigator.clipboard.writeText(copyElement.value);
    document.body.removeChild(copyElement);

    // copy alert
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: ${dg4Color.blue};
        color: #fff;
        padding: 8px 16px;
        border-radius: 4px;
        font-family: 'Dont', sans-serif;
        font-size: 20px;
        z-index: 100;
      " id="copyAlert">Copied!</div>`
    );

    setTimeout(() => {
      const copyAlert = document.getElementById("copyAlert");
      if (copyAlert) {
        copyAlert.remove();
      }
    }, 1000);
  };

  const fontContent = css`
    display: flex;
    flex-direction: column;
  `;

  const editWrapper = css`
    display: flex;
    align-items: center;
    gap: 40px;

    margin-bottom: 24px;

    ${breakPoint.tab} {
      flex-direction: column;
    }
  `;

  const rangeContainer = css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 40px;

    ${breakPoint.sp} {
      flex-direction: column;
      gap: 8px;
    }
  `;

  const rangeWrapper = css`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 100%;

    ::before {
      content: "";
      display: block;

      width: 24px;
      height: 24px;

      background-repeat: no-repeat;
      background-position: center;

      ${breakPoint.sp} {
        width: 36px;
        height: 36px;
      }
    }
  `;

  const rangeFontSize = css`
    ::before {
      background-image: url("/images/ui/textformat-size.svg");
    }
  `;

  const rangeLineHeight = css`
    ::before {
      background-image: url("/images/ui/arrow-up-and-down.svg");
    }
  `;

  const rangeLetterSpacing = css`
    ::before {
      background-image: url("/images/ui/arrow-left-and-right.svg");
    }
  `;

  const rangeInput = css`
    -webkit-appearance: none;
    appearance: none;

    background-color: #ddd;
    height: 2px;

    width: 100%;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;

      width: 16px;
      height: 16px;

      display: block;
      background-color: ${dg4Color.cyan};
      border-radius: 50%;

      box-shadow: none;

      ${breakPoint.sp} {
        width: 20px;
        height: 20px;
      }
    }
  `;

  const buttonContainer = css`
    display: flex;
    align-items: center;
    gap: 40px;

    ${breakPoint.tab} {
      width: 100%;
      justify-content: flex-end;
    }

    ${breakPoint.sp} {
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 24px;
    }

    @media screen and (max-width: 444px) {
      div:last-of-type {
        margin-left: auto;
      }
    }

    @media screen and (max-width: 295px) {
      justify-content: center;
      div:last-of-type {
        margin-left: 0;
      }
    }
  `;

  const buttonWrapper = css`
    display: flex;
    gap: 16px;

    ${breakPoint.sp} {
      gap: 8px;
    }
  `;

  const buttonAlign = css`
    ::before {
      content: "";
      display: block;

      width: 24px;
      height: 24px;

      background-repeat: no-repeat;
      background-position: center;
      filter: grayscale(100%) brightness(30%);

      ${breakPoint.sp} {
        width: 36px;
        height: 36px;
      }
    }

    :checked {
      ::before {
        filter: grayscale(0) brightness(100%);
      }
    }
  `;

  const buttonAlignLeft = css`
    ::before {
      background-image: url("/images/ui/text-alignleft.svg");
    }
  `;

  const buttonAlignCenter = css`
    ::before {
      background-image: url("/images/ui/text-aligncenter.svg");
    }
  `;

  const buttonAlignRight = css`
    ::before {
      background-image: url("/images/ui/text-alignright.svg");
    }
  `;

  const colorWrapper = css`
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  const buttonSquare = css`
    display: block;

    width: 24px;
    height: 24px;

    ${breakPoint.sp} {
      width: 36px;
      height: 36px;
    }
  `;

  const colorInput = css`
    ::-webkit-color-swatch {
      border: 2px solid #ddd;
      width: 100%;
    }

    ::-webkit-color-swatch-wrapper {
      padding: 0;

      width: 100%;
    }
  `;

  const buttonWithToolTip = css`
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    ::before {
      opacity: 0;
      content: "";

      position: absolute;
      top: -32px;
      right: 0;

      padding: 0.4em 0.7em;
      font-size: 12px;
      font-weight: 400;
      color: #fff;
      white-space: nowrap;
      background: ${dg4Color.black};
      border-radius: 4px;

      transition: opacity 0.2s ease-in-out;
    }

    :hover::before {
      opacity: 1;
    }
  `;

  const reverseButton = css`
    background-image: url("/images/ui/arrow-left-arrow-right.svg");

    ::before {
      content: "Swap Color";
    }
  `;

  const shuffleButton = css`
    background-image: url("/images/ui/shuffle.svg");

    ::before {
      content: "Shuffle";
    }
  `;

  const resetButton = css`
    background-image: url("/images/ui/arrow-counterclockwise.svg");

    ::before {
      content: "Reset";
    }
  `;

  const copyButton = css`
    background-image: url("/images/ui/doc-on-doc.svg");

    ::before {
      content: "Copy CSS";
    }
  `;

  const itemLetter = css`
    text-align: ${textAlign};
    font-size: ${fontSize}px;
    letter-spacing: ${letterSpacing / 100}em;
    line-height: ${lineHeight / 100}em;
    padding: 16px;
    background-color: ${backgroundColor};
    color: ${textColor};

    overflow-wrap: break-word;

    min-height: calc(${lineHeight / 100}em + 32px);
  `;

  const ff = css`
    font-family: ${name}, sans-serif;
  `;

  return (
    <div className="content" css={fontContent}>
      <H3 en={name} />
      <div css={editWrapper}>
        <div css={rangeContainer}>
          <div css={[rangeWrapper, rangeFontSize]}>
            <input
              type="range"
              min="10"
              max="180"
              value={fontSize}
              className="clickable"
              onChange={changeFontSize}
              css={rangeInput}
            />
          </div>
          <div css={[rangeWrapper, rangeLineHeight]}>
            <input
              type="range"
              min="100"
              max="200"
              value={lineHeight}
              className="clickable"
              onChange={changeLineHeight}
              css={rangeInput}
            />
          </div>
          <div css={[rangeWrapper, rangeLetterSpacing]}>
            <input
              type="range"
              min="0"
              max="50"
              value={letterSpacing}
              className="clickable"
              onChange={changeLetterSpacing}
              css={rangeInput}
            />
          </div>
        </div>
        <div css={buttonContainer}>
          <div css={buttonWrapper}>
            <label className="clickable">
              <input
                type="radio"
                value="left"
                checked={textAlign === "left"}
                onChange={changeTextAlign}
                css={[buttonAlign, buttonAlignLeft]}
              />
            </label>
            <label className="clickable">
              <input
                type="radio"
                value="center"
                checked={textAlign === "center"}
                onChange={changeTextAlign}
                css={[buttonAlign, buttonAlignCenter]}
              />
            </label>
            <label className="clickable">
              <input
                type="radio"
                value="right"
                checked={textAlign === "right"}
                onChange={changeTextAlign}
                css={[buttonAlign, buttonAlignRight]}
              />
            </label>
          </div>
          <div css={colorWrapper}>
            <input
              className="clickable"
              type="color"
              value={backgroundColor}
              onChange={changeBackgroundColor}
              css={[buttonSquare, colorInput]}
            />
            <button
              onClick={reverseColor}
              className="clickable"
              css={[buttonWithToolTip, buttonSquare, reverseButton]}
            />
            <input
              className="clickable"
              type="color"
              value={textColor}
              onChange={changeTextColor}
              css={[buttonSquare, colorInput]}
            />
          </div>
          <div css={buttonWrapper}>
            <button
              onClick={shuffleValue}
              className="clickable"
              css={[buttonWithToolTip, buttonSquare, shuffleButton]}
            />
            <button onClick={resetValue} className="clickable" css={[buttonWithToolTip, buttonSquare, resetButton]} />
            <button onClick={copyValue} className="clickable" css={[buttonWithToolTip, buttonSquare, copyButton]} />
          </div>
        </div>
      </div>
      <div css={[itemLetter, ff]}>{text}</div>
    </div>
  );
};

export default FontContent;
