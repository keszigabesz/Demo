const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./config/logger');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const swaggerDocument = yaml.load('./docs/swagger.yaml');

const app = express();

const {
    host,
    user,
    pass
} = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
        user,
        pass,
    }).then(conn => {
        logger.info('MongoDB connection has been established successfully.');
    })
    .catch(err => {
        logger.error(err);
        process.exit();
    });

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

const authencticateJwt = require('./module/auth/authentication');

app.use('/patient', authencticateJwt, require('./controller/patient/patient.router'));
app.use('/patient-name', authencticateJwt, require('./controller/patient/patient-name.router'));
app.use('/physician', authencticateJwt, require('./controller/physician/physician.router'));
app.use('/physician-name', authencticateJwt, require('./controller/physician/physician-name.router'));
app.use('/reagent', authencticateJwt, require('./controller/reagent/reagent.router'));
app.use('/sample',authencticateJwt, require('./controller/sample/sample.router'));
app.use('/test',authencticateJwt, require('./controller/labtest/labtest.router'));
app.use('/test-card', require('./controller/labtest-card/labtest-card.router'));
app.use('/statistic', require('./controller/statistic/statistic.router'));
app.use('/login', require('./controller/login/login.router'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
    console.error(`ERROR ${err.statusCode}: ${err.message}`);
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});




module.exports = app;