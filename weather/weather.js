const request = require('request');

var getWeather = (lat, lon, callback) => {
    request({
        url: `http://api.weatherapi.com/v1/current.json?key=27c9cb6dd89942ef89f170725202707&q=${lat},${lon}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.current.temp_c,
                feelsLike: body.current.feelslike_c,
                condition: body.current.condition.text
            })
        } else {
            callback('Unable to fetch weather');
        }
    });
}

module.exports.getWeather = getWeather;