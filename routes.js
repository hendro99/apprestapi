'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');
    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilbhn);
    app.route('/tampil/:id')
        .get(jsonku.editbhn);
    app.route('/tambah')
        .post(jsonku.tambahbhn);
    app.route('/ubah')
        .put(jsonku.ubahbhn);
    app.route('/hapus')
        .delete(jsonku.hapusbhn);
}

