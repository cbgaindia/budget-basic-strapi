module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      console.log(data);
      data.Title = 'Some fixed name';    
    },
  },
};