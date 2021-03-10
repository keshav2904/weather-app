const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request ({
        url: `http://api.positionstack.com/v1/forward?access_key=a2f72f78d2d5cb997b615721799973b8&query=${encodedAddress}&output=json`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to server');
        } else if (body.data[0] === undefined) {
            callback('Unable to find that address.');
        } else {
            callback(undefined, {
                address: body.data[0].label,
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;