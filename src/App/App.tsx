import "./App.scss";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { createTheme, responsiveFontSizes } from "@material-ui/core";

const muiTheme = responsiveFontSizes(createTheme({}), {
  factor: 5,
});

export const App: React.FC = () => {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                Main
              </Route>

              <Route path="/admin-control-panel">admin control panel</Route>

              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};
