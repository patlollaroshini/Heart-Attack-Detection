
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Login from './Login/Login';
import Register from './Register/Register';
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom';
import Protected from './Protected/Protected';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Results from './Results/Results';
import RootLayout from './RootLayout';
function App() {
  let router=createBrowserRouter([{
    path:"/",
    element:<RootLayout/>,
    children:[
        {
          path: "/",
          element: <Navigate to={"/Register"}/>
        },
        {
          path: "/Home",
          element: <Home/>
        },
        {
          path: "/Login",
          element: <Login />
        },{
          path: "/About",
          element: <About />
        },
        {
          path: "/Register",
          element: <Register />
        },
        {
          path: "/protected",
          element: (
            <ProtectedRoute>
              <Protected />
             </ProtectedRoute>
          )
        },
        {
          path: "/results",
          element: (
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          )
        }
  ]}])
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
