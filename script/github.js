var textCountDownEl = document.querySelector('#countdown');
var myRepos = document.getElementById('my-repos');
var totalRepos =document.getElementById('total-repos');
var totalProject =document.getElementById('total-project');
//get my github repos
function getRepos () {
    var url = `https://api.github.com/users/vi3t4lov3/repos`;
    fetch(url)
    .then(response => response.json())
    .then(data => {console.log(data);
        var reposName = '';
        var count = 1;
        var reposUrl = '';
        for (var i = 0; i < data.length; i++) {
             reposName += `<li class="text-start">${data[i].name}</li>\n`;
             reposUrl += `${data[i].html_url}\n`;
            // var realTime = new Date(data[i].created_at);
            //  var newTime = moment.unix(realTime).format('DD mm yy')
            // console.log(realTime);
            // console.log(count)
            //links broken not working yet... update soon.
            totalRepos.textContent = `(${count++})`;
            myRepos.innerHTML = `<a href="${reposUrl}" target="_blank"> ${reposName}</a>`;
        }
        
    })
}
getRepos ()