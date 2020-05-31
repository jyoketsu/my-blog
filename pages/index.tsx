import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticles } from "../src/redux/actions";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Articles from "../src/components/article/Aticles";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Head>
        <title>徐杰的博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">徐杰的博客</h1>
        <Articles />
        <Button variant="contained" color="primary" href="#contained-buttons">
          启动
        </Button>
      </main>

      <style jsx>{`
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
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
    </Container>
  );
}
