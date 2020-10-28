import app from './src/app';
import * as http from 'http';

const port: string = process.env.PORT || '5566';

const server: http.Server = http.createServer(app);

const listen = (): void => {
  server.listen(port);
  server.on('listening', () => console.log(`🚀 Listenning at ${port}`));
  server.on('error', (error: Error) =>
    console.error(`❌  [APP] Error: ${error}`)
  );
};

(async () => {
  try {
    // Start app
    listen();
  } catch (error) {
    console.error(`❌ ${error}`);
    process.exit(0);
  }
})();
