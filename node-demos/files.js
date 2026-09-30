const fs = require("fs");

// write a new file
fs.writeFileSync("notes.txt", "BookShelf notes\n");
console.log("File created");

// add more text to it
fs.appendFileSync("notes.txt", "Wings of Fire - finished\n");
fs.appendFileSync("notes.txt", "Atomic Habits - reading\n");

// read it back (sync)
const data = fs.readFileSync("notes.txt", "utf8");
console.log("Sync read:");
console.log(data);

// read it again (async)
fs.readFile("notes.txt", "utf8", (err, text) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("Async read done, length:", text.length);
});

// file details
const info = fs.statSync("notes.txt");
console.log("Size in bytes:", info.size);

// check, rename and delete
console.log("Exists:", fs.existsSync("notes.txt"));
fs.renameSync("notes.txt", "old-notes.txt");
fs.unlinkSync("old-notes.txt");
console.log("File deleted");

console.log("End of script");