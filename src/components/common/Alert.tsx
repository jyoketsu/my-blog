import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface Props {
  alert: string;
  setalert: Function;
}

export default function MyAlert({ alert, setalert }: Props) {
  return (
    <Snackbar
      open={alert ? true : false}
      autoHideDuration={6000}
      onClose={() => setalert("")}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={() => setalert("")} severity="warning">
        {alert}
      </Alert>
    </Snackbar>
  );
}
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
