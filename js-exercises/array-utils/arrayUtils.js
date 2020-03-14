/* eslint-disable no-console */
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
};

const map = (array, callback) => {
  // TODO For now, just duplicating forEach
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
};

const filter = (array, callback) => {
  // TODO For now, just duplicating forEach
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
};

const reduce = (array, callback) => {
  // TODO For now, just duplicating forEach
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
};

export {
  forEach,
  map,
  filter,
  reduce,
};
