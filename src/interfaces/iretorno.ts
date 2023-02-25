export interface iRetorno {
  registros?: number;
  message?: string;
  status: number;
  data?: string[] | any;
  error?: Error;
}
