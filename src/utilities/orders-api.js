import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function addItemCart(itemId)  {
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST')
}

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
  }

// export function getByItemOrderId(cartId) {
//     return sendRequest(`${BASE_URL}/cart/items/${cartId}`)
// }

export function setQty(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/items/qty`, 'PUT', {itemId, newQty})
}

export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST')
}
export function getAll() {
    return sendRequest(BASE_URL)
}