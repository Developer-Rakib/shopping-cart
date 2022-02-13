const iphonePrice = 1219;
const CasePrice = 59;

let subTotal = document.querySelector("#sub-total");
let casePricetotal = document.querySelector(".case-prices");
let phonePricetotal = document.querySelector(".phone-prices");
let taxt = document.querySelector("#taxt");
let totalCost = document.querySelector("#total-cost");

 

// plus fuction
function plusfunction (clsName, price, idName, setPriceEleName) {
    let PlusBtn = document.querySelector(clsName);

    PlusBtn.addEventListener("click", function  (e) {
        let childs = PlusBtn.parentNode.children;
        for (const child of childs) {
            if (child.id == idName) {
                child.value ++;
                let setPriceEle = document.querySelector(setPriceEleName);
                setPriceEle.innerText = price * parseInt(child.value);

                subTotalFuction()
                taxt.innerText = percentage(5, subTotalFuction());
                totalCOST ();
 
            }
        }
     })
     
}
function onchangeFn(clsName, quantity, price){
    let Quantity = document.querySelector(quantity);
    document.querySelector(clsName).innerText = price * parseInt(Quantity.value);

    subTotalFuction();
    taxt.innerText = percentage(5, subTotalFuction());

    totalCOST ();

}

// minus fuction

function minusfunction (clsName, price, idName, setPriceEleName) {
    let minusBtn = document.querySelector(clsName);
    minusBtn.addEventListener("click", function  (e) {
        let childs = minusBtn.parentNode.children;
        for (const child of childs) {
            if (child.id == idName) {
                if (child.value >= 1) {
                    child.value --;
                }
                document.querySelector(setPriceEleName).innerText = price * parseInt(child.value)

                subTotalFuction();
                taxt.innerText = percentage(5, subTotalFuction());

                totalCOST ();
                
            }
        }
     })
}
//  subtotal 
function subTotalFuction() {
    let total = parseInt(casePricetotal.innerText)+ parseInt(phonePricetotal.innerText)
    subTotal.innerText = total;
    return total;
}

// taxt fuction 
function percentage(percent, total) {
    return ((percent/ 100) * total).toFixed(2)
}
taxt.innerText = percentage(5, subTotalFuction());


// total cost 
function totalCOST () {
    let taxtAmount = taxt.innerText;
    totalCost.innerText = subTotalFuction() + parseInt(taxtAmount);
}
totalCOST ();


// case plus
plusfunction(".casePlus-btn", CasePrice, "case-quantity", ".case-prices");

// case minus
minusfunction(".caseMinus-btn", CasePrice, "case-quantity", ".case-prices")



// phone plus
plusfunction(".phonePlus-btn", iphonePrice, "Phone-quantity", ".phone-prices")

// phone minus
minusfunction(".phoneMinus-btn", iphonePrice, "Phone-quantity", ".phone-prices")

