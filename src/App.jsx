import React from 'react'
import Template from './Components/Template'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import All from './Components/All'
import FullStackDevelopment from './Components/FullStackDevelopment'
import DataScience from './Components/DataScience'
import CyberSecurity from './Components/CyberSecurity'
import Career from './Components/Career'
import ErrorPage from './Components/ErrorPage'
import Context from './Components/Context';
import DisplayContent from './Components/DisplayContent'
import blogs from './BlogsData'

//create a router
const router = createBrowserRouter([
    {
        element: <Template />,
        children: [
            {
                path: '/',
                element: <All />
            },
            {
                path: '/fullStackDevelopment',
                element: <FullStackDevelopment />
            },
            {
                path: '/DataScience',
                element: <DataScience />
            },
            {
                path: '/CyberSecurity',
                element: <CyberSecurity />
            },
            {
                path: '/Career',
                element: <Career />
            },
            {
                path: '/*',
                element: <ErrorPage />
            }

        ]
    },
    {
        path: '/blog',
        element: <DisplayContent />
    }
])

const App = () => {

    return (
        //provide the blogs context to all components within the Context.Provider
        <Context.Provider value={blogs}>
            <RouterProvider router={router} />
        </Context.Provider>
    )
}

export default App