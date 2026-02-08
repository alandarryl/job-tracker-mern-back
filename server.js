const app = require('./app');
const ENV = require('./config/env');

//Port
const PORT = ENV.PORT || 8080

//listen
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

