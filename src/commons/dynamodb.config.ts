import * as AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const dynamoDBClient = (): DocumentClient => {
  return new AWS.DynamoDB.DocumentClient({
    region: "us-east-1",
    accessKeyId: "AKIASEHQNZNFFRLJAF2U",
    secretAccessKey:"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"
  });
};

export default dynamoDBClient