import './App.css';
import Navbar from './components/navbar/Navbar';
import { ContainerWizard } from './components/wizard/ContainerWizard';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="p-4 sm:ml-64">
        <div>
          <ContainerWizard/>
        </div>
      </div>
    </div>
  );
}

export default App;
