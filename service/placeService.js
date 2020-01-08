/* ==================== START modules ==================== */

<<<<<<< Updated upstream
var str2json = require('string-to-json');
const Place = require('../dao/placeDao.js');

/* ==================== END modules ==================== */

exports.createPlace = function(request, response, next) {
    // if(request) {
    //     // response.status(404).send("test");
    //     next(JSON.parse('message: error!!!!!'));
    // }

    var setValues = {
        'keywordNumber' : request.body.keywordNumber,
        'name' : request.body.name,
        'address' : request.body.address,
        'openingTime' : request.body.openingTime,
        'phoneNumber' : request.body.phoneNumber,
        'content' : request.body.content,
        'latitude' : request.body.latitude,
        'longitude' : request.body.longitude
    };
    
    Place.createPlace(setValues, function(error, place) { 
        if (error) {
            // response.send(error);
            // var output = str2json.convert({ "status": "400", "message": "error" });
            // console.log(output)
            error.status = 500
            error.message = str2json.convert({ "status": 500, "message": error.message });
            next(error)
            // next(output)
            
        }
        const result = str2json.convert({ "status": 200, "data": place });
        response.send(result);
    });
};

exports.readOnePlace = function(request, response) {
    let placeNumber = request.params.placeNumber;

    Place.readOnePlace(placeNumber, function(error, place) { 
        if (error) {
            response.send(error);
        }
        response.send(place);
    });
};
=======
const str2json = require('string-to-json')
const Place = require('../dao/placeDao.js')
const { ErrorHandler, handleError } = require('../costomModules/customError')
const isEmpty = require('../costomModules/valueCheck')

/* ==================== END modules ==================== */

/* ==================== START function ==================== */

const separator = '|'
function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);

    console.log('original string value: "' + stringToSplit + '"');
    console.log('The separator is: "' + separator + '"');
    arrayOfStrings.forEach(function(element, index){
        console.log(`${index} 번째 요소 : ${element}`);
    });
}

/* ==================== END function ==================== */

exports.createPlace = function(request, response, next) {
    const setValues = {
        keywordNumber, name, address, openingTime, phoneNumber,
        content, latitude, longitude
    } = request.body
    
    isEmpty('keywordNumber', keywordNumber)
    splitString(keywordNumber, separator);

    isEmpty('name', name)
    isEmpty('address', address)
    isEmpty('openingTime', openingTime)
    isEmpty('phoneNumber', phoneNumber)
    isEmpty('content', content)

    Place.createPlace(setValues, function(error, place) { 
        if (error) {
            console.log(__filename + ", Place.createPlace() error status code 500 !!!")
            next(new ErrorHandler(500, "Place.createPlace() server error !!!"))
            return
        }
        response.status(200).send(place)
    })
}

exports.readOnePlace = function(request, response, next) {
    let placeNumber = request.params.placeNumber
    isEmpty(placeNumber)

    Place.readOnePlace(placeNumber, function(error, place) { 
        if (error) {
            console.log(__filename + ", Place.readOnePlace() error status code 500 !!!")
            next(new ErrorHandler(500, "Place.readOnePlace() server error !!!"))
            return
        }
        response.status(200).send(place)
    })
}
>>>>>>> Stashed changes

exports.readAllPlace = function(request, response, next) {
    
    Place.readAllPlace(function(error, place) { 
        if (error) {
<<<<<<< Updated upstream
            // response.send(error);
            next(error);
        }
        response.send(place);
    });
};

exports.updatePlace = function(request, response) {
    let name = request.body.name;
    let address = request.body.address;
    let openingTime = request.body.openingTime;
    let phoneNumber = request.body.phoneNumber;
    let content = request.body.content;
=======
            console.log(__filename + ", Place.readAllPlace() error status code 500 !!!")
            next(new ErrorHandler(500, "Place.readAllPlace() server error !!!"))
            return
        }
        response.status(200).send(place)
    });
};

exports.updatePlace = function(request, response, next) {
>>>>>>> Stashed changes
    let placeNumber = request.params.placeNumber;
    const setValues = {
        name, address, openingTime, phoneNumber, content
    } = request.body
    
    isEmpty('placeNumber', placeNumber)
    isEmpty('name', name)
    isEmpty('address', address)
    isEmpty('openingTime', openingTime)
    isEmpty('phoneNumber', phoneNumber)
    isEmpty('content', content)

    Place.updatePlace([name, address, openingTime, phoneNumber, content, placeNumber], function(error, place) { 
        if (error) {
<<<<<<< Updated upstream
            response.send(error);
        }
        response.send(place);
=======
            console.log(__filename + ", Place.updatePlace() error status code 500 !!!")
            next(new ErrorHandler(500, "Place.updatePlace() server error !!!"))
            return
        }
        response.status(200).send(place)
>>>>>>> Stashed changes
    });
};

exports.deletePlace = function(request, response) {
    let placeNumber = request.params.placeNumber;
    isEmpty('placeNumber', placeNumber)

    Place.deletePlace(placeNumber, function(error, place) { 
        if (error) {
<<<<<<< Updated upstream

            response.send(error);
        }
        response.send(place);
    });
};

exports.getCutrrentLocation = function(request, response) {
    let latitude = request.params.latitude;
    let longitude = request.params.longitude;
    let latitude2 = request.params.latitude;
=======
            console.log(__filename + ", Place.deletePlace() error status code 500 !!!")
            next(new ErrorHandler(500, "Place.deletePlace() server error !!!"))
            return
        }
        response.status(200).send(place)
    });
};

exports.getCutrrentLocation = function(request, response, next) {
    const setValues = {
        latitude, longitude, latitude2
    } = request.params

    // [latitude, longitude, latitude2]
>>>>>>> Stashed changes

    Place.getCutrrentLocation([latitude, longitude, latitude2], function(error, place){
        if (error) {
<<<<<<< Updated upstream
            response.send(error);
        }
        response.send(place);
=======
            console.log(__filename + ", Place.getCutrrentLocation() error status code 500 !!!")
            next(new ErrorHandler(500, "Place.getCutrrentLocation() server error !!!"))
            return
        }
        response.status(200).send(place)
>>>>>>> Stashed changes
    });
};