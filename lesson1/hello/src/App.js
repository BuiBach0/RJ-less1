import logo from './logo.svg';
import './App.css';
import PersonalId from './components/PersonalId.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <img src ="https://facebookninja.vn/wp-content/uploads/2023/06/anh-dai-dien-mac-dinh-zalo.jpg" alt= "logo"/>
        <PersonalId/> */}
        <PersonalId name="bach" age ="20" address ="HaDongCapital" img ="https://facebookninja.vn/wp-content/uploads/2023/06/anh-dai-dien-mac-dinh-zalo.jpg"/>
      </header>
    </div>
  );
}

export default App;
