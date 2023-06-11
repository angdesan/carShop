import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Form } from './components/forms/FormCard';
import ComponentTab from './components/forms/tabs/ComponentTab';
import { ContainerWizard } from './components/wizard/ContainerWizard';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="p-4 sm:ml-64">
        <div>
          {/* <ComponentTab/> */}
          <ContainerWizard/>
        </div>
      </div>
    </div>
  );
}

export default App;
