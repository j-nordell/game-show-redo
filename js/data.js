
// collection of phrases to be used as strings
let phrases = [
  "when pigs fly",
  "over the moon",
  "in hot water",
  "you lucky dog",
  "storm in a teacup",
  "proud as a peacock",
  "keep your hat on",
  "raining cats and dogs",
  "two peas in a pod",
  "give him a hand",
  "break a leg",
  "in the doghouse",
  "let the cat out of the bag",
  "money to burn",
  "sick as a dog",
  "bed of roses",
  "laugh your head off",
  "piece of cake",
  "easy as pie",
  "cool as a cucumber",
  "fit as a fiddle",
  "let sleeping dogs lie",
  "smell a rat",
  "two birds with one stone",
  "get the axe",
  "the early bird catches the worm",
  "red as a beet",
  "busy as a beaver",
  "pretty as a picture",
  "old as the hills",
  "not for all the tea in china",
  "play by ear",
  "happy as a clam",
  "big bang for your buck",
  "an arm and a leg",
  "blast from the past",
  "bury the hatchet",
  "cold turkey",
  "fall off the wagon",
  "cut to the chase",
  "dead ringer",
  "doom and gloom",
  "down the tubes",
  "face the music",
  "filthy rich",
  "fly off the handle",
  "get down to brass tacks",
  "get your goat",
  "go postal",
  "have an axe to grind",
  "hold your horses",
  "joined at the hip",
  "jury is still out",
  "keep your chin up",
  "lose your marbles",
  "no dice",
  "paint the town red",
  "pass the buck",
  "rise and shine",
  "red letter day",
  "run of the mill",
  "smoke and mirrors",
  "spill the beans",
  "take the cake",
  "the whole nine yards",
  "put a lid on it",
  "kick the bucket",
  "buy the farm",
  "cash in your chips",
  "bite the dust",
  "dear john",
  "gee whiz",
  "give up the ghost",
  "lose your lunch",
  "penny for your thoughts",
  "your two cents",
  "worse for wear",
  "five finger discount",
  "pleased as punch",
  "light as a feather",
  "blind as a bat",
  "cold as ice",
  "hard as nails",
  "hot as hell",
  "white as a ghost",
  "black as coal",
  "fight like cats and dogs",
  "clear as mud",
  "like watching grass grow",
  "like watching paint dry",
  "easy as shooting fish in a barrel",
  "nutty as a fruitcake",
  "loony bin",
  "go over like a lead balloon",
  "different as night and day",
  "thin as a rake",
  "sleep like a log",
  "fits like a glove",
  "dry as a bone",
  "deep as the ocean",
  "stand out like a sore thumb",
  "green thumb",
  "take a crack at",
  "just peachy",
  "right as rain",
  "on cloud nine",
  "back to the drawing board"
];

// collection of message to display when someone wins the game
const winningMessages = [
  "Terrific",
  "Spectacular",
  "Awesome",
  "Fantastic",
  "Way to go",
  "Amazing",
  "Good job",
  "Excellent",
  "Impressive",
  "Wonderful",
  "Magnificent",
  "Great work",
  "Genius",
  "Brilliant",
  "Super",
  "Superb",
  "You rock",
  "Like a boss",
  "Marvelous",
  "Stellar",
  "Out of this world",
  "First-class",
  "First-rate",
  "Second to none",
  "Congratulations"
];

// collection of messages to display when someone loses the game
const losingMessages = [
  "Too bad",
  "Try again",
  "Better luck next time",
  "You'll get it next time",
  "Give it another go",
  "Not this time",
  "Sorry",
  "Awwwwwww",
  "That's a shame",
  "Rotten luck",
  "Bummer",
  "Unfortunate",
  "What a pity"
];

// UTF codes for emojis associated with happiness to be displayed on win messages
const winEmojis = [
  "1F60D",
  "1F60E",
  "1F4AF",
  "1F44D",
  "1F64C",
  "1F9E0",
  "1F31F",
  "1F947", // medal
  "1F3C6"  // trophy
];

// UTF codes for emojis associated with sadness to be displayed on win messages
const loseEmojis = [
  "1F615",
  "2639",
  "1F626",
  "1F622",
  "2620",
  "1F44E"
];

// colorse to be used when a player wins generally bright/happy
const winColors = [
  "#00FFFF", // aqua
  "#7FFFD4", // aquamarine
  "#FF7F50", // coral
  "#8FBC8F", // dark sea green
  "#FF1493", // deep pink
  "#00BFFF", // deep sky blue
  "#FFD700", // gold
  "#DAA520", // goldenrod
  "#ADFF2F", // green yellow
  "#FFB6C1", // light pink
  "#FFA07A", // light salmon
  "#87CEFA", // light sky blue
  "#FF00FF", // magenta
  "#66CDAA", // medium aquamarine
  "#BA55D3", // medium orchid
  "#00FA9A", // medium spring green
  "#C71585", // medium violet red
  "#FFA500", // orange
  "#FF4500", // orange-red
  "#FA8072", // salmon
  "#87CEEB", // sky blue
  "#40D0D0", // turquoise
  "#EE82EE"  // violet
];

// colors to be used when a player loses generally dark/gloomy
const loseColors = [
  "#000000", // black
  "#5F9EA0", // cadet blue
  "#6495ES", // cornflower blue
  "#00008B", // dark blue
  "#008B8B", // dark cyan
  "#006400", // dark green
  "#B8860B", // dark goldenrod
  "#A9A9A9", // dark gray
  "#8B008B", // dark magenta
  "#8B0000", // dark red
  "#483D8B", // dark slate blue
  "#2F4F4F", // dark slate grey
  "#696969", // dim gray
  "#808080", // gray
  "#4B0082", // indigo
  "#191970", // midnight blue
  "#808000", // olive
  "#6B8E23", // olive drab
  "#800080", // purple
  "#663399", // rebecca purple
  "#8B4513", // saddle brown
  "#6A5ACD", // slate blue
  "#4682B4", // steel blue
  "#008080", // teal
  "#708090"  // slate gray
];