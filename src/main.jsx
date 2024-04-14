import React, { Children } from "react";
import ReactDOM from "react-dom/client";
// import { SearchBox } from "./dic_ui/searchBox";
import { LogIN } from "./log_IN";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from "react-router-dom";
import { SearchBox } from "./dic_ui/searchBox";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<LogIN />  
    },
    {
        path: "display",
        element:<SearchBox /> 
    },
])

// const routes = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<LogIN/>} >
//         </Route>
//             <Route path="display" element={<SearchBox/>} ></Route>
//     )
// )
debugger
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>
);
