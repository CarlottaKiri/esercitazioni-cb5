import React from "react";
import MainLayout from "./layouts/MainLayout";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Users from "./routes/users";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ErrorPage from "./error-page";
import User from "./routes/user";
import Posts from "./routes/posts";
import Post from "./routes/post";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/users",
//     element: <Users />,
//   },
//   {
//     path: "/users/:user",
//     element: <User />,
//   },
//   {
//     path: "/posts",
//     element: <h1>ciao</h1>,
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:user" element={<User />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:post" element={<Post />} />
        </Route>
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
