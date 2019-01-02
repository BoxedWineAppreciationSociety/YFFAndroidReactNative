import GLOBAL from '../constants';
import localStorage from '../api/storage';

export const fetchArtist = (artistId) => {
  return storage.load({ key: 'artists', autoSync: true })
                .then((responseJson) => {
                  return responseJson.filter(x => x.id == artistId)[0]
                })
                .catch((error) => {
                  console.log(error);
                });
}
