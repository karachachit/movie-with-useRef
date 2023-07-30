import MovieList from "./MovieList";

const MovieItemList = ({ movieList, setMovieList }) => {
  return (
    <div>
      {movieList.map((item) => (
        <MovieList
          title={item.name}
          img={item.image}
          movies={movieList}
          movie={item}
          rating={item.rating}
          key={item.id}
          setMovieList={setMovieList}
        />
      ))}
    </div>
  );
};

export default MovieItemList;
