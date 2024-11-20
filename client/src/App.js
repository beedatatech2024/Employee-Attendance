import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmpDashboard from './Components/EmpDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={EmpDashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
