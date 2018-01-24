const express = require("express");
const Produk = require("../models/produk");
const http = require("http");
const url = require("url");

const router = express.Router();

router.get("/detail/:id", (req, res) => {
    Produk.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }else{
            res.json(result);
        }
    });
})


// router.get('/detail/:id', function (req, res, next) {
//     Resep.findById(req.params.id, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

router.get("/", (req, res) => {
    Produk.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
});

router.get("/accessories", (req, res) => {
    Produk.find({ kategori: "accessories" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/denim", (req, res) => {
    Produk.find({ kategori: "denim" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/footwear", (req, res) => {
    Produk.find({ kategori: "footwear" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/jeans", (req, res) => {
    Produk.find({ kategori: "jeans" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/outerwear", (req, res) => {
    Produk.find({ kategori: "outerwear" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/pants", (req, res) => {
    Produk.find({ kategori: "pants" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/shirts", (req, res) => {
    Produk.find({ kategori: "shirts" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/t-shirts", (req, res) => {
    Produk.find({ kategori: "t-shirts" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.get("/shorts", (req, res) => {
    Produk.find({ kategori: "shorts" }, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json(result);
        }
    });
})

router.post("/", (req, res) => {
    if (!req.files.gambar) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.gambar;
    let date = new Date();
    let imageName = date.getTime() + ".png";

    image.mv("./public/gambar/" + imageName, (error) => {
        let newProduk = new Produk({
            nama: req.body.nama,
            kategori: req.body.kategori,
            harga : req.body.harga,
            warna : req.body.warna,
            ukuran : req.body.ukuran,
            gambar: "http://localhost:3000/gambar/" + imageName
        });

        newProduk.save((error) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(newProduk);
            }
        })
    });
});

router.delete("/:id", (req, res) => {
    Produk.findByIdAndRemove(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.json({ message: "Data deleted" });
        }
    });
});

module.exports = (function () {
    return router;
})();