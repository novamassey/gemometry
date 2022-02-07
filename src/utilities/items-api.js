import { getToken } from "./users-service";

import sendRequest from './send-request';
// import itemRequest from './item-request';

const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

// export function getById(id) {
//     return sendRequest(`${BASE_URL}/${id}`);
//   }