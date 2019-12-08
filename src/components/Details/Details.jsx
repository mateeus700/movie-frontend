import React from 'react';
import {
  ContainerDetails,
  SectionMovie,
  Image,
  SectionDetails,
  Label,
  SectionImage
} from './DetailsStyled';

const Details = ({ detail }) => {
  return (
    <ContainerDetails>
      <SectionMovie>
        <SectionImage>
          <Image src={detail.Poster} />
        </SectionImage>
        <SectionDetails>
          <Label>Título: {detail.Title}</Label>
          <Label>Premios: {detail.Awards}</Label>
          <Label>Diretor: {detail.Director}</Label>
          <Label>Atores: {detail.Actors}</Label>
          <Label>Genero: {detail.Genre}</Label>
          <Label>Produção: {detail.Production}</Label>
          <Label>Avaliação: {detail.imdbRating}</Label>
          <Label>Tempo de duração: {detail.Runtime}</Label>
        </SectionDetails>
      </SectionMovie>
    </ContainerDetails>
  );
};

export default Details;
