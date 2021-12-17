import {
  makeStyles,
  Tab,
  Tabs,
  Theme,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { routerPaths } from "./routerPaths";
import { useHistory } from "react-router-dom";

const useTabStyles = makeStyles(() => ({
  tabImg: {
    width: "45px",
  },
}));

const TabItem: React.FC<{
  routerPath: { iconPath: string; name: string };
}> = ({ routerPath }) => {
  const classes = useTabStyles();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Tab
      label={isXs ? "" : routerPath.name}
      icon={<img src={routerPath.iconPath} className={classes.tabImg} />}
    />
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: string
  ) => {
    history.push(newValue);
    setValue(Number(newValue));
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
        <TabItem routerPath={routerPaths.intermittentFasting} />
        <TabItem routerPath={routerPaths.ketogenicDiet} />
        <TabItem routerPath={routerPaths.breadIsPoison} />
        <TabItem routerPath={routerPaths.sugarIsPoison} />
        <TabItem routerPath={routerPaths.oilsThatArePoison} />
        <TabItem routerPath={routerPaths.acne} />
        <TabItem routerPath={routerPaths.goodYoutubeChannels} />
        <TabItem routerPath={routerPaths.guruPeople} />
      </Tabs>

      {children}
    </div>
  );
};
