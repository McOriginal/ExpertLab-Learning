import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import HomePage from './home/components/HomePage';
import CoursPage from './Cours/CoursPage';
import NewCoursForm from './admin/NewCoursForm';

function App() {

 const router = createBrowserRouter([
  {
    path: '/',
    element: <MainHeader />,
    children: [
       {
    path: '/',
    element: <HomePage />
  },
    {
    path: '/newcours',
    element: <NewCoursForm />
  },
       {
    path: '/cours',
    element: <CoursPage />
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
