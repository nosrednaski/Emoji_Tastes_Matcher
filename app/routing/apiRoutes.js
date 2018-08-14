

const friendsData = require("../data/friendsdata");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      //  compatability logic
      const newUser = req.body;
      const diff = (i) => { 
        return newUser.scores
        .map((x, j) => Math.abs(x - friendsData[i].scores[j]))
        .map(Number)
        .reduce((acc,val) => acc + val);
    };
    
    const findMatch = () => {
        let diffArr = [];
        for(let i = 0; i < friendsData.length; i++) {
            diffArr.push(diff(i));
        };
        let minIndex = diffArr.indexOf(Math.min(...diffArr));
        const modalName = friendsData[minIndex].name;
        console.log(`Index of Minimum: ${minIndex}\nThe Name to Modal: ${modalName}`);
        friendsData.push(newUser);
        console.log(`New array: ${friendsData}`); // <-------why does it show [object, Object]?
        console.log(friendsData);
    }
    findMatch();

  });
    
  app.post("/api/clear", function() {
       friendsData = [];
    console.log(friendsData);
  });
};
