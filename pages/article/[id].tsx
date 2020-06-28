import { useEffect } from "react";
import Head from "next/head";
import Article from "../../src/components/article/Article";
import Header from "../../src/components/article/Header";
import api from "../../src/api";

function Post({ post }) {
  useEffect(() => {
    api.article.incCount(post._id);
  }, []);

  return (
    <div className="article">
      <Head>
        <title>文章</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header
          category={post.category}
          tags={post.tags}
          updateTime={post.updateTime}
        />
        <Article aritcle={post} />
      </main>
      <style jsx>{`
        main {
          max-width: 760px;
          margin: auto;
        }
        @media screen and (max-width: 768px) {
          main {
            width: 100%;
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
}

// 此函数在构建时被调用
export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const res: any = await api.article.get();

  if (res.status === 200) {
    const posts = res.result.array;

    // 根据博文列表生成所有需要预渲染的路径
    const paths = posts.map((post) => `/article/${post._id}`);

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  }
}

// 在构建时也会被调用
export async function getStaticProps({ params }) {
  // params 包含此片博文的 `id` 信息。
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const res: any = await api.article.getById(params.id);
  if (res.status === 200) {
    const post = res.result;
    // 通过 props 参数向页面传递博文的数据
    return { props: { post } };
  }
}

export default Post;
