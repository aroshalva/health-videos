import {
  Box,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { allData } from "../../allData";
import { useHistory } from "react-router-dom";

const useTabStyles = makeStyles<Theme, { isSelected: boolean }>((theme) => ({
  tab: ({ isSelected }) => ({
    background: isSelected ? "#9ee9d869" : "initial",
    fontWeight: isSelected ? "bold" : "initial",
  }),
  tabImg: {
    width: "45px",
    [theme.breakpoints.only("xs")]: {
      width: "35px",
    },
  },
}));

const TabItem: React.FC<{
  routerPath: { path: string; iconPath: string; name: string };
}> = ({ routerPath, ...restProps }) => {
  const history = useHistory();
  const classes = useTabStyles({
    isSelected: routerPath.path === history.location.pathname,
  });
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Tab
      className={classes.tab}
      style={{ minWidth: "unset" }}
      label={isXs ? "" : routerPath.name}
      icon={<img src={routerPath.iconPath} className={classes.tabImg} />}
      {...restProps}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "oldlace",
    flexGrow: 1,
    display: "flex",
    height: "100%",
  },
  tabs: {
    backgroundColor: "#ffebc8",
    borderRight: `1px solid #00000040`,
    minWidth: "50px",
  },
  children: {
    padding: "16px",
    [theme.breakpoints.only("xs")]: {
      padding: "16px 5px",
    },
  },
}));

export const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(
    Object.values(allData).findIndex(
      ({ path }) => path === history.location.pathname
    ) || 0
  );

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    history.push(
      Object.values(allData).find((unuse, index) => index === newValue)?.path ||
        "/"
    );
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="on"
        className={classes.tabs}
        onChange={handleChange}
        value={value}
      >
        {Object.values(allData).map((routePath) => (
          <TabItem key={routePath.path} routerPath={routePath} />
        ))}
      </Tabs>

      <Box
        className={classes.children}
        style={{ width: "100%", overflow: "auto" }}
      >
        {children}
      </Box>
    </div>
  );
};
