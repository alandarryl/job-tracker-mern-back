const mongoose = require('mongoose');

const connectDB = async (mongoURI, dbName) => {
    try {
        await mongoose.connect(mongoURI, {
        dbName,
        });

        console.log('Connexion à MongoDB réussie');
    } catch (error) {
        console.error('Erreur de connexion MongoDB', error.message);
        process.exit(1); // stop l'app si DB KO
    }
    };

module.exports = connectDB;