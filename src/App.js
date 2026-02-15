import './App.css';
import { Blockforfilms } from './components/MyFilm/MyFilm';
import Myheader from './components/Myheader/Myheader';
import { Blockforinformation ,Myinfo} from './components/MyInformation/MyInformation';
import { CurrentTime } from './components/TimeCard/TimeCard';


function App() {
  return (
    <div className="App">
      <Myheader/>
      <Blockforinformation/>
      <Blockforfilms/>
      <CurrentTime/>
    </div>
  );
}

export default App;
