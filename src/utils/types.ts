/* -------------------------------------------------------------------------- */
/*                                  Response                                  */
/* -------------------------------------------------------------------------- */
export type THttpCode = number;
export type THttpInfo = string;
export type THttpStatus = boolean;
export type THttpMessage = string;
export type THttpData = any;

/* -------------------------------------------------------------------------- */
/*                                  Messages                                  */
/* -------------------------------------------------------------------------- */
export type TCrudCommon = 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';

export type TCrudError =
  | 'ERR_CREATE'
  | 'ERR_READ'
  | 'ERR_UPDATE'
  | 'ERR_DELETE';

export type TCrudData =
  | 'DATA_CREATED'
  | 'DATA_READ'
  | 'DATA_UPDATED'
  | 'DATA_DELETED'
  | 'DATA_DUPLICATE';

export type TCommonOperations = TCrudCommon | TCrudError | TCrudData;

/* -------------------------------------------------------------------------- */
/*                                 Operations                                 */
/* -------------------------------------------------------------------------- */
export type TCreateOperationsType =
  | 'add'
  | 'added'
  | 'create'
  | 'created'
  | 'place'
  | 'placed'
  | 'register'
  | 'registered';

export type TReadOperationsType =
  | 'fetch'
  | 'fetched'
  | 'list'
  | 'listed'
  | 'login'
  | 'logged in';

export type TUpdateOperationsType = 'update' | 'updated';

export type TDeleteOperationsType = 'delete' | 'deleted' | 'remove' | 'removed';

export type TCommonOperationsType =
  | TCreateOperationsType
  | TReadOperationsType
  | TUpdateOperationsType
  | TDeleteOperationsType;

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
type TCommonTypesB = 'Book';

type TCommonTypesC = 'Car' | 'Chapter' | 'Client';

type TCommonTypesH = 'Header';

type TCommonTypesS = 'Super Admin' | 'Student';

type TCommonTypesU = 'User';

export type TCommonTypes =
  | TCommonTypesB
  | TCommonTypesC
  | TCommonTypesH
  | TCommonTypesS
  | TCommonTypesU;
