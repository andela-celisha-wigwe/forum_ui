'use strict';
const React = require("react");
// import path from 'path'
const react_router_1 = require("react-router");
const App_1 = require("./App");
const HomePage_1 = require("./components/HomePage");
const SubforumPage_1 = require("./components/SubforumPage");
const PostPage_1 = require("./components/PostPage");
const UserLoginPage_1 = require("./components/UserLoginPage");
const UserRegistrationPage_1 = require("./components/UserRegistrationPage");
Object.defineProperty(exports, "__esModule", { value: true });
// import NoMatch from './components/NoMatch'
exports.default = (React.createElement(react_router_1.Router, { history: react_router_1.browserHistory },
    React.createElement(react_router_1.Route, { path: "/", component: App_1.default },
        React.createElement(react_router_1.IndexRoute, { component: HomePage_1.default }),
        React.createElement(react_router_1.Route, { path: "/", component: HomePage_1.default }),
        React.createElement(react_router_1.Route, { path: "subforums/:id", component: SubforumPage_1.default }),
        React.createElement(react_router_1.Route, { path: "posts/:id", component: PostPage_1.default }),
        React.createElement(react_router_1.Route, { path: "/login", component: UserLoginPage_1.default }),
        React.createElement(react_router_1.Route, { path: "/register", component: UserRegistrationPage_1.default }))));
//# sourceMappingURL=routes.js.map