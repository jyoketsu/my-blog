import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

export default function ({ aritcle }) {
  useEffect(() => {
    // markdown生成的标签都是默认当前页打开的
    // 提取所有a标签，改为新标签页打开
    let links = document.links;
    for (let index = 0; index < links.length; index++) {
      if (links[index].hostname !== window.location.hostname) {
        links[index].target = "_blank";
      }
    }
  }, []);

  return (
    <div className="aritcle-preview">
      <ReactMarkdown
        source={aritcle.content}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
      />
      <style jsx>{`
        .aritcle-preview {
          width: 100%;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
