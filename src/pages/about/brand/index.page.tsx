import type { NextPage } from "next";

import H1 from "@/components/heading/h1";
import Layout from "@/components/layout";

const Brand: NextPage = () => {
  return (
    <Layout
      title="Brand"
      description="dgdgdgdgがnextの練習用に作成するページ。参考記事はJSだが、TSの練習も兼ねて進める。[参考](https://www.webopixel.net/javascript/1714.html)"
    >
      <H1 />
    </Layout>
  );
};

export default Brand;
