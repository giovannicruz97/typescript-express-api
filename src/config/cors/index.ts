import * as cors from 'cors';

const applyCors = (environment: string = 'production') => {
  let hosts: string[] | string = [];
  if (environment === 'development') {
    hosts = '*';
  }
  return cors({
    origin: hosts,
  });
};

export default { applyCors };
