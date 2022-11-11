import { TCommonOperations, TCommonTypes } from '../utils/types';

export function authMessage() {
  //
}

export function commonMessage(
  typeProp: TCommonOperations,
  relatedTo: TCommonTypes,
  idx = 0,
) {
  const spaceSE = relatedTo ? ` ${relatedTo} ` : ' ';
  // const spaceS = ` ${relatedTo}`;
  const spaceE = `${relatedTo} `;

  const forCreate = [
    'add',
    'added',
    'create',
    'created',
    'place',
    'placed',
    'register',
    'registered',
  ];
  const forRead = ['fetch', 'fetched', 'list', 'listed', 'login', 'logged in'];
  const forUpdate = ['update', 'updated'];
  const forDelete = ['delete', 'deleted', 'remove', 'removed'];

  const authObj = {
    DATA_CREATED: 'Data created successfully.',
    DATA_READ: 'Data read successfully.',
    DATA_UPDATED: 'Data updated successfully.',
    DATA_DELETED: 'Data Deleted successfully.',
    DATA_DUPLICATE: 'Duplicate data found.',

    NOT_FOUND: 'Data not found.',

    CREATE: `${spaceE}${forCreate[idx]} successfully.`,
    READ: `${spaceE}${forRead[idx]} successfully.`,
    UPDATE: `${spaceE}${forUpdate[idx]} successfully.`,
    DELETE: `${spaceE}${forDelete[idx]} successfully.`,

    ERR_CREATE: `Unable to ${forCreate[idx]}${spaceSE}.`,
    ERR_READ: `Unable to ${forRead[idx]}${spaceSE}.`,
    ERR_UPDATE: `Unable to ${forUpdate[idx]}${spaceSE}.`,
    ERR_DELETE: `Unable to ${forDelete[idx]}${spaceSE}.`,

    DUPLICATE: `Duplicate ${relatedTo} found.`,
    TYPE_NOT_FOUND: `${relatedTo} not found.`,
  };

  return authObj[typeProp as keyof typeof authObj];
}
