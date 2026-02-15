import './App.css';
import { Blockforfilms } from './components/MyFilm/MyFilm';
import Myheader from './components/Myheader/Myheader';
import { Blockforinformation ,Myinfo} from './components/MyInformation/MyInformation';
import { BlockOfMyPet } from './components/MyPet/MyPet';
import { CurrentTime } from './components/TimeCard/TimeCard';


function App() {
  return (
    <div className="App">
      <Myheader/>
      <Blockforinformation/>
      <Blockforfilms/>
      <CurrentTime/>
      <BlockOfMyPet></BlockOfMyPet>
    </div>
  );
}

export default App;
