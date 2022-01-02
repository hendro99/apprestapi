'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('aplikasi rest api berjalan', res)
};

//menampilkan data 

exports.tampilbhn = function (req, res) {
    connection.query("select * from bhn", function (error, rows, fields) {
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
    connection.query("select * from bhn where no_id = ?", [id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {

                response.ok(rows, res);

            }
        });
}


//tambah data bahan

exports.tambahbhn = function (req, res) {
    var kd_bhn = req.body.kd_bhn;
    var na_bhn = req.body.na_bhn;
    var satuan = req.body.satuan;

    connection.query("insert into bhn (kd_bhn,na_bhn,satuan) values (?,?,?)", [kd_bhn, na_bhn, satuan],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {

                response.ok('Berhasil Tembah Data', res);

            }
        });


};


//update data bahan

exports.ubahbhn = function (req, res) {
    var id = req.body.no_id;
    var kd_bhn = req.body.kd_bhn;
    var na_bhn = req.body.na_bhn;
    var satuan = req.body.satuan;

    connection.query("UPDATE bhn SET kd_bhn=? , na_bhn=? , satuan=? WHERE no_id=? ", [kd_bhn, na_bhn, satuan, id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {

                response.ok('Berhasil update Data', res);

            }
        });


};


//delete data bahan

exports.hapusbhn = function (req, res) {
    var id = req.body.no_id;


    connection.query("DELETE  FROM bhn  WHERE no_id=? ", [id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {

                response.ok('Berhasil Hapus Data', res);

            }
        });


};


exports.tampilbrg = function (req, res) {
    var cari = req.params.cari;
    if ([cari] != '') {
        connection.query("select * from brg where kd_brg like '%?%'  ", [cari],
            function (error, rows, fields) {
                if (error) {
                    connection.log(error);
                } else {

                    response.ok(rows, res);

                }
            });
    } else {
        connection.query("select * from brg ",
            function (error, rows, fields) {
                if (error) {
                    connection.log(error);
                } else {

                    response.ok(rows, res);

                }
            });

    }
};

exports.tambahbrg = function (req, res) {
    var KD_BRG = req.body.KD_BRG;
    var NA_BRG = req.body.NA_BRG;
    var SATUAN = req.body.SATUAN;
    var HARGA = req.body.HARGA;
    connection.query("insert into brg (KD_BRG,NA_BRG,SATUAN,HARGA) values (?,?,?,?)", [KD_BRG, NA_BRG, SATUAN, HARGA],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {

                response.ok('Berhasil Tembah Data', res);

            }
        });


};


exports.ubahbrg = function (req, res) {


    // console.log(req.body.NO_ID + 'cc');


    var NO_ID = req.body.NO_ID;
    var KD_BRG = req.body.KD_BRG;
    var NA_BRG = req.body.NA_BRG;
    var SATUAN = req.body.SATUAN;
    var HARGA = req.body.HARGA;
    connection.query("update brg set KD_BRG=?,NA_BRG=?,SATUAN=? ,HARGA=? where NO_ID = ? ", [KD_BRG, NA_BRG, SATUAN, HARGA, NO_ID],

        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {

                response.ok('Berhasil Ubah Data', res);

            }
        });


};

exports.hapusbrg = function (req, res) {
    var NO_ID = req.body.NO_ID;
    connection.query("delete from brg where NO_ID = ? ", [NO_ID],

        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {

                response.ok('Berhasil Ubah Data', res);

            }
        });


};
