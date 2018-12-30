import GLOBAL from '../constants';

export const fetchArtist = (artistId) => {
  return fetch(GLOBAL.ENDPOINTS.ARTISTS)
    .then((response) => response.json())
    .then((responseJson) => responseJson.artists)
    .then((responseJson) => {
      return responseJson.filter(x => x.id == artistId)[0]
    })
    .catch((error) => {
       console.log(error);
    });
}
