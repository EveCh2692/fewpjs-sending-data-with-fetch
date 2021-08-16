let submitData = {
    name: "Steve",
    email: "steve@steve.com"
};
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(submitData)
}

fetch ("http://localhost:3000/users", configurationObject)
  .then(function(response) {
      return response.json();
       
  })
 
 