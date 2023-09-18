import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './index.css'
import ErrorPage from './Error-page'
import Contact, { loader as contactLoader, action as contactAction } from "./routes/Contact";
import Root, { loader as rootLoader, action as rootAction } from "./routes/Root"
import EditContact, { action as editAction } from "./routes/Edit";
import { action as destroyAction } from './routes/Delete'
import Index from "./routes/index";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,

      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
