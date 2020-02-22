function check() {
    let a = parseInt(document.getElementById("number1").value);
    let b =parseInt(document.getElementById("number2").value);
    let c =parseInt(document.getElementById("number3").value);
    if (a>b && a>c){
        alert('a la so lon nhat');
    }
    if (b>a && b>c){
        alert('b la so lon nhat');
    }
    if (c>a && c>b){
        alert('c la so lon nhat');
    }
}