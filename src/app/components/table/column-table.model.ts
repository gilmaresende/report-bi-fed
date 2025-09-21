export interface ColumnTable {
  type: 'txt' | 'btn';
  pp?: string;
  title: string;
  alignment?: 'left' | 'center' | 'right';
  attribute?: string;
  nameBtn?: string;
  iconBtn?: string;
  colorBtn?: string;
  actionBtn?: (pa: any) => void | undefined;
}

export interface ParamPage {
  page: number;
  rows: number;
}
