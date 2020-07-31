import { renderToStaticMarkup } from "react-dom/server";
import moment from "moment";
import api from "../src/api";

const SitemapIndex = () => null;

const Sitemap = ({ pages, routeName, origin }) => {
  /*
   * NOTE: <?xml ?> is optional preamble from the spec,
   * UTF-8 is the default
   * version 1.0 is the default
   */
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>{origin}</loc>
        <changefreq>daily</changefreq>
      </url>
      <url>
        <loc>{[origin, "articles"].join("/")}</loc>
        <changefreq>daily</changefreq>
      </url>
      {pages?.map((page, index) => {
        return (
          <url key={index}>
            <loc>{[origin, routeName, page?._id].join("/")}</loc>
            <lastmod>{moment(page?.updateTime).format("YYYY-MM-DD")}</lastmod>
            <changefreq>weekly</changefreq>
          </url>
        );
      })}
    </urlset>
  );
};

export const getServerSideProps = async ({ res }) => {
  const result = await api.article.get();
  if (result.status === 200) {
    const pages = result.result.array;
    const origin = "https://blog.jyoketsu.com";

    res.setHeader("Content-Type", "text/xml");
    res.write(
      renderToStaticMarkup(
        <Sitemap pages={pages} routeName="article" origin={origin} />
      )
    );
    res.end();
  }

  return {
    props: {},
  };
};

export default SitemapIndex;
