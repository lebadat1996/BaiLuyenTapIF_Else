function result() {
    let a = parseInt(document.getElementById("point1").value);
    let b = parseInt(document.getElementById("point2").value);
    let c = parseInt(document.getElementById("point3").value);
    sum = a + b + c;
    if (sum === 30) {
        alert('xep hoai xuat sac');
    }
    if (sum < 30 && sum >= 25) {
        alert('xep loai gioi');
    }
    if (sum >= 20 && sum < 25) {
        alert('xep loai kha')
    }
    if (sum >= 10 && sum < 20) {
        alert('xep loai trung binh');
    }
    if (sum < 10) {
        alert('xep loai yeu');
    }
}