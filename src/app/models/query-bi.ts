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
    descricao: 'teste 1',
    chave: 'teste',
    principal: true,
    queryStr: 'select',
    querysFilhas: [newQueryBITmp(), newQueryBITmp()],
  };
}

function newQueryBITmp(): QueryBI {
  return {
    descricao: 'teste 2',
    chave: 'teste',
    principal: false,
    queryStr: 'select',
    querysFilhas: [newQueryBITmp2()],
  };
}

function newQueryBITmp2(): QueryBI {
  return {
    descricao: 'teste 3',
    chave: 'teste',
    principal: false,
    queryStr: 'select',
    querysFilhas: [],
  };
}
