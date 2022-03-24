import { Logger } from './logger';

export const LegacyLogger: Logger = {
  prefix: 'legacy root',
  log: (msg: string) => {
    console.log('legacy log', msg);
  },
};
