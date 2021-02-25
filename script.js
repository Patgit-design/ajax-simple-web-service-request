/*//Create the XHR Object
let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://thatsthespir.it/of/howard-mumford-jones/ours-is-the-age-which-is-proud-of-machines-that-think-and-suspicious-of-men-who-try-to', true)
    //call the onload 
xhr.onload = function() {
        var parser = new DOMParser();

        //check if the status is 200(means everything is okay)
        if (this.status === 200) {
            //return server response as an object with JSON.parse
            document.getElementById("quote").innerText.JSON.parse(this.responseText);
        } else {
            alert("ERROR");
        }
    }
    //call send
xhr.send();
console.log(xhr);


//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN
*/


const loadData = () => {
    const req = new XMLHttpRequest();
    req.onload = reqListener;
    req.open("get", "https://thatsthespir.it/api", true);
    req.send();
};

const reqListener = response => {
    let temp = JSON.parse(response.currentTarget.response);

    document.getElementById('quote').innerHTML = temp.quote
    document.getElementById('author').textContent = temp.author
    document.getElementById('image').src = temp.photo

};
window.onload = () => {
    const loadButton = document.getElementById("load");
    loadButton.onclick = loadData;
};
loadData();