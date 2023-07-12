
//remote json file
const url = `https://jsonplaceholder.typicode.com/todos/`;
//local json file
// install npm install -g json-server
// terminal>>> json-server -p 4000 (port since 3000 used ) -w  ./data/usersdb.json (path to watch the file)
// json-server -p 4000  -w  ./data/usersdb.json
const localurl = `http://localhost:4000/users`;



//making code reusable - (receive resources as url)
const getRequestData = resources => {

    //wrap everything in a Promise Object
    //Promise object receives two function argument (resolve, rejected)
    return new Promise((resolve, reject) => {
        //XHR Object
        const request = new XMLHttpRequest();

        //xhr method taking parameters (method,url,async, user, password)
        //syntax open(type, API end point, default-true, null, null)
        //open request
        request.open('GET', resources);

        //set the response type "" - text - arrayBuffer -blob - document - json
        request.responseType = "text";

        request.onload = () => {
            //ready state properties CODE(0)-UNSENT/ CODE(1)-OPENED(opened -invoked)  
            // CODE(2)-HEADERS_RECEIVED(send -invoked)/ CODE(3)-LOADING(response body received~responseType)/ CODE(4)-DONE 
            if (request.readyState == request.DONE) {

                //check the status Code of the request to see what was received from the server
                //types of status code 100-infomation/ 200-success/ 300 -redirection/ 400 - client error/ 500-- server error
                if (request.status == 200) {
                    //check response URL if using local url
                    //console.log(request.responseURL);

                    //convert response Text data to a JSon Object
                    const dataOb = JSON.parse(request.responseText);

                    //use the promise function resolve
                    resolve(dataOb)
                } else {

                    //use the Promise function reject
                    reject('cant find the data status code: ' + request.status);
                }
            }
        };
        request.send();
    });
};


getRequestData(localurl).then(data => {
    //catch the resolved Promise 1
    console.log(data)

    //chain promises - sending Promise 2
    return getRequestData(url);
}).then(data => {
    //catch the resolved Promise 2
    console.log(data)

}).catch(err => {
    //catch the rejected Promise
    console.log(err)
});
