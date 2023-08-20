function getData(){
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "titleDiv text-center mt-2 py-5");
  titleDiv.innerHTML = `
          <h1>India Post(post-offices)</h1>
          
          <h4>This api will return all the details of post offices present in given city.</h4>`;

  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "inputDic text-center")
  const inputCity = document.createElement("input");
  inputCity.setAttribute("class", "inputCity m-2");
  inputCity.setAttribute("type", "text");
  inputCity.setAttribute("placeholder", "Enter city name")

  const button = document.createElement("button");
  button.innerText="Get PostOffices";
  button.setAttribute("class", "btn btn-primary btn-sm m-2")
 button.addEventListener("click", getPostOffice);

  inputDiv.appendChild(inputCity)
  inputDiv.appendChild(button)
  document.body.appendChild(titleDiv);
  document.body.appendChild(inputDiv);
 
 
}

async function getPostOffice(){
    
    const re = document.getElementsByClassName("output")[0];
    if(re !== undefined){
        re.remove();
    }
    var city = document.getElementsByClassName("inputCity")[0].value;
    //console.log(city.value)
    
    const postOfficeUrl = `https://api.postalpincode.in/postoffice/${city}`
    try{
        const output = document.createElement("div");
        output.setAttribute("class", "output m-5");
        const response = await fetch(postOfficeUrl);
        
        const postoffices = await response.json();
        const status = postoffices[0].Status;
        console.log(postoffices)

        if(status === 'Success'){
            
            const dataTable = document.createElement("TABLE");
            dataTable.setAttribute("class", "table table-striped")
            const head = `<tr>
              <th>Name</th>
              <th>BranchType</th>
              <th>DeliveryStatus</th>
              <th>Circle</th>
              <th>Division</th>
              <th>District</th>
              <th>State</th>
              <th>Pincode</th>
              
          </tr>`;
          
          dataTable.innerHTML = head;
          postoffices[0].PostOffice.forEach((postoffice) => {
            var row = `
                  <tr>
                      <td>${postoffice.Name}</td>
                      <td>${postoffice.BranchType}</td>
                      <td>${postoffice.DeliveryStatus}</td>
                      <td>${postoffice.Circle}</td>
                      <td>${postoffice.Division}</td>
                      <td>${postoffice.District}</td>
                      <td>${postoffice.State}</td>
                      <td>${postoffice.Pincode}</td>
                     
      
                  </tr>
              `;
      
            dataTable.innerHTML += row;
          });
          output.appendChild(dataTable);
        }else{
            const message = document.createElement("h4");
            message.innerHTML="No data found for the given city!!"
            output.appendChild(message);
        }
        document.body.appendChild(output)
    }catch(error){
        console.log(Error)
    }

  
    
}