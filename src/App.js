import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Form } from './components/forms/FormCard';
import ComponentTab from './components/forms/tabs/ComponentTab';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="p-4 sm:ml-64">
        <div>
          <ComponentTab/>
        </div>
      </div>
    </div>
  );
}

export default App;
