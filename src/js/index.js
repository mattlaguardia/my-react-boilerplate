import React                                           from "react";
import ReactDOM                                        from "react-dom";
import { Router, Route, IndexRoute, browserHistory }   from "react-router";
// import cookie                                          from "react-cookie";
import $                                               from "jquery";
// import HttpProvider                                    from "./httpProvider";

import Layout                                          from "./pages/Layout";
import Landing                                         from "./pages/Landing";
import Settings                                        from "./pages/Settings";
import ServerError                                     from "./pages/ServerError";
import NotFound                                        from "./pages/NotFound";

import "../css/main.css";

const App = document.getElementById('app');

// let loggedIn = false;
// let token = undefined;
//
// const updateLogin = (status) => loggedIn = status;
//
//
// const setToken = () => {
//   token = cookie.load("token");
// };
//
// (() => {
//
//   let token = cookie.load("token");
//   setToken();
//   if (token !== undefined) {
//
//     let tokenHeader = `Token ${token}`;
//
//     $.get({
//       url: "https://api.legionanalytics.com/me",
//       dataType: "JSON",
//       crossDomain: true,
//       headers: {"Authorization": tokenHeader },
//       success: () => {
//         updateLogin(true);
//       },
//       error: () => {
//         cookie.remove("token", { path: "/" });
//         updateLogin(false);
//       }
//     })
//
//   }
// })();
//
// const requireAuth = (nextState, replace, cb) => {
//   setToken();
//   setTimeout(()=> {
//     if (!cookie.load("token")) {
//       replace({
//         pathname: '/'
//       })
//     }
//     return cb();
//   }
//   , 700);
// };
//
// const guestsOnly = (nextState, replace, cb) => {
//   setToken();
//   setTimeout(()=> {
//     if (cookie.load("token")) {
//       replace({
//         pathname: '/search'
//       })
//     }
//     return cb();
//   }
//   , 700);
// };

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={Landing} />

      <Route path="settings" name="settings" component={Settings} />
      <Route path="500" name="serverError" component={ServerError} />
      <Route path="*" name="notFound" component={NotFound} />
    </Route>
  </Router>, App
);


// <HttpProvider token={token}>
// </HttpProvider>
