const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);

const number = document.getElementById("number");

function getQuotes(e) {
    e.preventDefault();

    if (number.value.length == 0) {
        return alert("Please enter the number of Quote(s) you want to get")
    } else {
        const https = new XMLHttpRequest();
        https.open("GET", "https://type.fit/api/quotes", true);
        https.onload = function() {
            if (this.status === 200) {
               // console.log(this.responseText);
                const response = shuffle(JSON.parse(this.responseText));
               let output = "";
                for (i = 0; i < response.length; i++) {
                    if (i == number.value) {break;}
                    output += `
                        <li>Qoutes: ${response[i].text}</li>
                        <li>Author: ${response[i].author}</li>
                        <hr>
                   `
                }
                document.querySelector(".quotes").innerHTML = output;
            }
        }
        https.send();
    }
}

//I DONT UNDERSTAND THIS PART
function shuffle(quotes) {
    let CI = qoutes.length, tempValue, randomIndex;

    while (CI > 0) {
        randomIndex = Math.floor(Math.random() * CI);
        CI--;
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }

    return quotes;
}

    // response.forEach(function(quote) {
                //     output += `
                //         <li>Qoutes: ${quote.text}</li>
                //         <li>Author: ${quote.author}</li>
                //     `
                // })