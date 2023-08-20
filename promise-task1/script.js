

async function getData() {

    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "titleDiv text-center mt-2 py-5");
    titleDiv.innerHTML = `
            <h1>Gutendex</h1>
            
            <h4>Project Gutenberg ebook metadata</h4>`;
  
    const dataDiv = document.createElement("div");
    dataDiv.setAttribute("class", "dataDiv m-5");
    const dataTable = document.createElement("TABLE");
    dataTable.setAttribute("class", "table table-striped")
    const head = `<tr>
      <th>ID</th>
      <th>Title</th>
      <th>Author(s)</th>
      <th>Language</th>
      <th>Download Count</th>
  </tr>`;
  
  
  dataTable.innerHTML = head;
      dataDiv.appendChild(dataTable)
    document.body.appendChild(titleDiv);
    document.body.appendChild(dataDiv)
  
    const gutendexUrl = "https://gutendex.com/books";
    try {
      const response = await fetch(gutendexUrl);
      const gutendex = await response.json();
      const metadata = gutendex.results;
     
      metadata.forEach((book) => {
        
          var row = `
                <tr>
                    <td>${book.id}</td>
                    <td>${book.title}</td>
                    <td>${book.authors[0].name}</td>
                    <td>${book.languages}</td>
                    <td>${book.download_count}</td>
                   
    
                </tr>
            `;
    
          dataTable.innerHTML += row;
        });
  
    } catch (error) {
      console.log(Error);
    }
  }
  