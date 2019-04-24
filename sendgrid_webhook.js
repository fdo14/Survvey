var localtunnel = require("localtunnel");
localtunnel(
  5000,
  {
    subdomain: "nicholssurvvey"
  },
  function(err, tunnel) {
    console.log("LT running");
  }
);
