var fetchData = function (url) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (url) {
                resolve("Data from ".concat(url));
            }
            else {
                reject("No URL provided");
            }
        }, 1000);
    });
};
fetchData("https://example.com")
    .then(function (data) {
    console.log(data); // Output: Data from https://example.com
})
    .catch(function (error) {
    console.error(error);
});
