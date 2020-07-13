import { MouseEvent } from "react";
import { useRouter } from "next/router";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-block",
      height: "auto",
      marginRight: "8px",
      padding: "0 7px",
      fontSize: "12px",
      lineHeight: "20px",
      whiteSpace: "nowrap",
      borderRadius: "2px",
      cursor: "default",
      opacity: 1,
      userSelect: "none",
      "&:hover": { cursor: "pointer" },
    },
  })
);

interface Props {
  id: string;
  text: string;
  color: string;
  style?: object;
  count?: number;
}

export default function Tag({ id, text, color, style, count }: Props) {
  const classes = useStyles();
  const router = useRouter();

  function handleClick(e: MouseEvent) {
    e.stopPropagation();
    router.push({
      pathname: "/articles",
      query: { tag: id },
    });
  }

  return (
    <span
      className={classes.root}
      style={{
        background: color,
        color: "#FFF",
        ...style,
      }}
      onClick={(e) => handleClick(e)}
    >
      {count ? `${text}（${count}）` : text}
    </span>
  );
}
