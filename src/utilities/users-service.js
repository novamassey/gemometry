import * as usersAPI from './users-api';

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    //save token to local storage-localStorage avail in all JS w method setItem or getItem
    localStorage.setItem('token', token);
    return getUser();
   
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    //save token to local storage-localStorage avail in all JS w method setItem or getItem
    localStorage.setItem('token', token);
    return getUser();
}

export function logOut() {
    localStorage.removeItem('token');
}

export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    //If there is no token, return null
    if (!token) return null;
    // Obtain the payload of the token,JSON
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      // Token has expired - remove it from localStorage
      localStorage.removeItem('token');
      return null;
    }
    return token;
  }

export async function checkToken() {
    const dateStr = await usersAPI.checkToken();
    return new Date(dateStr);
  }

  //grab user using token 
  export function getUser() {
    const token = getToken();
    // If there's a token, return the user object in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }