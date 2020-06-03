import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

export default function ({ aritcle }) {
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
