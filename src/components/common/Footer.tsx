export default function Footer() {
  return (
    <footer>
      <div>
        <span>{`@${new Date().getFullYear()} Jyoketsu All Rights Reserved`}</span>
        <span
          onClick={() => window.open("http://www.beian.miit.gov.cn", "_blank")}
        >
          苏ICP备20038833号
        </span>
      </div>
      <style jsx>{`
        footer {
          border-top: 1px solid #ddd;
          height: 60px;
          color: #9e9e9e;
          padding: 0 25px;
        }
        footer > div {
          max-width: 990px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        @media screen and (max-width: 768px) {
          footer > div {
            width: 100%;
            flex-direction: column;
            justify-content: center;
          }
          footer > div > span {
            line-height: 23px;
          }
        }
      `}</style>
    </footer>
  );
}
