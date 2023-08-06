export interface iCampoTexto {
  textoPadrao: string;
  tamanho: 'xs' | 'sm' | 'ms' | 'lg';
  formatacao: 'outline' | 'filled' | 'flushed' | 'unstyled';
  tipo?: 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'image' | 'number' | 'password' | 'month';
  textoLabel: string
}
