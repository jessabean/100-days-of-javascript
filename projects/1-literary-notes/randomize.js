var data={ "notes": [
  {
    "title": "Carrying the Fire",
    "author": 'Michael Collins',
    "quote": "Man has always gone where he has been able to go. It&rsquo;s that simple. He will continue pushing back his frontier, no matter how far it may carry him from his homeland."
  },
  {
    "title" : "Kitchen Confidential",
    "author": "Anthony Bourdain",
    "quote": "Bigfoot understood that there are two types of people in this world: those who do what they say they&rsquo;re going to do&mdash;and everyone else."
  },
  {
    "title" : "Oracle Night",
    "author": "Paul Aster",
    "quote": "We excreted autumn and winter colors, but running invisibly through our veins, the very stuff that kept us alive, was the crimson of a mad artist&mdash;a red as brilliant as fresh paint."
  },
  {
    "title": "The Sirens of Titan",
    "author": "Kurt Vonnegut",
    "quote": "&ldquo;Only an Earthling year ago,&rdquo; said Constant. &ldquo;It took us that long to realize that a purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.&rdquo;"
  },
  {
    "title": "The Martian",
    "author": "Andy Weir",
    "quote": "My asshole is doing as much to keep me alive as my brain."
  },
  {
    "title": "The Food Traveler&rsquo;s Handbook",
    "author": "Jodi Ettenburg",
    "quote": "But even if I am not asking questions, I am watching. While eating my soup at a crowded street stall, I can look around and see the patterns and pleasures of those around me."
  },
  {
    "title": "The Lathe of Heaven",
    "author": "Ursula K. Le Guin",
    "quote": "<p>&ldquo;The aim of psychotherapy is precisely this, to remove those groundless fears and nightmares, to bring up what&rsquo;s unconscious into the light of rational consciousness, examine it objectively, and find that there is nothing to fear.&rdquo;</p> <p>&ldquo;But there is,&rdquo; Orr said very softly.</p>"
  },
  {
    "title": "Verdigris Deep",
    "author": "Frances Hardinge",
    "quote": "The letters were bitter and funny and there were holes of unsaid where you could feel the demons breathing."
  },
  {
    "title": "Coraline",
    "author": "Neil Gaiman",
    "quote": "There was a cold, musty smell coming through the open doorway; it smelled like something very old and very slow."
  },
  {
    "title": "The Getting of Wisdom",
    "author": "Harry Handel Richardson",
    "quote": "&ldquo;I say, M.P., if everybody told stories, and everybody knew everybody else was telling them, then truth woudln't be any good at all, would it? If nobody used it?&rdquo;"
  },
  {
    "title": "Inspector Singh Investigates: A Most Peculiar Malaysian Murder",
    "author": "Shamini Flint",
    "quote": "Singaporeans were always adding to the list of reasons each one kept to hand, in case they met a Malaysian, of why it was so much better on the island than the peninsula. They ranged from law and order to cleanliness, from clean government to good schools, and always ended on the strength of the Singaporean economy. But in the end, the Malaysian would nod as if to agree to the points made&mdash;and then shrug to indicate that they probably wouldn’t trade passports, not really. And if pressed for a reason they would fall back on that old chestnut which somehow seemed to capture everything that was wrong about Singapore – but your government bans chewing gum."
  },
  {
    "title": "Henry VI, Part 1",
    "author": "William Shakespeare",
    "quote": "O, negligent and heedless discipline!<br />How are we park'd and bounded in a pale,<br />A little herd of England's timorous deer,<br />Mazed with a yelping kennel of French curs!<br />If we be English deer, be then in blood;<br />Not rascal-like, to fall down with a pinch,<br />But rather, moody-mad and desperate stags,<br />Turn on the bloody hounds with heads of steel<br/>And make the cowards stand aloof at bay:<br />Sell every man his life as dear as mine,<br />And they shall find dear deer of us, my friends.<br />God and Saint George, Talbot and England's right<br />Prosper our colors in this dangerous fight!"
  }
 ]
};

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];
  
  $('.quote-content').html(item.quote); 
  $('.quote-book').html(item.title);
  $('.quote-author').html(item.author);
}

$(document).ready(function() {
  randomize();
  $('.next').on('click', randomize);
});
