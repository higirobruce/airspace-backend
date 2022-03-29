const multer = require("multer");

const router = require("express").Router();

router.post("/aircraftOpCerts", (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/aircraftOpCerts");
    },
    filename: function (req, file, cb) {
      cb(null, "Aircraft Operation Certificate" + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500);
    } else if (err) {
      return res.status(500);
    }
    return res.status(200).send(req.file);
  });
});

router.post("/vatCerts", (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/vatCerts");
    },
    filename: function (req, file, cb) {
      cb(null, "VAT Certificate" + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500);
    } else if (err) {
      return res.status(500);
    }
    return res.status(200).send(req.file);
  });
});

router.post("/airWorthCerts", (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/airWorthCerts");
    },
    filename: function (req, file, cb) {
      cb(null, "Certificate of Airworthiness" + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500);
    } else if (err) {
      return res.status(500);
    }
    return res.status(200).send(req.file);
  });
});

router.post("/insuranceCerts", (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/insuranceCerts");
    },
    filename: function (req, file, cb) {
      cb(null, "Certificate of Insurance" + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500);
    } else if (err) {
      return res.status(500);
    }
    return res.status(200).send(req.file);
  });
});

router.post("/ownershipCerts", (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/ownershipCerts");
    },
    filename: function (req, file, cb) {
      cb(null, "Certificate of Ownership" + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500);
    } else if (err) {
      return res.status(500);
    }
    return res.status(200).send(req.file);
  });
});

router.post("/registCerts", (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/registCerts");
    },
    filename: function (req, file, cb) {
      cb(null, "Certificate of Registration" + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500);
    } else if (err) {
      return res.status(500);
    }
    return res.status(200).send(req.file);
  });
});

router.post("/noiseCerts", (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/noiseCerts");
    },
    filename: function (req, file, cb) {
      cb(null, "Noise Certificate" + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500);
    } else if (err) {
      return res.status(500);
    }
    return res.status(200).send(req.file);
  });
});

router.post("/radioCerts", (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/radioCerts");
    },
    filename: function (req, file, cb) {
      cb(null, "Radio Certificate" + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500);
    } else if (err) {
      return res.status(500);
    }
    return res.status(200).send(req.file);
  });
});

router.post("/lastReleaseCerts", (req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/lastReleaseCerts");
    },
    filename: function (req, file, cb) {
      cb(null, "Last release of Service" + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500);
    } else if (err) {
      return res.status(500);
    }
    return res.status(200).send(req.file);
  });
});

module.exports = router;
