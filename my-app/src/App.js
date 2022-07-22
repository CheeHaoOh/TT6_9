
import './App.css';
import Header from './components/bernard/Header';
import fakebody from './components/bernard/assets/fakebody.png';


function App() {
  return (
    <div className="App">

      <Header/>
      <img src={fakebody} alt="Nature" class="responsive"/>
      <h1>Hello world</h1>
  
          
    </div>




  );
}

export default App;
