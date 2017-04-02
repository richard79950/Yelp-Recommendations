var request = require("request")

var access_token;

// gets token
exports.get_token = function(app) {
    var token_gen = {
        method: 'POST',
        url: 'https://api.yelp.com/oauth2/token',
        qs: {
            client_id: 'Ox5Pu2eeTPCQTz1VFZgQaw',
            client_secret: '2MfrirouhjUK2wJuZywjcpiETrwzZBNntimEFXJH1UnLNhC5TUZxz2wkSaAKI0cv'
        },
        headers: { 
            'content-type': 'application/x-www-form-urlencoded'
         }
     }

    request(token_gen, function (error, response, body) {
        if (error) throw new Error(error)
        body = JSON.parse(body)      
        access_token = body.access_token

    })    
}

// searches for restaurants
exports.searchRestaurants = function(req, res) {
    var restaurants = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search?term=' + req.query.term + '&latitude=' + req.query.latitude + '&longitude=' + req.query.longitude,
        headers:  {
             authorization: 'Bearer ' + access_token
         }
     }

    request(restaurants, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body)
    })

}