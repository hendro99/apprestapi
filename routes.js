'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilbhn')
        .get(jsonku.tampilbhn);
    app.route('/tampilbhn/:id')
    app.route('/tambahbhn')
        .post(jsonku.tambahbhn);
    app.route('/ubahbhn')
        .put(jsonku.ubahbhn);
    app.route('/hapusbhn')
        .delete(jsonku.hapusbhn);
    app.route('/tampilbrg')
        .post(jsonku.tampilbrg);
    app.route('/tambahbrg')
        .post(jsonku.tambahbrg);
    app.route('/ubahbrg')
        .post(jsonku.ubahbrg);
    app.route('/hapusbrg')
        .post(jsonku.hapusbrg);
}

