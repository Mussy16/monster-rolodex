import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    console.log("ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const FiltredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className ="App">
        <h1 className="app-title">
          Seach Monsters
        </h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          className="monsters-search-box"
          placeholder="Search-monsters"
        />
        <CardList monsters={FiltredMonsters} />
      </div>
    );
  }
}
export default App;
