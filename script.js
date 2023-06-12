
// fetching data from api using async and await 

async function fetchData() {
    try {
        for(let i = 1; i < 1331; i++) {
           let response = await fetch(`https://api-thirukkural.vercel.app/api?num=${i}`)
                const result = await response.json();
                const arr = [];                      // since the data is coming as separate objects 
                arr.push(result);                    // create an array and push all the objects    
                thiruvalluvar(arr);
        }
    }
    catch(error)
    {
        console.log(error);        // to catch the error and print...
    }
}


// function to render cards

function thiruvalluvar(data = []) {                   
    const cardsArray = [];
    const kuralListingContainers = document.getElementById("thirukkural");
    

    if(data.length > 0) {
        data.forEach((_d) => {
            const cardNode = document.createElement('div');
            cardNode.setAttribute("class","col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12");
            cardNode.innerHTML = `
            <div class="container">
            <div class="container-fluid">
        
    
            <div class="row">
            <div class="col"><div class="card">
                <div class="card-header">
                    <h3>குறள் : ${_d.number}</h3> 
                      <h3 style="display: inline-block;">பால் : ${_d.sect_tam}  ||</h3>    
                     <h3 style="display: inline;">இயல் : ${_d.chapgrp_tam}</h3>  
                    <h3 class="Chapter">அதிகாரம் : ${_d.chap_tam}</h3>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="kural"> <p>${_d.line1}</p>
                        <p>${_d.line2}</p></div>
                    </li>
                  <li class="porul">பொருள் : ${_d.tam_exp}</li>
                </ul>
    
                <div class="card-header">
                     
                     <h3 style="display: inline-block;">Section : ${_d.sect_eng}   ||</h3>
                         <h3 style="display: inline;">Chapter group : ${_d.chapgrp_eng}</h3> 
                         <h3 class="Chapter">Chapter : ${_d.chap_eng}</h3>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="kural" style="height:60px">
                        <p id="eng">${_d.eng}</p>
                        </div>
                    </li>
                  <li class="porul">Meaning : ${_d.eng_exp}</li>
                </ul>
              </div>
            </div>
            </div>
            </div>
            </div>
            <hr>
               `
               cardsArray.push(cardNode);
        });
        kuralListingContainers.append(...cardsArray);
    }
}
fetchData();











