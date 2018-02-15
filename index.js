function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    theBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesPlay;
}

const facts = [
"He hated the sound of his own voice",
"He was a choir boy and boy scout",
"He was never a vegetarian",
"He was the last Beatle to learn to drive"

];

function johnLennonFacts(facts) {
  var johnLennonFacts = [];
  let i = facts.length;
  while (i > 0) {
    --i;
    johnLennonFacts.push(`${facts[i]}!!!`)
  }
  return johnLennonFacts;
}
