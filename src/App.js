import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Home from './home/Home';

function App() {

 const router = createBrowserRouter([
  {
    path: '/',
    element: <MainHeader />,
    children: [
       {
    path: '/',
    element: <Home />
  },
      
    ]
  },
 
 ]
 )


  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
