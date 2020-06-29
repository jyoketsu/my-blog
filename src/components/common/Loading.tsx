import CircularProgress from "@material-ui/core/CircularProgress";
export default function Loading() {
  return (
    <div className="loading-wrapper">
      <CircularProgress />
      <style jsx>{`
        .loading-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}
