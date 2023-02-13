import { APIGatewayProxyResult } from "aws-lambda";

const commonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
const response = (
  statusCode: number,
  body?: string | any[] | null
): APIGatewayProxyResult => {
  return {
    statusCode,
    headers: commonHeaders,
    body: JSON.stringify(body),
  };
};

export default response;
