document.getElementById("submit").addEventListener("click", getData);

function getData() {
    axios.get("https://fedeperin-harry-potter-api-en.herokuapp.com/characters")
        .then(response => {
            console.log(response.data)
            console.log(response.data[0].character);
            for (let i = 0; i < response.data.length; i++) {
                const array = response.data[i].character;
                console.log(array);
                const div = document.createElement("li");
                div.textContent = array;
                div.setAttribute("class", "data_elements")
                document.body.appendChild(div);
                div.addEventListener('click', function() {
                    div.style.textDecoration = "line-through"
                });
            };
        })
        .catch(error => console.log(error));
};