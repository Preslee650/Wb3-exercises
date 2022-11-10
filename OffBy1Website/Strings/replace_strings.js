let text = "Our corporate offices are located in Dallas"; // original text
let newText = text.replace("Dallas", "Austin"); // text.replace(what part im changing, new part)
console.log(newText)//output 

let text2 = "Our corporate offices are located in Dallas"; // original text
let newText2 = text.replace(/DALLAS/i, "Austin"); // /i makes what you input case insensitive so dallas in all caps will work but wont show up in all caps
console.log(newText2)//output