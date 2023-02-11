import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { AccessService } from "../services/access.service";
export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const accessService = new AccessService();
  return accessService.getFeedback();
};
