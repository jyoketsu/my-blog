import React from "react";
import { useRouter } from "next/router";
import MyHead from "../src/components/common/Head";
import Footer from "../src/components/common/Footer";
import AppBar from "../src/components/common/AppBar";
import Articles from "../src/components/article/Aticles";
import Pagination from "@material-ui/lab/Pagination";
import Categories from "../src/components/common/Categories";
import Tags from "../src/components/common/Tags";
import api from "../src/api";

function AllArticles({ articles, total, tags, categories }) {
  const pageSize = 20;
  const router = useRouter();
  const query = router.query;

  return (
    <div className="articles-wrapper">
      <MyHead title="所有文章" />
      <AppBar />
      <main className="home-main">
        <div className="home-left">
          <Categories categories={categories} />
          <Tags tags={tags} />
        </div>
        <div className="home-right">
          <Articles articles={articles} />
          {articles.length ? (
            <Pagination
              page={typeof query.page ? parseInt(query.page as string) : 1}
              count={Math.ceil(total / pageSize)}
              size="large"
              onChange={(event: object, page: number) => {
                router.push({
                  pathname: "/articles",
                  query: { ...query, ...{ page: page } },
                });
                // (document.getElementById(
                //   "__next"
                // ) as HTMLElement).scrollTop = 0;
              }}
            />
          ) : null}

          {!articles.length ? (
            <span className="no-result">暂无结果</span>
          ) : null}
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .articles-wrapper {
          height: 100%;
        }
        .home-main {
          min-height: calc(100% - 124px - 50px);
        }
        .no-result {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const query = context.query;
  const page = query.page || 1;
  const keyword = query.keyword;
  const category = query.category;
  const tag = query.tag;

  let promises = [
    api.article.get(page, 20, keyword, category, tag),
    api.tag.getTags(),
    api.category.getCategories(),
  ];
  const results: any[] = await Promise.all(promises);

  if (results[0].status === 200 && results[1].status === 200) {
    // 文章
    const articles = results[0].result.array;
    const total = results[0].result.count;
    // 标签
    const tags = results[1].result;
    // 分类
    const categories = results[2].result;
    // Pass data to the page via props
    return { props: { articles, total, tags, categories } };
  }
}

export default AllArticles;
