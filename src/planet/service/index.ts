//import dynamoDBClient from "../model";
import PlanetService from "./planet.service";
import dynamoDBClient from "../../commons/dynamodb.config";

const planetService = new PlanetService(dynamoDBClient());

export default planetService;