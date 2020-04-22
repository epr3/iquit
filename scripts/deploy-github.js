const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "git@github.com:epr3/iquit.git"
  },
  () => {
    console.log("Deploy Complete!");
  }
);
