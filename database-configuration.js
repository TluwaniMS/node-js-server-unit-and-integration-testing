const { connect } = require("mongoose");

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

async function connectToDataBase(dataBaseURL) {
  connect(dataBaseURL, connectionOptions)
    .then(() => {
      console.log(`connection to database succesfully created :)!!!`);
    })
    .catch((error) => {
      console.log(`something went wrong ${error.message}`);
    });
}

module.exports = { connectToDataBase };
