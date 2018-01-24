const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bootcamp4");

const Schema = mongoose.Schema;

const produkSchema = new Schema({
    nama : String,
    kategori : String,
    harga : Number,
    warna : String,
    ukuran : String,
    gambar : String
});

const Produk = mongoose.model("produk", produkSchema);

module.exports = Produk;