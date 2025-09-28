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
    descricao: '',
    chave: '',
    principal: false,
    queryStr: '',
    querysFilhas: [],
  };
}
