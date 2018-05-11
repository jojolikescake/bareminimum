
var rewardbox = document.querySelector(".actionbox");
var bed= document.querySelector("#bed").id
var rewardbox = document.querySelector(".rewardbox")

var actionbox =  document.querySelector(".actionbox")

   actionbox.addEventListener("click", runReward);
   function runReward() {
     if (bed=="bed") {
       rewardbox.style.display = 'block';

      }

   }

   var myvar= 1
