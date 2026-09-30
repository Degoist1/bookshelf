const fs = require("fs");

// write 1000 lines using a write stream
const out = fs.createWriteStream("big.txt");
for (let i = 1; i <= 1000; i++) {
  out.write("This is line number " + i + "\n");
}
out.end();

out.on("finish", () => {
  console.log("big.txt written");

  // read it in small chunks using a read stream
  let chunks = 0;
  const input = fs.createReadStream("big.txt", { highWaterMark: 4096 });

  input.on("data", (chunk) => {
    chunks++;
    console.log("Got chunk", chunks, "of", chunk.length, "bytes");
  });

  input.on("end", () => {
    console.log("Finished reading, total chunks:", chunks);

    // copy using pipe
    const reader = fs.createReadStream("big.txt");
    const writer = fs.createWriteStream("copy.txt");
    reader.pipe(writer);

    writer.on("finish", () => {
      console.log("copy.txt created using pipe");
    });
  });
});