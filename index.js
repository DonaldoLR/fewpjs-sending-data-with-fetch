// Add your code here
function submitData(name, email){

    let formData = {
        name: name,
        email: email
    };
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObj)
        .then(res => res.json())
        .then(obj => {
            const createP = document.createElement('p');
            createP.innerText = obj.id

            document.body.appendChild(createP);
        })
        .catch(errorObj => {
            const errorMessage = errorObj.message;
            const createP = document.createElement('p');

            createP.innerText = errorMessage;

            document.body.appendChild(createP);

        })
}

// submitData('Chase', 'chase@gmail.com')