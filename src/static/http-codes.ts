import { IResponseObject } from '../utils/interface';

const RES_MESSAGES: IResponseObject = {
  // Informational responses (100–199)
  100: {
    code: 100,
    info: 'Continue',
    status: true,
  },

  101: {
    code: 101,
    info: 'Switching Protocol',
    status: true,
  },

  102: {
    code: 102,
    info: 'Processing',
    status: true,
  },

  103: {
    code: 103,
    info: 'Early Hints',
    status: true,
  },

  // Successful responses (200–299)
  200: {
    code: 200,
    info: 'OK',
    status: true,
  },

  201: {
    code: 201,
    info: 'Created',
    status: true,
  },

  202: {
    code: 202,
    info: 'Accepted',
    status: true,
  },

  203: {
    code: 203,
    info: 'Non-Authoritative Information',
    status: true,
  },

  204: {
    code: 204,
    info: 'No Content',
    status: true,
  },

  205: {
    code: 205,
    info: 'Reset Content',
    status: true,
  },

  206: {
    code: 206,
    info: 'Partial Content',
    status: true,
  },

  207: {
    code: 207,
    info: 'Multi-Status',
    status: true,
  },

  208: {
    code: 208,
    info: 'Already Reported',
    status: true,
  },

  226: {
    code: 226,
    info: 'IM Used',
    status: true,
  },

  // Redirects (300–399)
  300: {
    code: 300,
    info: 'Multiple Choice',
    status: true,
  },

  301: {
    code: 301,
    info: 'Moved Permanently',
    status: true,
  },

  302: {
    code: 302,
    info: 'Found',
    status: true,
  },

  303: {
    code: 303,
    info: 'See Other',
    status: true,
  },

  304: {
    code: 304,
    info: 'Not Modified',
    status: true,
  },

  305: {
    code: 305,
    info: 'Use Proxy',
    status: true,
  },

  307: {
    code: 307,
    info: 'Temporary Redirect',
    status: true,
  },

  308: {
    code: 308,
    info: 'Permanent Redirect',
    status: true,
  },

  // Client errors (400–499)
  400: {
    code: 400,
    info: 'Bad Request',
    status: false,
  },

  401: {
    code: 401,
    info: 'Unauthorized',
    status: false,
  },

  402: {
    code: 402,
    info: 'Payment Required',
    status: false,
  },

  403: {
    code: 403,
    info: 'Forbidden',
    status: false,
  },

  404: {
    code: 404,
    info: 'Not Found',
    status: false,
  },

  405: {
    code: 405,
    info: 'Method Not Allowed',
    status: false,
  },

  406: {
    code: 406,
    info: 'Not Acceptable',
    status: false,
  },

  407: {
    code: 407,
    info: 'Proxy Authentication Required',
    status: false,
  },

  408: {
    code: 408,
    info: 'Request Timeout',
    status: false,
  },

  409: {
    code: 409,
    info: 'Conflict',
    status: false,
  },

  410: {
    code: 410,
    info: 'Gone',
    status: false,
  },

  411: {
    code: 411,
    info: 'Length Required',
    status: false,
  },

  412: {
    code: 412,
    info: 'Precondition Failed',
    status: false,
  },

  413: {
    code: 413,
    info: 'Payload Too Large',
    status: false,
  },

  414: {
    code: 414,
    info: 'URI Too Long',
    status: false,
  },

  415: {
    code: 415,
    info: 'Unsupported Media Type',
    status: false,
  },

  416: {
    code: 416,
    info: 'Range Not Satisfiable',
    status: false,
  },

  417: {
    code: 417,
    info: 'Expectation Failed',
    status: false,
  },

  418: {
    code: 418,
    info: "I'm a teapot",
    status: false,
  },

  421: {
    code: 421,
    info: 'Misdirected Request',
    status: false,
  },

  422: {
    code: 422,
    info: 'Unprocessable Entity',
    status: false,
  },

  423: {
    code: 423,
    info: 'Locked',
    status: false,
  },

  424: {
    code: 424,
    info: 'Failed Dependency',
    status: false,
  },

  425: {
    code: 425,
    info: 'Too Early',
    status: false,
  },

  426: {
    code: 426,
    info: 'Upgrade Required',
    status: false,
  },

  428: {
    code: 428,
    info: 'Precondition Required',
    status: false,
  },

  429: {
    code: 429,
    info: 'Too Many Requests',
    status: false,
  },

  431: {
    code: 431,
    info: 'Request Header Fields Too Large',
    status: false,
  },

  444: {
    code: 444,
    info: 'Connection Closed Without Response',
    status: false,
  },

  451: {
    code: 451,
    info: 'Unavailable For Legal Reasons',
    status: false,
  },

  499: {
    code: 499,
    info: 'Client Closed Request',
    status: false,
  },

  // Server errors (500–599)
  500: {
    code: 500,
    info: 'Internal Server Error',
    status: false,
  },

  501: {
    code: 501,
    info: 'Not Implemented',
    status: false,
  },

  502: {
    code: 502,
    info: 'Bad Gateway',
    status: false,
  },

  503: {
    code: 503,
    info: 'Service Unavailable',
    status: false,
  },

  504: {
    code: 504,
    info: 'Gateway Timeout',
    status: false,
  },

  505: {
    code: 505,
    info: 'HTTP Version Not Supported',
    status: false,
  },

  506: {
    code: 506,
    info: 'Variant Also Negotiates',
    status: false,
  },

  507: {
    code: 507,
    info: 'Insufficient Storage',
    status: false,
  },

  508: {
    code: 508,
    info: 'Loop Detected',
    status: false,
  },

  510: {
    code: 510,
    info: 'Not Extended',
    status: false,
  },

  511: {
    code: 511,
    info: 'Network Authentication Required',
    status: false,
  },

  599: {
    code: 599,
    info: 'Network Connect Timeout Error',
    status: false,
  },
};

export default RES_MESSAGES;
