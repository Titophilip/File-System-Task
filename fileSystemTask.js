const fs = require("fs");
const https = require("https");

// Making an API call from jsonplaceholder.
const req = https.get('https://jsonplaceholder.typicode.com/posts', res => {
  let data = "";
  console.log('Status Code:', res.statusCode);

  res.on('data', chunk => {
    data +=chunk;
  });

  res.on('end', () => {
    console.log('Response ended.');
    
    // Creating and writing to the posts.json file.
    fs.writeFile("result/posts.json", data, "utf-8", (error) => {
      if (error) {
          throw error;
      };
      console.log("C'est fini.");
    });
  });
});

req.on('error', err => {
  console.log('Error: ', err.message);
});
