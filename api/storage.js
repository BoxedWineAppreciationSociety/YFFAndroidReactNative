import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

import GLOBAL from '../constants';

export const localStorage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync: {
    async artists() {
      const response = await fetch(GLOBAL.ENDPOINTS.ARTISTS);
      const responseText = await response.text();

      console.log(`artist sync response: `, responseText);
      const json = JSON.parse(responseText);

      if (json && json.artists) {
        storage.save({
          key: 'artists',
          data: json.artists
        });
        // return required data when succeed
        return json.artists;
      } else {
        // throw error when failed
        throw new Error(`error syncing artists`);
      }
    },

    async fridayPerformances() {
      const response = await fetch(GLOBAL.ENDPOINTS.FRIPERFORMANCES);
      const responseText = await response.text();

      console.log(`friday performances sync response: `, responseText);
      const json = JSON.parse(responseText);

      if (json && json.performances) {
        storage.save({
          key: 'fridayPerformances',
          data: json.performances
        });
        // return required data when succeed
        return json.performances;
      } else {
        // throw error when failed
        throw new Error(`error syncing Friday performances`);
      }
    },

    async saturdayPerformances() {
      const response = await fetch(GLOBAL.ENDPOINTS.SATPERFORMANCES);
      const responseText = await response.text();

      console.log(`saturday performances sync response: `, responseText);
      const json = JSON.parse(responseText);

      if (json && json.performances) {
        storage.save({
          key: 'saturdayPerformances',
          data: json.performances
        });
        // return required data when succeed
        return json.performances;
      } else {
        // throw error when failed
        throw new Error(`error syncing Saturday performances`);
      }
    },

    async sundayPerformances() {
      const response = await fetch(GLOBAL.ENDPOINTS.SUNPERFORMANCES);
      const responseText = await response.text();

      console.log(`sunday performances sync response: `, responseText);
      const json = JSON.parse(responseText);

      if (json && json.performances) {
        storage.save({
          key: 'sundayPerformances',
          data: json.performances
        });
        // return required data when succeed
        return json.performances;
      } else {
        // throw error when failed
        throw new Error(`error syncing Sunday performances`);
      }
    },

    async allPerformances() {
      const response = await fetch(GLOBAL.ENDPOINTS.ALLPERFORMANCES);
      const responseText = await response.text();

      console.log(`all performances sync response: `, responseText);
      const json = JSON.parse(responseText);

      if (json && json.performances) {
        storage.save({
          key: 'allPerformances',
          data: json.performances
        });
        // return required data when succeed
        return json.performances;
      } else {
        // throw error when failed
        throw new Error(`error syncing all performances`);
      }
    },
  }
});

global.storage = localStorage;
