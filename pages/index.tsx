import Head from "next/head";
import Articles from "../src/components/article/Aticles";
import AppBar from "../src/components/common/AppBar";
import Profile from "../src/components/common/Profile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>徐杰的博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <main>
        <div>
          <Profile />
        </div>
        <div className="home-right">
          <Articles />
        </div>
      </main>
      <footer>这里是footer</footer>

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
        }
        @media screen and (max-width: 768px) {
          main {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          width: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
