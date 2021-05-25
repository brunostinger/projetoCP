import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from './components/Header'
import Select from './components/Select'
import Result from './components/Result'
function App() {
  return (
    <>
      <header>
      </header>
      <Header nome="Bruno"/>
      <Select/>
      <Result>
        <span>Children</span>
      </Result>
    </>
  );
}

export default App;
