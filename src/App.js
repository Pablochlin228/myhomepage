import './App.css';
import Myheader from './components/Myheader/Myheader';
import { Blockforinformation ,Myinfo} from './components/MyInformation/MyInformation';


function App() {
  return (
    <div className="App">
      <Myheader/>
      <Blockforinformation/>
    </div>
  );
}

export default App;
