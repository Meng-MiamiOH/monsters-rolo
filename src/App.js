import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import Checkbox from "./components/checkbox/checkbox.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  var [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [genderValues, setGenderValues] = useState([]);
  const [raceValues, setRaceValues] = useState([]);
  const [statusValues, setStatusValues] = useState([]);

  useEffect(() => {
    fetch("/name.json")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    filteredMonsters = monsters.filter((monster) => {
      return (
        genderValues.includes(monster.gender) &&
        raceValues.includes(monster.race) &&
        statusValues.includes(monster.status)
      );
    });
    setFilteredMonsters(filteredMonsters);
  }, [monsters, genderValues, raceValues, statusValues]);

  const onGenderCheckboxChange = (event) => {
    let newGenderValues = [];
    if (!event.target.checked) {
      newGenderValues = genderValues.filter(
        (item) => item !== event.target.value
      );
    } else {
      newGenderValues = [
        ...genderValues,
        event.target.checked ? event.target.value : "",
      ];
    }
    setGenderValues(newGenderValues);
  };

  const onRaceCheckboxChange = (event) => {
    let newRaceValues = [];
    if (!event.target.checked) {
      newRaceValues = raceValues.filter((item) => item !== event.target.value);
    } else {
      newRaceValues = [
        ...raceValues,
        event.target.checked ? event.target.value : "",
      ];
    }
    setRaceValues(newRaceValues);
  };
  const onStatusCheckboxChange = (event) => {
    let newStatusValues = [];
    if (!event.target.checked) {
      newStatusValues = statusValues.filter(
        (item) => item !== event.target.value
      );
    } else {
      newStatusValues = [
        ...statusValues,
        event.target.checked ? event.target.value : "",
      ];
    }
    setStatusValues(newStatusValues);
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
