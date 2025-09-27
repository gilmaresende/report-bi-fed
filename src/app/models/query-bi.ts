export interface QueryBI {
  id?: number;
  descricao: string;
  chave: string;
  principal: boolean;
  queryStr: string;
  conteudoJasper?: string;
  querysFilhas: Array<QueryBI>;
}

export function newQueryBI(): QueryBI {
  return {
    descricao: 'teste',
    chave: 'teste',
    principal: false,
    queryStr: 'select',
    querysFilhas: [newQueryBITmp(), newQueryBITmp()],
  };
}

function newQueryBITmp(): QueryBI {
  return {
    descricao: 'teste',
    chave: 'teste',
    principal: false,
    queryStr: 'select',
    querysFilhas: [],
  };
}
