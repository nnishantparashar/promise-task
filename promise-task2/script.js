

async function getData() {

  const container = document.createElement("div");
  container.setAttribute("class", "container");
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "titleDiv text-center mt-2 py-5");
  titleDiv.innerHTML = `
          <h1>ISRO Setellites</h1>
          
          <h4>This page lists all the customer setellites details which was launched by ISRO.</h4>`;

  const dataDiv = document.createElement("div");
  dataDiv.setAttribute("class", "dataDiv m-5");
  const dataTable = document.createElement("TABLE");
  dataTable.setAttribute("class", "table table-striped")
  const head = `<tr>
    <th>ID</th>
    <th>Country</th>
    <th>Launch_date</th>
    <th>Mass</th>
    <th>Launcher</th>
</tr>`;

dataTable.innerHTML = head;
    dataDiv.appendChild(dataTable)
  document.body.appendChild(titleDiv);
  document.body.appendChild(dataDiv)

  const setelliteDataUrl = "https://isro.vercel.app/api/customer_satellites";
  try {
    const response = await fetch(setelliteDataUrl);
    const setellites = await response.json();
    const setellites_list = setellites.customer_satellites
   
    setellites_list.forEach((setellite) => {
      
        var row = `
              <tr>
                  <td>${setellite.id}</td>
                  <td>${setellite.country}</td>
                  <td>${setellite.launch_date}</td>
                  <td>${setellite.mass}</td>
                  <td>${setellite.launcher}</td>
                 
  
              </tr>
          `;
  
        dataTable.innerHTML += row;
      });

  } catch (error) {
    console.log(Error);
  }
}
