import Head from "next/head";
import Button from "@material-ui/core/Button";
import Articles from "../src/components/article/Aticles";
import AppBar from "../src/components/common/AppBar";
import Profile from "../src/components/common/Profile";
import api from "../src/api";

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>徐杰的博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <main>
        <div className="home-left">
          <Profile />
          <Profile />
        </div>
        <div className="home-right">
          <Articles articles={posts} />
          <Button href="#text-buttons" color="primary">
            查看更多
          </Button>
        </div>
      </main>
      <footer>
        这里是footer这里是footer这里是footer @2020 Powered by Ketsu Jyo
      </footer>

      <style jsx>{`
        main {
          display: flex;
          max-width: 960px;
          margin: 25px auto;
        }
        footer {
          border-top: 1px solid #ddd;
          height: 60px;
          display: flex;
          align-items: center;
          color: #9e9e9e;
          padding: 0 25px;
        }
        .home-right {
          flex: 1;
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @media screen and (max-width: 768px) {
          main {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const res: any = await api.article.get(1, 20);
  if (res.status === 200) {
    const posts = res.result.array;

    return {
      props: { posts },
    };
  }
}

export default Home;
