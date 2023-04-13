import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Header';
import Content from './Content';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <div className='container'>
        <h2 className='text-center mt-5'>TODO LIST</h2>
        <Header />
        <Content />
      </div>
      <Toaster />
    </>
  );
}

export default App;
