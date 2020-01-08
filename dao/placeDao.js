/* ==================== START modules ==================== */

const db            = require('../config/db');

/* ==================== END modules ==================== */

var Place = function(place) {
    this.placeNumber = place.placeNumber;
    this.keywordNumber = place.keywordNumber;
    this.name = place.name;
    this.address = place.address;
    this.openingTime = place.openingTime;
    this.phoneNumber = place.phoneNumber;
    this.content = place.content;
    this.fileName = place.fileName;
    this.fileExtension = place.fileExtension;
    this.regiDate = place.regiDate;
    this.latitude = place.latitude;
    this.longitude = place.longitude;
};

Place.createPlace = function(request, response, next) {
    try {
        db((error, connection) => {
            connection.query("INSERT INTO place SET ?", request, function(error, results) {
                if (error) {
                    console.log("error: ", error)
                    return response(error, null)
                }
                console.log('response: ', results)
                response(null, results)
                connection.release()
            })
        })
    } catch (error) {
        throw new ErrorHandler(500, 'database error' + error.statusCode + error.message)
    }
}

Place.readOnePlace = function(request, response, next) {
    try {
        db((error, connection) => {
            connection.query("SELECT * FROM place WHERE placeNumber = ?", request, function(error, results) {
                if (error) {
                    console.log("error: ", error)
                    return response(error, null)
                }
                console.log('response: ', results)
                response(null, results)
                connection.release()
            })
        })
    } catch (error) {
        throw new ErrorHandler(500, 'database error' + error.statusCode + error.message)
    }
}

Place.readAllPlace = function(response, next) {
    try {
        db((error, connection) => {
            connection.query("SELECT * FROM place", function(error, results) {
                if (error) {
                    console.log("error: ", error)
                    return response(error, null)
                }
                console.log('response: ', results)
                response(null, results)
                connection.release()
            })
        })
    } catch (error) {
        throw new ErrorHandler(500, 'database error' + error.statusCode + error.message)
    }
};

Place.updatePlace = function([name, address, openingTime, phoneNumber, content, placeNumber], response) {
    console.log(__filename + " - name : " + name);
    console.log(__filename + " - address : " + address);
    console.log(__filename + " - openingTime : " + openingTime);
    console.log(__filename + " - phoneNumber : " + phoneNumber);
    console.log(__filename + " - content : " + content);
    console.log(__filename + " - placeNumber : " + placeNumber);
    
    try {
        db((error, connection) => {
            connection.query("UPDATE place SET name = ?, address = ?, openingTime = ?, phoneNumber = ?, content = ? WHERE placeNumber = ?", [name, address, openingTime, phoneNumber, content, placeNumber], function(error, results) {
                if (error) {
                    console.log("error: ", error)
                    return response(error, null)
                }
                console.log('response: ', results)
                response(null, results)
                connection.release()
            })
        })
    } catch (error) {
        throw new ErrorHandler(500, 'database error' + error.statusCode + error.message)
    }
}

Place.deletePlace = function(request, response) {
    try {
        db((error, connection) => {
            connection.query("DELETE FROM place WHERE placeNumber = ?", request, function(error, results) {
                if (error) {
                    console.log("error: ", error)
                    return response(error, null)
                }
                console.log('response: ', results)
                response(null, results)
                connection.release()
            })
        })
    } catch (error) {
        throw new ErrorHandler(500, 'database error' + error.statusCode + error.message)
    }
}

Place.getCutrrentLocation = function([latitude, longitude, latitude2], response) {
    let sql = "select " +
                "placeNumber, name, address, " + 
                "( 6371 * acos( cos( radians( ? ) ) * cos( radians(latitude) ) " +
                "* cos( radians(longitude) - radians( ? ) ) + sin( radians( ? ) ) " + 
                "* sin( radians( latitude ) ) ) ) AS distance " +
                "from place " +
                "HAVING distance < 1 " +
                "ORDER BY distance desc " +
                "LIMIT 0 , 5";
                
    db((error, connection) => {
        connection.query(sql, [latitude, longitude, latitude2], function(err, res) {
            if (error) {
                console.log("error: ", error);
                return response(error, null);
            }
            console.log(res);
            response(null, res);
            connection.release();
        });
    });
};

module.exports= Place;