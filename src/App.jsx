import "./App.css";
import Header from "./companents/Header";
// import MainContent from "./companents/MainContent";
import MovieItemList from "../src/companents/MovieItem";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);

  const pushData = (data) => {
    const addMovieList = [...movieList];
    addMovieList.push(data);
    setMovieList(addMovieList);
  };
  return (
    <div className="App">
      <Header pushData={pushData} />
      <MovieItemList movieList={movieList} setMovieList={setMovieList} />
    </div>
  );
}

export default App;
