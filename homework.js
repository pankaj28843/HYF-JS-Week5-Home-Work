function fetchData(url, callbackFunction) {
    // Create new ajax call with the js function called XMLHttpRequest
    const req = new XMLHttpRequest();

    req.addEventListener('load', function (data) {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            const responseText = req.responseText;
            const json = JSON.parse(responseText);

            // Call the callback function with json data
            callbackFunction(json);
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    req.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    req.open("GET", url);

    // Sends the request
    req.send();
}

function fetchRepos() {
    const HYFReposURL = 'https://api.github.com/orgs/HackYourFuture/repos';

    const repositoriesElement = document.querySelector('#repositories');
    repositoriesElement.innerHTML = '';

    fetchData(HYFReposURL, function (repositories) {
        console.log('All repositories:', repositories);

        for (const repo of repositories) {
            const li = document.createElement('li');
            repositoriesElement.appendChild(li);

            // const repoUrl = 'https://api.github.com/repos/HackYourFuture/' + repo.name;
            // li.innerHTML = '<a href="' + repoUrl + '" target="_blank">' + repoUrl + '</a>';


            li.innerHTML = '<a href="' + repo.url + '" target="_blank">' + repo.url + '</a>';



        }
    });
}

const myButton = document.querySelector('#myButton');

const myButtonClickHandler = function () {
    console.log('you clicked me!');
    fetchRepos();
};

myButton.addEventListener('click', myButtonClickHandler);


