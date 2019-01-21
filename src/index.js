import React from "react";
import { render } from "react-dom";
import './styles/appStyles.scss';
import Button from '@material-ui/core/Button';

const App = () => {
  return (
    <div>
      <h1>React App Running!</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
