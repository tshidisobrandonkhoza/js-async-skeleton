//remote json file
const url = `https://jsonplaceholder.typicode.com/todos/`;

//local json file
// install npm install -g json-server
// terminal>>> json-server -p 4000 (port since 3000 used ) -w  ./data/usersdb.json (path to watch the file)
const localurl = `http://localhost:4000/users`;

const request = new XMLHttpRequest();
//xhr method taking parameters (method,url,async, user, password)
//syntax open(type, API end point, default-true, null, null)

// request.addEventListener('readystatechange', () => {
//      //console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(request.responseURL)
//     }
// })


//xhr method taking parameters (method,url,async, user, password)
//syntax open(type, API end point, default-true, null, null)
//open request
request.open('GET', localurl);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//set the response type "" - text - arrayBuffer -blob - document - json
request.responseType = "text";

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
request.onload = () => {


    //ready state properties CODE(0)-UNSENT / CODE(1)-OPENED(opened -invoked) / 
    //CODE(2)-HEADERS_RECEIVED(send -invoked) CODE(3)-LOADING(response body received~responseType)/ CODE(4)-DONE 
    if (request.readyState == request.DONE) {
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        //check the status Code of the request to see what was recived from the server
        //types of status code 100-infomation/ 200-success/ 300 -redirection /400 - client error /500-- server error
        if (request.status == 200) {
            //check response URL if using local url
            console.log(request.responseURL);

            console.log(request.responseText);

            //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            
        } else {
            console.log('cant find the data');
        }
    }
};



request.send();

