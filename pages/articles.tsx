import { useEffect, useState } from "react";
import Head from "next/head";
import AppBar from "../src/components/common/AppBar";
import Articles from "../src/components/article/Aticles";
import { getArticles } from "../src/redux/actions";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../src/redux/reducer/RootState";
import Pagination from "@material-ui/lab/Pagination";
import Loading from "../src/components/common/Loading";
import Profile from "../src/components/common/Profile";
import { useRouter } from "next/router";

function AllArticles() {
  const pageSize = 20;
  const router = useRouter();
  const query = router.query;
  const dispatch = useDispatch();
  const [current, setcurrent] = useState(1);
  const articles = useTypedSelector((state) => state.article.articles);
  const total = useTypedSelector((state) => state.article.total);
  const loading = useTypedSelector((state) => state.article.loading);

  useEffect(() => {
    dispatch(getArticles(current, pageSize, query.keyword as string));
    (document.getElementById("__next") as HTMLElement).scrollTop = 0;
  }, [current, pageSize, query]);

  return (
    <div className="articles-wrapper">
      <Head>
        <title>所有文章-徐杰的博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <main className="home-main">
        <div className="home-left">
          <Profile />
          <Profile />
        </div>
        <div className="home-right">
          <Articles articles={articles} />
          {articles.length ? (
            <Pagination
              page={current}
              count={Math.ceil(total / pageSize)}
              size="large"
              onChange={(event: object, page: number) => {
                setcurrent(page);
                (document.getElementById(
                  "__next"
                ) as HTMLElement).scrollTop = 0;
              }}
            />
          ) : null}

          {loading ? <Loading /> : null}
          {!loading && !articles.length ? (
            <span className="no-result">暂无结果</span>
          ) : null}
        </div>
      </main>
      <footer>
        <span>©2020 Jyoketsu All Rights Reserved</span>
        <span
          onClick={() => window.open("http://www.beian.miit.gov.cn", "_blank")}
        >
          苏ICP备20038833号
        </span>
      </footer>
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

export default AllArticles;
