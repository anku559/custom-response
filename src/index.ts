import {
  THttpCode,
  THttpInfo,
  THttpStatus,
  THttpData,
  TCommonOperations,
  TCommonTypes,
} from './utils/types';
import RES_MESSAGES from './static/http-codes';
import { commonMessage } from './static/messages';

export default class CustomResponse {
  private code: THttpCode = 500;

  private data: THttpData = {};

  private status: THttpStatus;

  private info: THttpInfo;

  constructor(code: THttpCode = 500, data: THttpData = null) {
    this.code = code;
    this.data = data;
    this.status = RES_MESSAGES[this.code].status;
    this.info = RES_MESSAGES[this.code].info;

    if (!data) {
      delete this.data;
    }
  }

  common(operation: TCommonOperations, types: TCommonTypes) {
    const output = { ...RES_MESSAGES[this.code] };

    output.message = commonMessage(operation, types);
    return output;
  }

  custom(message = '') {
    const output = { ...RES_MESSAGES[this.code] };

    if (message) output.message = message;

    return output;
  }
}

// Other Exports
// export const ENDPOINT_RES_404 = new CustomResponse(404).custom(
//   'Endpoint not found.',
// );

// export const DATA_NOT_FOUND = new CustomResponse(404).custom('Data not found.');

// export const CUSTOM_500 = (message: string) => {
//   const response = new CustomResponse(500).custom(message);
//   return response;
// };

const SAMPLE_PORT = process.env.PORT || 3000;
console.log(SAMPLE_PORT);
console.log(SAMPLE_PORT);
console.log(SAMPLE_PORT);
// console.log(SAMPLE_PORT);
