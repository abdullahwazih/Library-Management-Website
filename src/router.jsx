import { createBrowserRouter } from "react-router";
import Navigation from "./pages/Layout/nav_bar";
import Layout from "./pages/Layout/layout";
import Home_Layout from "./pages/Home/Home_Layout";
import Browse_Layout from "./pages/Browse/Browse_Layout";
import BookDetailPage from "./pages/Home/components/Book_Details";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home_Layout
            },
            {
                path: "browse",
                Component: Browse_Layout
            },
            {
                path: "book/:id",
                Component: BookDetailPage
            }
        ]

    },
]);

export default router;
