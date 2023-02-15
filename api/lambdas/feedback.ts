import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { AccessService } from "../services/access.service";
export const getFeedback = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const accessService = new AccessService();
  return accessService.getFeedback(event);
};

export const addFeedback = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const accessService = new AccessService();
  return accessService.addFeedback(event);
};

export const deleteFeedback = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const accessService = new AccessService();
  return accessService.deleteFeedback(event);
};
