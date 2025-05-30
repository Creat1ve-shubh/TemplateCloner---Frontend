
import TemplatesList from './pages/TemplatesList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className=" min-h-screen bg-[#e4e4e7] overflow-hidden">
        <h1 className="text-2xl font-bold text-center my-4">My Direct-Mail Templates</h1>
        <TemplatesList /></div>
      <ToastContainer position="top-right" autoClose={3000} />

    </>
  );
}

export default App;