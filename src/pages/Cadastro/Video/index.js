import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria"> Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
