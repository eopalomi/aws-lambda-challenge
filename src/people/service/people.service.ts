import { DocumentClient } from "aws-sdk/clients/dynamodb";
import People from "src/people/model/people.model";
import { v4 as uuidv4 } from 'uuid';

export default class PeopleService {
    constructor(private dynamoDBClient: DocumentClient) { }

    async getPeople<T>(idPeople: string): Promise<T | null> {
        const params: DocumentClient.GetItemInput = {
            TableName: 'people',
            Key: {
                idPeople: idPeople
            }
        }

        const people = await this.dynamoDBClient.get(params).promise();

        if (people.Item) {
            return people.Item as T;
        } else {
            return null
        }
    }

    async savePeople(people: People): Promise<string> {
        const idPeople = uuidv4();

        await this.dynamoDBClient.put({
            TableName: 'people',
            Item: { idPeople, ...people }
        }).promise();

        return idPeople;
    }
};
