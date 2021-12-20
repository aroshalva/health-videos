import {
  Box,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#428d7c",
    background: "#ffebc8",
    fontSize: "2rem",
    padding: "5px 15px",
    marginBottom: "15px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
      background: "#ffa20082",
    },
  },
  title: {
    [theme.breakpoints.only("xs")]: {
      marginBottom: "5px",
    },
  },
}));

export const SectionTitle: React.FC<{ contentTitle?: string }> = ({
  children,
  contentTitle,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        {children}
      </Typography>
      {contentTitle && (
        <>
          {!isXs && <Box mx={1}>&#8226;</Box>}
          <Typography variant="h5">{contentTitle}</Typography>
        </>
      )}
    </div>
  );
};
