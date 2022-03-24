export interface Logger {
  prefix: string;
  log: (msg: string) => void;
}
