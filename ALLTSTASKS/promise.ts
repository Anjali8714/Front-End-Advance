const fetchData = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url) {
          resolve(`Data from ${url}`);
        } else {
          reject("No URL provided");
        }
      }, 1000);
    });
  };
  
  fetchData("https://example.com")
  .then((data) => {
    console.log(data); // Output: Data from https://example.com
  })
  .catch((error) => {
    console.error(error);
  });
