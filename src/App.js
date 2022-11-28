import React from "react";
import Button from "@material-ui/core/Button";

import CustomButton from "./CustomButton";
import TextInput from "./TextInput";
import DisablableButton from "./DisablableButton";
import NewPeople from "./NewPeople";
import NewPeopleEx6 from "./NewPeopleEx6";

import "./styles.css";

const App = (props) => {
  return (
    <div className="App">
      <h1 class="myTitle">Exercice 1</h1>
      <CustomButton
        text="Click-me !"
        action={function (e) {
          alert("has been clicked");
        }}
      />

      <h1 class="myTitle">Exercice 2</h1>
      <TextInput />

      <h1 class="myTitle">Exercice 3</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => console.log("has been clicked")}
      >
        Secondary
      </Button>

      <h1 class="myTitle">Exercice 4</h1>
      <DisablableButton text="hello 1" />
      <DisablableButton text="hello 2" />
      <DisablableButton text="hello 3" />

      <h1 class="myTitle">Exercice 5</h1>
      <NewPeople />

      <h1 class="myTitle">Exercice 6</h1>
      <NewPeopleEx6 />
    </div>
  );
};

export default App;
