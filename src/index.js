import React from "react";
import { render } from "react-dom";
import './styles/appStyles.scss';
import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>React App Running!</h1>
    </div>
  );
};

render(<App />, document.getElementById("root"));
