import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      height: "60px",
      padding: "0 25px",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div>
        <span>{`@${new Date().getFullYear()} Jyoketsu All Rights Reserved`}</span>
        <span
          onClick={() => window.open("http://www.beian.miit.gov.cn", "_blank")}
        >
          苏ICP备20038833号
        </span>
      </div>
      <style jsx>{`
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
