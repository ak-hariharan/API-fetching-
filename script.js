const table = document.querySelector(".table");
url = "https://jsonplaceholder.org/users";

fetch('https://jsonplaceholder.org/users')
    .then((response) => response.json())
    .then((data) => data.forEach(element => {
        const temp = `<tr>
                            <td>${element.firstname}</td>
                            <td>${element.lastname}</td>
                            <td>${element.email}</td>
                            <td>${element.birthDate}</td>
                      </tr>`;
        table.insertAdjacentHTML('beforeend', temp);
    })
);
