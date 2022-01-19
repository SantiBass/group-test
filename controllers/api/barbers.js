const yelp = require("yelp-fusion");
const router = require("express").Router();

router.post("/", (req, res) => {
  // console.log(`req.query: ${JSON.stringify(req.query)}`);
  console.log(req.body);

  const client = yelp.client(
    "dg33AX7OqbRm6sz4FhU7tcnUK3HC0dABtSR1jQv_W9behEGQYwc0nEO4dVq-HKu9aq2fgOmsmq-9f3AvCNU09iON2eSi4VXuNIUWZYJUu5Fi6oire2xMTCd6-pPkYXYx"
  );

  client
    .search({
      term: 'barber',
      location: req.body.userLocation,
    })
    .then((response) => {
      res.json(response.jsonBody);
    })
    .catch((e) => {
      res.send(e);
    });
});

module.exports = router;
