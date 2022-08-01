import './App.css';

//components importation
import SideBar from './compnents/sidebar/sidebar';
import Steps from './compnents/steps/steps';
import Path from './compnents/paths/path';

function App() {
  return (
    <div className='section'>
        <SideBar />
        <Steps />
        <Path />
    </div>
  );
}

export default App;
