export interface ValorDefinidoFixoBI {
  id?: number;
  descricao: string;
  valor: string;
}

export function newValorDefinidoFixoBI(): ValorDefinidoFixoBI {
  return {
    descricao: '',
    valor: '',
  };
}
