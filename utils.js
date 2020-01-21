const bulkUpdate = (arr, db, table) => {
  let promises = [];

  arr.forEach(user => {
    promises.push(db[table].update({}));

    Promise.all(promises).then(() => {
      // success
    }, err => {
      console.log(err);
    });
  });
};