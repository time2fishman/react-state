import './App.css';
import { useState } from 'react'
import ClickCounter from './components/ClickCounter';
import Profile from './components/Profile';

function App() {
  // set up some state
  // first agument: a variable for the current state of the data
  // second argument: a function for updating the state
  // argument to useState: the initial state of the variable
  const [clicks, setClicks] = useState(0)
  // console.log(clicks)

  return (
    <div className="App">
      <header>
        <p>Clicks: {clicks}</p>
        <ClickCounter onClick={setClicks} />
        <hr />
      </header>
      <main>
        <Profile name="Adam" age={39} favColor="Green" />
        <Profile name="Stacy" age={40} favColor="Green" />
        <Profile name="Jake" age={5} favColor="Black" />
        <Profile name="Willow" age={2} favColor="White" />
      </main>
    </div>
  );
}

export default App;
