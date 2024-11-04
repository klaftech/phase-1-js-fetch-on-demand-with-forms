const init = () => {
    const inputForm = document.querySelector("form");

    const updateDbDom = function(data){
        console.log(data)
        const ul = document.querySelector("ul")
        ul.textContent = ''
        
        const li = document.createElement("li")
        const h3 = document.createElement("h3")
        const div = document.createElement("div")
        div.textContent = `ID: ${data.id}`
        h3.textContent = data.title
        
        li.append(h3)
        li.append(div)
        ul.append(li)
    }

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");
        const queryId = input.value

        fetch(`http://localhost:3000/movies/${queryId}`)
        .then((response) => response.json())
        .then((data) => {
            //updateDbDOM(data)
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            summary.innerText = data.summary;
        })
    });
}

document.addEventListener('DOMContentLoaded', init);

