import GLOBAL from '../constants';
import localStorage from '../api/storage';

export const fetchArtist = (artistId) => {
  return storage.load({ key: 'artists', autoSync: true })
                .then((responseJson) => {
                  return responseJson.filter(x => x.id == artistId)[0]
                })
                .then((responseJson) => {
                  responseJson.image = '../assets/images/artist-images/' + responseJson.image_name + '.png';
                  return responseJson;
                })
                .catch((error) => {
                  console.log(error);
                });
}
