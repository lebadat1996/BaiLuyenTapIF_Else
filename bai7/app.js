function percent() {
    let a = parseInt(document.getElementById("percen").value);
    if (a<=100000000){
        earned = a*0.05;
        alert('So tien kiem duoc  la: ' + earned);
    }
    else if (a <= 300000000){
        earned = a*0.1;
        alert('so tien kiem duoc la: ' + earned);
    } else {
        earned = a*0.2;
        alert('so tien kiem duoc la: ' + earned);
    }
}