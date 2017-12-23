const configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://ajay:ajay149301@ds163836.mlab.com:63836/nodetodo`;
    }
}