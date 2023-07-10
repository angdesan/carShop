import './App.css';
import AppRoute from './AppRoute';
import { AuthProvider } from './contexts/AuthTaskContext';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <AppRoute/>
      </AuthProvider>
    </div>
  );
}

export default App;

{/* <OrdenTaskProvider>
  <Routes>
    <Route path='/' element={<Dashboard/>} />
    <Route path='/generarOrden'  element={<AgregarOrden/>} />
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
</OrdenTaskProvider> */}
{/* <Routes>
    <Route path='/' element={<LoginPage/>} />
    <Route path='/signup' element={<SignupPage/>} />
  </Routes> */}