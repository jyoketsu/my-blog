import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
export default function Tag({ text, color }) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.root}
      variant="body2"
      style={{
        background: color,
        color: "#FFF",
      }}
      color={color}
    >
      <span>{text}</span>
    </Typography>
  );
}
