
// Graduate Student Life
var gsc = ["Paper published", "Attended a conference", "Zoom committee meeting", "Engaged/married/new kids", "Worked with a medical student/PT student/undergrad", "Went hiking/biking/swimming/fishing", "Finished a book/tv series", "Watched the Olympics", "Learned a new research technique", "Took a course", "Applied for funding", "Went on vacation out of state", "Hung out with other students/coworkers outside of lab", "Perfected a new recipe", "Got actual tan lines", "Visited a brewery/winery", "Saw a movie in theaters", "Worked weird hours to complete experiments", "Danced/sang in lab to pass time", "Science related injury", "Got locked out", "Moved apartments/houses", "Adopted a pet", "Filled up a notebook or ran out of sticky notes", "Used a whiteboard", "Gave a presentation", "Had to fix equipment", "Discovered you are now the resident expert"]
var p = gsc.length;

// Hallmark
var hallxmas = ["Main character wears plaid/flannel", "Widow/widower", "Putting up decorations", "Santa makes an appearance", "Drinking hot cocoa", "Precocious child", "Setting up a parent", "Orphan", "Panning shot over city or small town", "Small town business owner", "Lesson learned", "Holiday spirit found", "Characters collide", "Special ornaments", "Carousel appearance", "Fake snow", "Bad CGI/stunt double", "Secret royalty", "Saving the festival/local business", "First kiss at the end", "Original bf/gf is not the one", "Ice skating", "Holiday themed names", "More than 3 coats", "Red dress", "Mistaken identity", "Pensive mug sipping", "Meddling best friend", "Minority side character", "Community tree lighting"]
var h = hallxmas.length;

// Star Trek
var startrek = ["Holodeck malfunction", "Human and alien get frisky", "Energy beings", "Screw the prime directive!", "Stealing alien technology", "Their escape is thrwarted", "Red alert", "Lens flare", "Vulcan mind meld", "Phasers set to stun", "Another spacecraft is destroyed", "Transporters are interfered", "Shields down to 15%", "Redshirt dies", "Tachyons", "Artfully ripped clothing", "Aliens look just like people", "The laws of physics are broken", "Someone is bluffing", "Time travel", "Neck pinch", "Judo chop", "Episode is directed by an actor", "Technical nonsense", "Picard reads an old book", "Tie in to another series", "Beamed up", "Medical mystery", "Alien species that is never seen again", "Data has an emotion", "Work is done with your shit", "One episode romance", "Scantily clad ladies for no reason", "Warp core", "Glittery costume", "Bad/tacky set design", "We see the inside of Data", "Ship gets damaged", "Amnesia"]
var s = startrek.length;

// Schitt's Creek
var schitt = ["'Ewww David'", "Moira wears more than 2 wigs", "Stevie wears flannel", "David is wearing any color other than black and white", "'I love that for you'", "Someone asks for a ride", "Someone hosts an event", "Moira mispronounces a word", "Alexis calls her 'Twy'", "Sunrise Bay", "Alexis talks about her wild past", "David name-drops", "Town council meeting", "Musical performance", "Alexis is single", "'Quick question'", "David is clearly the favorite child", "Boop'd", "Orders tea", "Stocking products at Rose Apothecary", "A wig is named", "Can't stay at the motel", "Elmdale", "Someone from the Roses' past", "Mutt makes an appearance", "Dramatic hand gestures", "Johnny has a plan"]
var c = schitt.length;

// Grey's Anatomy
var grey = ["A fight over surgery", "Someone is punched/slapped", "Jumped some bones", "Cool surgical caps", "A patient dies", "They probably should get sued for that", "Meredith and Cristina banter", "Someone other than Meredith is narrating", "Appears in a dream/vision", "Surgical case is relevant to personal drama", "Beloved patient", "Surgical/medical error", "Drinking at Joe's", "Bailey saves the day", "Medical mystery", "Tumor causes weird neurologic symptoms", "Patient is scooped by another doctor", "Meredith gets called 'hot'", "Wild experimental medical innovation on the spot", "Attending sleeps with intern", "Crazy roommate situation", "Someone gets published", "Code blue", "'OR board is a mess'", "Cheating on partner", "Plot is relevant to real-world issues", "Heels in the hospital"]
var g = grey.length;

// Bachelorette
var chris = ["'Not here for the right reasons'", "Animal shot", "Convertible", "Bitter about group date", "'Here to find my wife/husband'", "'Journey'", "Reference previous contestants", "Series villain", "Part-time or former career", "Rose petals", "Druken melt-down", "Make-out sesh", "'Most _____ season ever!' or 'First time in Bachelor history!'", "'Can I steal you?'", "'I'm falling for them'", "Tears shed", "Jewelry in pool/hot tub", "Cheers", "'Learning about myself'", "'Fairytale'", "'I deserve love'", "'I never thought I'd be back'", "'I opened myself up'", "Helicopter ride", "Fantasy Suite", "Confident in getting a rose", "Big decision to make", "Classic Chris Harrison", "Product placement", "'Connection'", "'Find love'", "Staring into the distance with monologue over the shot", "'Not here to make friends'", "'Hard for me to open up'", "'Ready for love'", "Not enough alone time", "Medical emergency!"]
var b = chris.length;

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
  for (var i = 0; i < t; i++) {
    document.getElementById(i).style.backgroundColor = "white";
  }
  ans = document.getElementById("mySelect").value;
    if (ans == "phys") {
    var list = range(1, p);
    rand = shuffle(list);
    for (var i = 0; i < t; i++) {
      document.getElementById(i).innerHTML = gsc[(rand[i]) - 1];
    }
  }
  if (ans == "hall") {
    var list = range(1, h);
    rand = shuffle(list);
    for (var i = 0; i < t; i++) {
      document.getElementById(i).innerHTML = hallxmas[(rand[i]) - 1];
    }
  }
  if (ans == "spock") {
    var list = range(1, s);
    rand = shuffle(list);
    for (var i = 0; i < t; i++) {
      document.getElementById(i).innerHTML = startrek[(rand[i]) - 1];
    }
  }
  if (ans == "david") {
    var list = range(1, c);
    rand = shuffle(list);
    for (var i = 0; i < t; i++) {
      document.getElementById(i).innerHTML = schitt[(rand[i]) - 1];
    }
  }
  if (ans == "surg") {
    var list = range(1, g);
    rand = shuffle(list);
    for (var i = 0; i < t; i++) {
      document.getElementById(i).innerHTML = grey[(rand[i]) - 1];
    }
  }
  if (ans == "bach") {
    var list = range(1, b);
    rand = shuffle(list);
    for (var i = 0; i < t; i++) {
      document.getElementById(i).innerHTML = chris[(rand[i]) - 1];
    }
  }
}

for (var i = 0; i < t; i++) {
  var td = document.getElementById(i);
  td.addEventListener("click", crossoff);
}

function crossoff() {
  var set = document.getElementById(this.id).style.backgroundColor;
  if (set == "maroon") {
    document.getElementById(this.id).style.backgroundColor = "white";
  } else {
    document.getElementById(this.id).style.backgroundColor = "maroon";
  }
}
