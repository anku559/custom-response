import {
  THttpCode,
  THttpData,
  THttpInfo,
  THttpMessage,
  THttpStatus,
} from './types';

export interface IResponseObject {
  [key: number]: {
    code: THttpCode;
    info: THttpInfo;
    status: THttpStatus;
    message?: THttpMessage;
    data?: THttpData;
  };
}

export interface IResponseSingle {
  code: THttpCode;
  info: THttpInfo;
  status: THttpStatus;
  message?: THttpMessage;
  data?: THttpData;
}