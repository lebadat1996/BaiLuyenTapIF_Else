function moneyPhone() {
    let a = parseInt(document.getElementById("money").value);
    if (a<50){
         topay = (a*600) + 25000;
         alert(topay);
    }
    else if (a < 150){
        topay = (a*400) + 25000;
        alert(topay);
    }
    else if (a < 200){
        topay = (a*200) + 25000;
        alert(topay);
    }
}