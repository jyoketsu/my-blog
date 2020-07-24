import Head from "next/head";
import { useRouter } from "next/router";
import Articles from "../src/components/article/Aticles";
import AppBar from "../src/components/common/AppBar";
import Profile from "../src/components/common/Profile";
import api from "../src/api";
import Button from "@material-ui/core/Button";

function Home({ posts, user, articleCount, cagegoryCount, tagCount }) {
  const router = useRouter();

  const more = () => {
    if (document.body.scrollTop) {
      document.body.scrollTop = 0;
    } else {
      document.documentElement.scrollTop = 0;
    }
    router.push({
      pathname: "/articles",
      query: { page: 2 },
    });
  };

  return (
    <div className="articles-wrapper">
      <Head>
        <title>徐杰的博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <main className="home-main">
        <div className="home-left">
          <Profile
            user={user}
            articleCount={articleCount}
            cagegoryCount={cagegoryCount}
            tagCount={tagCount}
          />
        </div>
        <div className="home-right">
          <Articles articles={posts} />
          <Button color="primary" onClick={more}>
            查看更多
          </Button>
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
    </div>
  );
}

export async function getStaticProps() {
  let promises = [
    api.article.get(1, 20),
    api.auth.getUserDetail("5ef36ef356e5707c25fd1818"),
    api.article.count(),
    api.category.count(),
    api.tag.count(),
  ];
  const results: any[] = await Promise.all(promises);
  if (results[0].status === 200 && results[1].status === 200) {
    const posts = results[0].result.array;
    const user = results[1].result;
    const articleCount = results[2].result;
    const cagegoryCount = results[3].result;
    const tagCount = results[4].result;

    return {
      props: { posts, user, articleCount, cagegoryCount, tagCount },
    };
  }
}

export default Home;
