// Hallmark
var hallxmas = ["Main character wears plaid/flannel", "Widow/widower", "Putting up decorations", "Santa makes an appearance", "Drinking hot cocoa", "Precocious child", "Setting up a parent", "Orphan", "Panning shot over city or small town", "Small town business owner", "Lesson learned","Holiday spirit found","Characters collide","Special ornaments","Carousel appearance","Fake snow","Bad CGI/stunt double","Secret royalty","Saving the festival/local business","First kiss at the end","Original bf/gf is not the one","Ice skating","Holiday themed names","More than 3 coats","Red dress","Mistaken identity","Pensive mug sipping","Meddling best friend","Minority side character","Community tree lighting"]
var h = hallxmas.length;

// Startrek
var startrek = ["Holodeck malfunction", "Human and alien get frisky", "Energy beings","Screw the prime directive!","Stealing alien technology","Their escape is thrwarted","Red alert", "Lens flare","Vulcan mind meld","Phasers set to stun","Another spacecraft is destroyed","Transporters are interfered","Shields down to 15%","Redshirt dies","Tachyons","Artfully ripped clothing","Aliens look just like people","The laws of physics are broken","Someone is bluffing","Time travel","Neck pinch","Judo chop","Episode is directed by an actor","Technical nonsense","Picard reads an old book","Tie in to another series","Beamed up","Medical mystery","Alien species that is never seen again","Data has an emotion","Work is done with your shit","One episode romance","Scantily clad ladies for no reason","Warp core","Glittery costume","Bad/tacky set design"]
var s = startrek.length;

var t = 24;
var rand = 0;
var i = 0;

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function populate() {
  document.getElementById("hide").style.display = "Block";
  ans = document.getElementById("mySelect").value;
  if (ans == "hall") {
    var list = range(1, h);
    rand = shuffle(list);
    console.log(rand);
    for (var i = 0; i < t; i++) {
      document.getElementById(i).innerHTML = hallxmas[(rand[i]) - 1];
    }
  }
  if (ans == "spock") {
    var list = range(1, s);
    rand = shuffle(list);
    console.log(rand);
    for (var i = 0; i < t; i++) {
      document.getElementById(i).innerHTML = startrek[(rand[i]) - 1];
    }
  }
}
