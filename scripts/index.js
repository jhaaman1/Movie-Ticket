// Store the wallet amount to your local storage with key "amount"

document.querySelector("#add_to_wallet").addEventListener("click", myfunc)

    function myfunc(){

        let div = document.createElement("div")

        let amount = document.querySelector("#amount").value;

        let wallet = document.querySelector("#wallet").value;

        div.append(amount,wallet)

        
    }
