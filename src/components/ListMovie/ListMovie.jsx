import React, { useState } from 'react';
import {
  ContainerListMovie,
  SectionMovie,
  InputText,
  ButtonDefault,
  Image,
  Title,
  SectionTitle,
  Select
} from './ListMovieStyled';
import Loading from '../Loading';

const ListMovie = ({ search, movies, history, isLoading }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [order, setOrder] = useState('4');

  const sort = (x, y) => {
    if (order === '1') {
      if (x.Title < y.Title) return -1;
      if (x.Title > y.Title) return 1;
      return 0;
    } else if (order === '2') {
      if (x.Title > y.Title) return -1;
      if (x.Title < y.Title) return 1;
      return 0;
    } else if (order === '3') {
      if (x.imdbRating < y.imdbRating) return -1;
      if (x.imdbRating > y.imdbRating) return 1;
      return 0;
    } else {
      if (x.imdbRating > y.imdbRating) return -1;
      if (x.imdbRating < y.imdbRating) return 1;
      return 0;
    }
  };

  const getMovies = () => {
    if (title !== '') {
      search({ title, year });
    } else {
      alert('Campo titulo é obrigatório');
    }
  };

  const renderMovies = () => {
    if (!isLoading) {
      return movies.sort(sort).map(movie => (
        <SectionMovie onClick={() => history.push(`/detalhes/${movie.imdbID}`)}>
          <div>
            <Image src={movie.Poster} />
          </div>
          <SectionTitle>
            <Title>
              {movie.Title} - {movie.Year}
            </Title>
            <Title>Avaliação - {movie.imdbRating}</Title>
          </SectionTitle>
        </SectionMovie>
      ));
    }
    return <Loading />;
  };

  return (
    <ContainerListMovie>
      <InputText
        placeholder="Informe o titulo do filme"
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <InputText
        placeholder="Informe o ano do filme"
        type="number"
        onChange={e => setYear(e.target.value)}
        value={year}
      />
      <Select onChange={e => setOrder(e.target.value)} value={order}>
        <option value="1">Ordem Alfabetica - Crescente </option>
        <option value="2">Ordem Alfabetica - Decrescente</option>
        <option value="3">Nota Media - Crescente</option>
        <option value="4">Nota Media - Decrescente</option>
      </Select>
      <ButtonDefault onClick={getMovies}>Pesquisar</ButtonDefault>
      {renderMovies()}
    </ContainerListMovie>
  );
};

export default ListMovie;
