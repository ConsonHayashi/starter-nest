
// {
//   statusCode: status,
//   timestamp: new Date().toLocaleString(),
//   path: request.url,
//   method: request.method,
//   message: message,
// }
export interface LogMessage {
  statusCode: number;
  timestamp: string;
  path: string;
  method: string;
  message: string;
}