import { MouseEvent } from "react";
import Typography from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    info: {
      display: "inline-block",
      height: "auto",
      marginRight: "8px",
      fontSize: "14px",
      lineHeight: "20px",
      whiteSpace: "nowrap",
      borderRadius: "2px",
      cursor: "default",
      opacity: 1,
    },
  })
);

interface ClickFunc {
  (e: MouseEvent): void;
}

interface Props {
  info: string;
  onClick?: ClickFunc;
}
export default function Info({ info, onClick }: Props) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.info}
      color="textSecondary"
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {info}
    </Typography>
  );
}
