// For Camila: a new little artwork and love note on your home screen every day.
// Made for the free Scriptable app. Setup: Scriptable > + > paste this > name it "For Camila".
// Then on the home screen: long-press > + > Scriptable > Large (or Small) > Add, tap it to edit, Script = "For Camila".

const BASE = "https://slavock.github.io/for-camila/";
const KINDS = ["bouquet"];
const NOTES = [
  "I hope today is as beautiful as you are",
  "You walk in beauty, like the night of starry skies",
  "I hope you smiled today",
  "The stars came out tonight just to look at you",
  "Thinking about you, like always",
  "Shall I compare you to a summer's day? You are more lovely",
  "I hope your day is gentle with you",
  "Some beauty is loud. Yours is quiet, and it stays",
  "You make everything better, just by being you",
  "You're the kind of beautiful that makes the world slow down",
  "I'm so proud of you",
  "Light finds you first, then everything else",
  "I hope you know how loved you are",
  "Even the moon looks a little shy next to you",
  "Can't wait to see you",
  "You're beautiful in a way words keep trying to catch",
  "You deserve the softest, happiest day",
  "The universe made a lot of stars, then it made you",
  "I'm lucky it's you",
  "Your smile is my favorite view",
  "I hope today brings you something sweet",
  "Every sunset tries, but you're still the prettiest thing I've seen",
  "Missing you a little more than yesterday",
  "You glow without even trying",
  "Whatever today brings, I'm on your side",
  "You're my favorite person",
  "I hope you feel as special as you are",
  "Don't forget to take care of yourself today",
  "Every day with you is a good day",
  "I hope the sun is kind to you today",
  "You make me want to be better",
  "Sending you a hug from here",
  "I hope someone makes you laugh today",
  "You're beautiful, inside and out",
  "I'm always here for you",
  "I hope you rest well tonight",
  "Still falling for you",
  "You're the best part of my day",
  "I hope today feels light",
  "Good things are coming your way",
  "Thank you for being you",
  "I love you, Camila"
];

const now = new Date();
const day = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(2026, 10, 18)) / 86400000);
const pick = (list) => list[((day % list.length) + list.length) % list.length];
const kind = pick(KINDS), note = pick(NOTES);

const w = new ListWidget();
w.backgroundColor = new Color("#0c0c0c");
w.url = BASE;
try {
  w.backgroundImage = await new Request(BASE + "daily/" + kind + ".png").loadImage();
} catch (e) {
  const t = w.addText("♥");
  t.font = Font.boldSystemFont(40); t.textColor = new Color("#ff6fb5");
}
const msg = w.addText(note);
msg.font = Font.boldRoundedSystemFont(config.widgetFamily === "small" ? 10 : 14);
msg.textColor = new Color("#ffd6ec");
msg.shadowColor = new Color("#000000", 0.9);
msg.shadowRadius = 4;
msg.centerAlignText();
w.addSpacer();

// refresh just after midnight, so tomorrow brings a new picture and note
w.refreshAfterDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 5);

if (config.runsInWidget) Script.setWidget(w);
else await w.presentLarge();
Script.complete();
