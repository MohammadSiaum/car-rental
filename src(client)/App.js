import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-gradient-to-r from-blue-100 from-15%  to-pink-100 to-90%'>
      <div className="">
        <RouterProvider router={router}>
          
        </RouterProvider>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
