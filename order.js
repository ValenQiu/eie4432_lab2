function calculatePrice() {
    var sizeInput = document.querySelector('input[name="sizes"]:checked');
    var drinkInput = document.getElementById("drinkInput");
    var price = 0;

    if (drinkInput.value === "default") {
        alert("Please select a drink first.");
        sizeInputs.forEach(function(input) {
            input.checked = false;
        });
    }

    if (drinkInput.value === "bubble-milktea") {
        if (sizeInput && sizeInput.id === "size1") {
            price = 20;
        } else if (sizeInput && sizeInput.id === "size2") {
            price = 30;
        } else if (sizeInput && sizeInput.id === "size3") {
            price = 35;
        }
    } else if (drinkInput.value === "iced-latte") {
        if (sizeInput && sizeInput.id === "size1") {
            price = 20;
        } else if (sizeInput && sizeInput.id === "size2") {
            price = 25;
        } else if (sizeInput && sizeInput.id === "size3") {
            price = 30;
        }
    }

    var priceElement = document.getElementById("price");
    priceElement.textContent = price.toFixed(2);
}

var form = document.getElementById("orderForm");
form.addEventListener("change", calculatePrice);