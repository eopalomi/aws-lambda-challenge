//import dynamoDBClient from "../model";
import PeopleService from "./people.service";
import dynamoDBClient from "../../commons/dynamodb.config";

export const peopleService = new PeopleService(dynamoDBClient());

export default peopleService;
