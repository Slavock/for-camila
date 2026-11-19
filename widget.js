// For Camila: a new little artwork and love note on your home screen every day.
// Made for the free Scriptable app. Setup: Scriptable > + > paste this > name it "For Camila".
// Then on the home screen: long-press > + > Scriptable > Large (or Small) > Add, tap it to edit, Script = "For Camila".

const BASE = "https://slavock.github.io/for-camila/";
const KINDS = ["bouquet", "crimson", "obsession", "moonlight", "lavender", "sakura", "blush", "teddy", "heart", "bunny", "cupcake", "kitty"];
const NOTES = [
  "Every day with you is my favorite day.", "You make my heart smile.", "I'd pick you in every lifetime.",
  "You're my safe place.", "Thinking about you, like always.", "Your laugh is my favorite sound.",
  "You and me are my favorite story.", "I'm so lucky it's you.", "You look beautiful today. You always do.",
  "I can't wait to see you.", "You're my sunshine on cloudy days.", "Holding your hand is my favorite thing.",
  "You make ordinary days feel special.", "I love you more than yesterday.", "You're cuter than any cupcake.",
  "My heart is all yours.", "I hope today is as sweet as you.", "You're my favorite notification.",
  "Every flower here is for you.", "You're my person.", "Sending you a million hugs.",
  "You make everything better.", "I'm proud of you, always.", "You and me, forever.",
  "Smile, someone loves you a lot. Me.", "You're the best part of my day.", "Home is wherever you are.",
  "You deserve all the flowers.", "Thank you for being you.", "I love you, Camila."
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
