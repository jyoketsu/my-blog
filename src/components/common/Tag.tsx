import { MouseEvent } from "react";
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
    },
  })
);

interface Props {
  id: string;
  text: string;
  color: string;
}

export default function Tag({ id, text, color }: Props) {
  const classes = useStyles();

  function handleClick(e: MouseEvent) {
    e.stopPropagation();
    console.log("---点击标签---", id);
  }

  return (
    <span
      className={classes.root}
      style={{
        background: color,
        color: "#FFF",
      }}
      onClick={(e) => handleClick(e)}
    >
      {text}
    </span>
  );
}