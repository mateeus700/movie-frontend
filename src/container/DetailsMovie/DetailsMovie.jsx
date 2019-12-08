import React, { useEffect } from 'react';
import { Creators as movieActions } from 'store/ducks/movie';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/Header';
import Details from 'components/Details';

const DetailsMovie = () => {
  const dispatch = useDispatch();
  const { pathname } = useSelector(state => state.router.location);
  const { detail } = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(movieActions.movieDetailRequest({ id: pathname.split('/')[2] }));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Details detail={detail} />
    </>
  );
};

export default DetailsMovie;
