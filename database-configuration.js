import { connect } from 'mongoose';

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

export async function connectToDataBase(dataBaseURL) {
  connect(dataBaseURL, connectionOptions)
    .then(() => {
      console.log(`connection to database succesfully created :)!!!`);
    })
    .catch((error) => {
      console.log(`something went wrong ${error.message}`);
    });
}
