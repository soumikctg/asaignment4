function Covid() {
  document.getElementById("country").style.visibility="visible";
  var searchText = document.getElementById("search").value;
  fetch(`https://api.covid19api.com/country/${searchText}`)
  .then (res => res.json() )
  .then (data => display(data) );
}

function display(data) {
  console.log(data);
    var content = document.getElementById("search-result");
    for (var i=0; i<data.length; i++){
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="col row-cols-1 row-cols-m-3 g-4">
          <div class="col" id="col">
            <div class="card h-100">
              <div class="card-body">
                  <h3 class="card-title">${data[i].Country}</h3>
                  <p class="card-text"><h4>Information:</h4><b>ID: </b>${data[i].ID}<br/><b>Countrycode: </b>"<b>${data[i].CountryCode}</b>"<br/><b>Affected: </b>${data[i].Confirmed}<br/><b>Death: </b>${data[i].Deaths}<br/><b>Recovered: </b>${data[i].Recovered}<br/><b>Active: </b>${data[i].Active}<br/><b>Date: </b>${data[i].Date}</p>
              </div>
            </div>
          </div>
        </div>`;
      

      content.appendChild(newDiv);
    }
}
// ------------------------------------------------------------------------------------------------------


function country_details(){
  var name = document.getElementById("search").value;
  fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then (res => res.json() )
  .then (data => display1(data) );
}

function display1(data){
  console.log(data);
  var content=document.getElementById('country');
  var newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div class="card h-100">
          <img src="${data[0].flags.png}" class="card-img-top" alt="">
          <div class="card-body">
              <p class="card-text"><h4>Information:</h4><b>Capital: </b>${data[0].capital}<br/><b>Population: </b>${data[0].population}<br/><b>Area of Country: </b>${data[0].area}</p>
          </div>
        </div> `;
    content.appendChild(newDiv);
}


