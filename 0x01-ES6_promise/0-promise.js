/* eslint-disable */
export default function getResponseFromAPI() {
  return (new Promise((resolve, reject) => {
    if (success) resolve({status: 200, body: 'Success'});
    reject(Error('The API is not working currently'));
  }));
}
