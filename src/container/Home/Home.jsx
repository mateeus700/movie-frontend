import React from 'react';
import Header from 'components/Header';
import ListMovie from 'components/ListMovie';
import { Creators as movieActions } from 'store/ducks/movie';
import { useDispatch, useSelector } from 'react-redux';

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector(state => state.movie);

  const search = params => {
    dispatch(movieActions.movieListRequest(params));
  };

  return (
    <>
      <Header />
      <ListMovie search={search} movies={movies} history={history} isLoading={isLoading} />
    </>
  );
};

export default Home;
