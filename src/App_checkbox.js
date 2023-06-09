import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import Checkbox from "./components/checkbox/checkbox.component";

import "./App.css";

const App = () => {
  const GENDERS = ["male", "female", "non-binary"];
  const RACES = ["black", "white", "asian"];
  const STATUSES = ["student", "faculty", "staff"];
  const [clicked, setClicked] = useState(false);
  const [persons, setPersons] = useState([]);
  var [filteredPersons, setFilteredPersons] = useState(persons);
  const [genderValues, setGenderValues] = useState([]);
  const [raceValues, setRaceValues] = useState([]);
  const [statusValues, setStatusValues] = useState([]);

  useEffect(() => {
    fetch("/name.json")
      .then((response) => response.json())
      .then((users) => setPersons(users));
  }, []);

  useEffect(() => {
    setFilteredPersons(persons);
  }, [persons]);

  useEffect(() => {
    if (clicked) {
      filteredPersons = persons.filter((person) => {
        return (
          !(genderValues.includes(person.gender)) &&
          !(raceValues.includes(person.race)) &&
          !(statusValues.includes(person.status))
        );
      });
      setFilteredPersons(filteredPersons);
    }
  }, [persons, genderValues, raceValues, statusValues]);

  const onGenderCheckboxChange = (event) => {
    setClicked(true);
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
    setClicked(true);
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
    setClicked(true);
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
        className="persons-checkbox"
        onChangeHandler={onGenderCheckboxChange}
        values={GENDERS}
      />
      <Checkbox
        id="race"
        className="persons-checkbox"
        onChangeHandler={onRaceCheckboxChange}
        values={RACES}
      />
      <Checkbox
        id="status"
        className="persons-checkbox"
        onChangeHandler={onStatusCheckboxChange}
        values={STATUSES}
      />
      <CardList persons={filteredPersons} />
    </div>
  );
};

export default App;
