import { css } from "@emotion/react";
import { useState } from "react";

import Note from "../Note";
import H3 from "../heading/Heading3";

import Button from "@/components/Button";
import { breakPoint, dg4Color } from "@/styles/config";

const FontContent = ({ text }: { text: string }) => {
  const defaultStyles = {
    fontSize: 80,
    lineHeight: 100,
    letterSpacing: 0,
    textAlign: "center",
    backgroundColor: "#eeeeee",
    textColor: dg4Color.black,

    label: "Atomic Dot Square",
    rnds: 0,
    wght: 400,
    slnt: 0,
  };

  const [styles, setStyles] = useState(defaultStyles);

  const handleRndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStyles({
      ...styles,
      rnds: Number(event.target.value),
    });
    setLabel(Number(event.target.value), styles.wght, styles.slnt);
  };

  const handleWghtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStyles({
      ...styles,
      wght: Number(event.target.value),
    });
    setLabel(styles.rnds, Number(event.target.value), styles.slnt);
  };

  const handleSlntChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStyles({
      ...styles,
      slnt: Number(event.target.value),
    });
    setLabel(styles.rnds, styles.wght, Number(event.target.value));
  };

  // set alignment
  const setAlign = (event: React.ChangeEvent<HTMLInputElement>) =>
    setStyles({
      ...styles,
      textAlign: event.target.value,
    });

  // reverse color
  const reverseColor = () => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      backgroundColor: prevStyles.textColor,
      textColor: prevStyles.backgroundColor,
    }));
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
      return `#${randomNumber(16777216).toString(16).padStart(6, "0")}`;
    };

    const randomVRnds = () => {
      return randomNumber(100);
    };

    const randomVWght = () => {
      return randomNumber(200) + 200;
    };

    const randomVSlnt = () => {
      return randomNumber(40);
    };

    setStyles((prevStyles) => ({
      ...prevStyles,
      fontSize: randomNumber(170) + 10,
      lineHeight: randomNumber(100) + 100,
      letterSpacing: randomNumber(50),
      textAlign: threeAlternate(),
      backgroundColor: randomColor(),
      textColor: randomColor(),

      rnds: randomVRnds(),
      wght: randomVWght(),
      slnt: randomVSlnt(),
    }));

    setLabel(randomVRnds(), randomVWght(), randomVSlnt());
  };

  // copy value
  const copyValue = () => {
    // create textarea
    const copyElement = document.createElement("textarea");

    copyElement.value = `font-family: "DG4 Atomic Dot";\nfont-variation-settings: "RNDS" ${styles.rnds}, "wght" ${
      styles.wght
    } "slnt" ${styles.slnt};\nfont-size: ${styles.fontSize}px;\nline-height: ${
      styles.lineHeight / 100
    }em;\nletter-spacing: ${styles.letterSpacing / 100}em;\ntext-align: ${styles.textAlign};\nbackground-color: ${
      styles.backgroundColor
    };\ncolor: ${styles.textColor};`;
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
        font-family: 'Atomic Dot', sans-serif;
        font-size: 20px;
        z-index: 100;
      " id="copyAlert">Copied!</div>`,
    );

    setTimeout(() => {
      const copyAlert = document.getElementById("copyAlert");
      if (copyAlert) {
        copyAlert.remove();
      }
    }, 1000);
  };

  const setLabel = (rnds: number, wght: number, slnt: number) => {
    let newLabel = "Atomic Dot Custom";
    const styleKey = `${rnds}|${wght}|${slnt}`;
    const labelMap: { [key: string]: string } = {
      "0|400|0": "Atomic Dot Square",
      "100|400|0": "Atomic Dot Circle",
      "0|200|0": "Atomic Dot Square Light",
      "100|200|0": "Atomic Dot Circle Light",
      "0|400|40": "Atomic Dot Square Italic",
      "100|400|40": "Atomic Dot Circle Italic",
      "0|200|40": "Atomic Dot Square Light Italic",
      "100|200|40": "Atomic Dot Circle Light Italic",
    };
    newLabel = labelMap[styleKey] || newLabel;

    setStyles((prevStyles) => ({
      ...prevStyles,
      label: newLabel,
    }));
  };

  const fontContent = css`
    display: flex;
    flex-direction: column;
  `;

  const editWrapper = css`
    display: flex;

    gap: 40px;

    margin-bottom: 24px;

    ${breakPoint.tab} {
      flex-direction: column;
    }
  `;

  const rangeContainer = css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    gap: 40px;

    ${breakPoint.tab} {
      justify-content: end;
    }

    ${breakPoint.sp} {
      flex-direction: column;
      gap: 8px;
    }
  `;

  const rangeWrapper = css`
    display: flex;
    align-items: center;
    gap: 8px;

    width: calc(calc(100% / 3) - calc(80px / 3));

    ${breakPoint.sp} {
      width: 100%;
    }
  `;

  const makeRange = (image: string) => css`
    ::before {
      content: "";
      display: block;

      width: 24px;
      height: 24px;

      background-repeat: no-repeat;
      background-position: center;
      background-image: url(${image});

      ${breakPoint.sp} {
        width: 36px;
        height: 36px;
      }
    }
  `;

  const rangeFontSize = makeRange("/images/ui/textformat-size.svg");
  const rangeLineHeight = makeRange("/images/ui/arrow-up-and-down.svg");
  const rangeLetterSpacing = makeRange("/images/ui/arrow-left-and-right.svg");
  const rangeRoundness = makeRange("/images/ui/roundness.svg");
  const rangeWeight = makeRange("/images/ui/arrow-up-left-and-arrow-down-right.svg");
  const rangeSlant = makeRange("/images/ui/italic.svg");

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
    height: fit-content;

    display: flex;
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

  const makeButtonAlign = (image: string) => css`
    ::before {
      content: "";
      display: block;

      width: 24px;
      height: 24px;

      background-image: url(${image});
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

  const buttonAlignLeft = makeButtonAlign("/images/ui/text-alignleft.svg");
  const buttonAlignCenter = makeButtonAlign("/images/ui/text-aligncenter.svg");
  const buttonAlignRight = makeButtonAlign("/images/ui/text-alignright.svg");

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
  `;

  const reverseButton = css`
    background-image: url("/images/ui/arrow-left-arrow-right.svg");
  `;

  const shuffleButton = css`
    background-image: url("/images/ui/shuffle.svg");
  `;

  const resetButton = css`
    background-image: url("/images/ui/arrow-counterclockwise.svg");
  `;

  const copyButton = css`
    background-image: url("/images/ui/doc-on-doc.svg");
  `;

  const itemLetter = css`
    text-align: ${styles.textAlign};
    font-size: ${styles.fontSize}px;
    letter-spacing: ${styles.letterSpacing / 100}em;
    line-height: ${styles.lineHeight / 100}em;
    padding: 16px;
    background-color: ${styles.backgroundColor};
    color: ${styles.textColor};

    font-variation-settings:
      "RNDS" ${styles.rnds},
      "wght" ${styles.wght},
      "slnt" ${styles.slnt};

    overflow-wrap: break-word;

    min-height: calc(${styles.lineHeight / 100}em + 32px);
  `;

  const ff = css`
    font-family: "Atomic Dot", sans-serif;
  `;

  const button = css`
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <div className="content" css={fontContent}>
      <H3 en={styles.label} />
      <div css={editWrapper}>
        <div css={rangeContainer}>
          <div css={[rangeWrapper, rangeFontSize]} title="Font Size">
            <input
              type="range"
              min="10"
              max="180"
              value={styles.fontSize}
              className="clickable"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setStyles({ ...styles, fontSize: Number(event.target.value) })
              }
              css={rangeInput}
            />
          </div>
          <div css={[rangeWrapper, rangeLineHeight]} title="Line Height">
            <input
              type="range"
              min="100"
              max="200"
              value={styles.lineHeight}
              className="clickable"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setStyles({ ...styles, lineHeight: Number(event.target.value) })
              }
              css={rangeInput}
            />
          </div>
          <div css={[rangeWrapper, rangeLetterSpacing]} title="Letter Spacing">
            <input
              type="range"
              min="0"
              max="50"
              value={styles.letterSpacing}
              className="clickable"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setStyles({
                  ...styles,
                  letterSpacing: Number(event.target.value),
                })
              }
              css={rangeInput}
            />
          </div>
          <div css={[rangeWrapper, rangeWeight]} title="Weight">
            <input
              type="range"
              min="200"
              max="400"
              value={styles.wght}
              className="clickable"
              onChange={handleWghtChange}
              css={rangeInput}
            />
          </div>
          <div css={[rangeWrapper, rangeSlant]} title="Slant">
            <input
              type="range"
              min="0"
              max="40"
              value={styles.slnt}
              className="clickable"
              onChange={handleSlntChange}
              css={rangeInput}
            />
          </div>
          <div css={[rangeWrapper, rangeRoundness]} title="Roundness">
            <input
              type="range"
              min="0"
              max="100"
              value={styles.rnds}
              className="clickable"
              onChange={handleRndChange}
              css={rangeInput}
            />
          </div>
        </div>
        <div css={buttonContainer}>
          <div css={buttonWrapper} title="Text Align">
            <label className="clickable">
              <input
                type="radio"
                value="left"
                checked={styles.textAlign === "left"}
                onChange={setAlign}
                css={buttonAlignLeft}
              />
            </label>
            <label className="clickable">
              <input
                type="radio"
                value="center"
                checked={styles.textAlign === "center"}
                onChange={setAlign}
                css={buttonAlignCenter}
              />
            </label>
            <label className="clickable">
              <input
                type="radio"
                value="right"
                checked={styles.textAlign === "right"}
                onChange={setAlign}
                css={buttonAlignRight}
              />
            </label>
          </div>
          <div css={colorWrapper}>
            <input
              className="clickable"
              type="color"
              value={styles.backgroundColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setStyles({
                  ...styles,
                  backgroundColor: event.target.value,
                })
              }
              css={[buttonSquare, colorInput]}
            />
            <button
              onClick={reverseColor}
              className="clickable"
              css={[buttonWithToolTip, buttonSquare, reverseButton]}
              title="Swap Color"
            />
            <input
              className="clickable"
              type="color"
              value={styles.textColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setStyles({
                  ...styles,
                  textColor: event.target.value,
                })
              }
              css={[buttonSquare, colorInput]}
            />
          </div>
          <div css={buttonWrapper}>
            <button
              onClick={shuffleValue}
              className="clickable"
              css={[buttonWithToolTip, buttonSquare, shuffleButton]}
              title="Shuffle"
            />
            <button
              onClick={() => {
                setStyles(defaultStyles);
              }}
              className="clickable"
              css={[buttonWithToolTip, buttonSquare, resetButton]}
              title="Reset"
            />
            <button
              onClick={copyValue}
              className="clickable"
              css={[buttonWithToolTip, buttonSquare, copyButton]}
              title="Copy CSS"
            />
          </div>
        </div>
      </div>
      <div css={[itemLetter, ff]}>{text}</div>

      <Note>
        「原子」が物質の最小単位であるように、Atomic Dotは可読性が保てる最小のピクセルで構成されている。
        <br />
        文字の形状は判読可能な最小単位まで削ぎ落とされ、ピクセルの有無による二値的な構成で文字を形成する。
      </Note>
      <Button
        href="https://github.com/dg4-dev/atomic-dot/raw/main/var-fonts.zip"
        text="Download"
        css={button}
        external={true}
      />
    </div>
  );
};

export default FontContent;
