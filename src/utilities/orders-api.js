import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function addItemCart(itemId)  {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST')
}

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
  }