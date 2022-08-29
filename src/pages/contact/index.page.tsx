import { css } from "@emotion/react";
import Image from "next/image";

import type { NextPage } from "next";

import Button from "@/components/button";
import Container from "@/components/container";
import H1 from "@/components/heading/h1";
import H2 from "@/components/heading/h2";
import Layout from "@/components/layout";
import { center, flex } from "@/styles/common";
import { bp } from "@/styles/config";

const messageContent = css`
  justify-content: center;
  gap: 32px;

  ${bp.sp} {
    gap: 24px;
  }
`;

const linkItem = css`
  max-width: 600px;
  justify-content: space-between;

  ${bp.sp} {
    flex-wrap: wrap;
  }
`;

const itemContent = css`
  width: calc((100% / 8) - 8px);

  ${bp.sp} {
    width: calc(25% - 16px);
    margin: 8px;
  }

  :hover {
    opacity: 0.5;
  }

  a {
    display: block;
  }
`;

const Contact: NextPage = () => {
  const linkData = ["note", "twitter", "facebook", "youtube", "instagram", "gitlab", "github", "suzuri"];

  const linkItems = linkData.map((value) => {
    const href = `https://${value}.dgdgdgdg.com`;
    const src = `/images/icon/${value}.svg`;

    const linkElm = (
      <li key={value} css={itemContent}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Image src={src} width="135" height="135" alt="" />
        </a>
      </li>
    );

    return linkElm;
  });

  const linkList = <ul css={[linkItem, center, flex]}>{linkItems}</ul>;

  return (
    <Layout
      title="Contact"
      description="dgdgdgdgがnextの練習用に作成するページ。参考記事はJSだが、TSの練習も兼ねて進める。[参考](https://www.webopixel.net/javascript/1714.html)"
    >
      <H1 />

      <section id="message">
        <Container>
          <H2 en="Message" ja="メッセージ" />
          <div css={[messageContent, center, flex]}>
            <Button href="https://messenger.dgdgdgdg.com" text="Messenger" ext={true} />
            <Button href="https://twitterdm.dgdgdgdg.com" text="Twitter" ext={true} />
          </div>
        </Container>
      </section>

      <section className="link" id="link">
        <Container>
          <H2 en="Link" ja="リンク" />
          <div css={center}>{linkList}</div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
