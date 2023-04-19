import Main from "../layout/Main";
import Home from "../paages/home/Home";
import {createBrowserRouter} from 'react-router-dom'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
])

export default router;