import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import Checkbox from "./components/checkbox/checkbox.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [genderValues, setGenderValues] = useState([]);
  const [raceValues, setRaceValues] = useState([]);
  const [statusValues, setStatusValues] = useState([]);

  useEffect(() => {
    fetch("/name.json")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      // if (checkedBoxValues) {
      // console.log(checkedBoxValues);
      return (
        monster.gender.toLocaleLowerCase().includes(genderValues)&&
        monster.race.toLocaleLowerCase().includes(raceValues)&&
        monster.status.toLocaleLowerCase().includes(statusValues)
      )
      // } else {
      //   return true;
      // }
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, genderValues, raceValues, statusValues]);

  const onGenderCheckboxChange = (event) => {
    setGenderValues(event.target.checked ? event.target.value : "");
  };
  const onRaceCheckboxChange = (event) => {
    setRaceValues(event.target.checked ? event.target.value : "");
  };
  const onStatusCheckboxChange = (event) => {
    setStatusValues(event.target.checked ? event.target.value : "");
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Roloex</h1>
      <Checkbox
        id="gender"
        className="monsters-checkbox"
        onChangeHandler={onGenderCheckboxChange}
        values={["male", "female", "non-binary"]}
      />
      <Checkbox
        id="race"
        className="monsters-checkbox"
        onChangeHandler={onRaceCheckboxChange}
        values={["black", "white", "asian"]}
      />
      <Checkbox
        id="status"
        className="monsters-checkbox"
        onChangeHandler={onStatusCheckboxChange}
        values={["student", "faculty", "staff"]}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
