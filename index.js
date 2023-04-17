import dogs from "./data.js";
import TinDog from "./Dog.js";

document.getElementById("cross").addEventListener("click", likeNope);
document.getElementById("like").addEventListener("click", likeNope);

let dogarray = ["Rex", "Bella", "Teddy"];
function getNewDoggy() {
  const NewdoggyData = dogs[dogarray.shift()];
  return NewdoggyData ? new TinDog(NewdoggyData) : {};
}

function endMatchMaking() {
  return `
        <div class = "endMessage">
        <p>Subscribe  TinDog For More</p>
         <button>Subscribe</button>      
        </div>
  `;
}

function likeNope(e) {
  if (e.target.dataset.name === "Cross") {
    dogs.hasBeenLiked = true;
    dogs.hasBeenSwiped = true;
    const cross = doggy.getcrossHtml();
    document.getElementById("dogImages").innerHTML = cross;
  } else if (e.target.dataset.name === "Like") {
    dogs.hasBeenLiked = true;
    dogs.hasBeenSwiped = true;
    const like = doggy.getLikeHtml();
    document.getElementById("dogImages").innerHTML = like;
  }
  checkswiped();
}

function checkswiped() {
  setTimeout(() => {
    if (dogs.hasBeenSwiped === true && dogarray.length > 0) {
      doggy = getNewDoggy();
      render();
    } else {
      document.getElementById("container").innerHTML = endMatchMaking();
    }
  }, 1000);
}

let doggy = getNewDoggy();

function render() {
  document.getElementById("dogsimgsec").innerHTML = doggy.getTinDogHtml();
}

render();
