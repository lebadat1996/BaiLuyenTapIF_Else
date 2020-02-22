function check() {
    let a = parseInt(document.getElementById("number").value);
    if (a === 0){
        alert('day la so 0');
    }
    else if (a*(-1) < 0 )
    {
        alert('day la so lon hon 0')
    }else {
        alert('day la so nho hon 0')
    }
}