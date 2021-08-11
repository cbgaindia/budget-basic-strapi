module.exports = {
  lifecycles: {
    beforeCreate(data) {
      console.log(data);
      data.Title = 'Some fixed name';
    },
  },
};