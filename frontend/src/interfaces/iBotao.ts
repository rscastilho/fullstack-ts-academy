export interface iBotao {
  size: 'sm' | 'md' | 'lg';
  color: 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' | 'linkedin' | 'facebook' | 'messenger' | 'whatsapp' | 'twitter' | 'telegram';
  textoBotao: string;
  funcao?: {};
  // funcao?: () => void | Promise<void>;
  alinhamento?: 'center' | 'left' | 'end';
  id?: number;
}
