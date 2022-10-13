// crear proyecto React = npx create-react-app "NOMBREPROYECTO"

import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  ); 
}

export default App;
