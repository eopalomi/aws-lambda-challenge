import { DocumentClient } from "aws-sdk/clients/dynamodb";
import People from "src/people/model/people.model";
import { v4 as uuidv4 } from 'uuid';

export default class PeopleService {
    constructor(private dynamoDBClient: DocumentClient){}

    async getPeople <T>(idPeople: string): Promise<T>{
        console.log("idPeople", idPeople)
        const params:DocumentClient.GetItemInput = {
            TableName: 'people',
            Key: {
                idPeople: idPeople
            }
        }
        console.log("idPeople 2", idPeople)
        const people = await this.dynamoDBClient.get(params).promise();
        console.log("idPeople 3", idPeople)
        return people.Item as T;
    }

    async savePeople (people: People): Promise<string>{
        const idPeople = uuidv4();

        await this.dynamoDBClient.put({
            TableName: 'people',
            Item: {idPeople, ...people}
        }).promise();

        return idPeople;
    }
};
