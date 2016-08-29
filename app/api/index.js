import fetch from 'isomorphic-fetch';

const API_URL = 'https://jsonplaceholder.typicode.com/photos';

export function callApi() {
   return fetch(`${API_URL}`, {
      headers: { 'content-type': 'application/json' },
   })
   .then(response => response.json().then(json => ({ json, response })))
   .then(({ json, response }) => {
      if (!response.ok) {
         return Promise.reject(json);
      }

      return json;
   })
   .then(
      response => response,
      error => error
   );
}
