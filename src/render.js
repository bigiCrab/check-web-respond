const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

const $mainDiv = document.getElementById("mainDiv");
$mainDiv.innerText = "render.js load";

let rawTargetList = fs.readFileSync(path.resolve(__dirname, "./conf2/targetList.json"));
let targetList=JSON.parse(rawTargetList).targetList;
console.log(targetList);

targetList.forEach(element => {
    fetch(element.url)
      .then(function(response) {
        return response.text();
      })
      .then(function(myText) {
        console.log("myText: ", myText);
        $mainDiv.innerText = myText;
      })
      .catch(error => {
        console.error("error: ", error);
        $mainDiv.innerText = "Something broke!\r\n" + error;
      });
    
});
