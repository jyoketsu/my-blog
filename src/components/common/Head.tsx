import Head from "next/head";

interface Props {
  title?: string;
  keywords?: string;
  description?: string;
}
export default function MyHead({ title, keywords, description }: Props) {
  let titleStr = title ? `${title}-徐杰的博客` : "徐杰的博客";
  const orginalKeywords = "徐杰,徐傑,jyoketsu,前端,前端开发,博客,个人博客";
  const keywordsStr = keywords
    ? `${titleStr},${keywords},${orginalKeywords}`
    : orginalKeywords;
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{titleStr}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content={keywordsStr} />
      <meta
        name="description"
        content={`${
          description ? description + "," : ""
        }基于Next.js开发的个人博客系统，记录分享工作学习中的经验`}
      />
    </Head>
  );
}
