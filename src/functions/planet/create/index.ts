//import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export const create = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'planet',
        /*request: {
          schemas: {
            'application/json': schema,
          },
        },*/
      },
    },
  ],
};
