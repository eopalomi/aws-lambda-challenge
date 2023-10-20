import type { AWS } from '@serverless/typescript';
import {createPeople, findByIdPeople, findByIdPlanet} from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'sls-reto-tecnico',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-dynamodb-local'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    timeout: 20,
    profile: 'deploy-aws-dev',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      STAGE: '${self:custom.stage}'
    },
  },
  // import the function via paths
  functions: { 
    findByIdPlanet,
    findByIdPeople,
    createPeople,
  },
  package: { individually: true },
  custom: {
    stage: '${opt:stage, "local"}',
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    }
  }
};

module.exports = serverlessConfiguration;
