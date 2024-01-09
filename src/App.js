import './css/App.css';
import LeftPane from './components/left-pane/left-pane';
import Summary from './components/summary/summary';
function App() {
  return (
    <div className="App">
      <div className="flex-left-pane"> <LeftPane></LeftPane> </div>
      <div className="flex-summary"><Summary></Summary></div>
      
    </div>
  );
}

export default App;
