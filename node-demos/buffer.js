// create a buffer from a string
const buf = Buffer.from("BookShelf");
console.log(buf);
console.log("Length:", buf.length);
console.log("As text:", buf.toString());
console.log("As hex:", buf.toString("hex"));
console.log("As base64:", buf.toString("base64"));

// an empty buffer of 5 bytes
const empty = Buffer.alloc(5);
console.log(empty);

// write into it
empty.write("Hi");
console.log(empty.toString());

// join two buffers
const joined = Buffer.concat([Buffer.from("Book"), Buffer.from("Shelf")]);
console.log(joined.toString());

// first byte
console.log("First byte:", buf[0]);