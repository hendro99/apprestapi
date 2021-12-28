'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('aplikasi rest api berjalan', res)
};

//menampilkan data 

exports.tampilbhn = function (req, res) {
    connection.query('select * from bhn', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {

            response.ok(rows, res);

        }
    });
};


//menampilkan data id
exports.editbhn = function (req, res) {
    let id = req.params.id;
    connection.query('select * from bhn where no_id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {

                response.ok(rows, res);

            }
        });
}
