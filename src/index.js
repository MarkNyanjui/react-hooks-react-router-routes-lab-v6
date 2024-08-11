import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import React from "react";

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
