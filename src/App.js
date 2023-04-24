import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import Checkbox from "./components/checkbox/checkbox.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [checkedBoxValues, setCheckedBoxValues] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      // if (checkedBoxValues) {
        // console.log(checkedBoxValues);
        return monster.email.toLocaleLowerCase().includes(checkedBoxValues);
      // } else {
      //   return true;
      // }
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, checkedBoxValues]);

  const onCheckboxChange = (event) => {
    console.log(event.target.value);
    setCheckedBoxValues(event.target.checked ? event.target.value : "");
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Roloex</h1>
      <Checkbox
        className="monsters-checkbox"
        onChangeHandler={onCheckboxChange}
        values={["biz", "org", "net"]}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
