import "./App.scss";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
} from "@material-ui/core";
import { MainLayout } from "./MainLayout/MainLayout";
import { routerPaths } from "./MainLayout/routerPaths";
import { YoutubeVideoList } from "./YoutubeVideoList/YoutubeVideoList";

const muiTheme = responsiveFontSizes(createTheme({}), {
  factor: 5,
});

export const App: React.FC = () => {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />

          <BrowserRouter>
            <MainLayout>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <Redirect to={routerPaths.intermittentFasting.path} />
                  )}
                />

                <Route path={routerPaths.intermittentFasting.path}>
                  <YoutubeVideoList />
                </Route>

                <Route path={routerPaths.ketogenicDiet.path}>
                  {routerPaths.ketogenicDiet.path}
                </Route>

                <Route path={routerPaths.breadIsPoison.path}>
                  {routerPaths.breadIsPoison.path}
                </Route>

                <Route path={routerPaths.sugarIsPoison.path}>
                  {routerPaths.sugarIsPoison.path}
                </Route>

                <Route path={routerPaths.oilsThatArePoison.path}>
                  {routerPaths.oilsThatArePoison.path}
                </Route>

                <Route path={routerPaths.acne.path}>
                  {routerPaths.acne.path}
                </Route>

                <Route path={routerPaths.goodYoutubeChannels.path}>
                  {routerPaths.goodYoutubeChannels.path}
                </Route>

                <Route path={routerPaths.guruPeople.path}>
                  {routerPaths.guruPeople.path}
                </Route>

                <Route path="/admin-control-panel">admin control panel</Route>

                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </MainLayout>
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};
