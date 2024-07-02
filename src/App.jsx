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

import fs1 from "./assets/full-stack/fs-1.jpg";
import fs2 from "./assets/full-stack/fs-2.jpg";
import fs3 from "./assets/full-stack/fs-3.jpg"

import ds1 from "./assets/data-science/ds1.webp";
import ds2 from "./assets/data-science/ds2.webp";
import ds3 from "./assets/data-science/ds3.jpg";

import cs1 from './assets/cyber/cs1.webp';
import cs2 from './assets/cyber/cs2.webp';
import cs3 from './assets/cyber/cs3.webp';


import c1 from './assets/career/c1.webp';
import c2 from './assets/career/c2.webp';
import c3 from './assets/career/c3.webp';
import DisplayContent from './Components/DisplayContent'

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
        element:<DisplayContent/>
    }
])

const blogs = [
    {
        title: 'Best Full-Stack Development Project Ideas in 2024',
        img: fs1,
        domain:'fs'
    },
    {
        title: '6 Essential Prerequisites For Learning ReactJS',
        img: fs2,
        domain:'fs'
    },
    {
        title: '30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]',
        img: fs3,
        domain:'fs'
    },
    {
        title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
        img: ds1,
        domain:'ds'
    },
    {
        title: 'Roles and Responsibilities of a Data Scientist',
        img: ds2,
        domain:'ds'
    },
    {
        title: 'How to become a Data Scientist after Mechanical Engineering?',
        img: ds3,
        domain:'ds'
    },
    {
        title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
        img: cs1,
        domain:'cs'
    },
    {
        title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
        img: cs2,
        domain:'cs'
    },
    {
        title: 'What Is Hacking? Types of Hacking & More',
        img: cs3,
        domain:'cs'
    },
    {
        title: 'Career in Animation: Jobs, Salary, Future Scope in India (2024)',
        img: c1,
        domain:'c'
    },
    {
        title: '8 Mistakes To Avoid When You Begin a Data Science Career',
        img: c2,
        domain:'c'
    },
    {
        title: 'Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career',
        img: c3,
        domain:'c'
    }
    
]
const App = () => {

    return (
        <Context.Provider value={blogs}>
            <RouterProvider router={router} />
        </Context.Provider>
    )
}

export default App