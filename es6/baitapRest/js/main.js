const tinhdiemtbkhoi1 = () => {
    let diemToan=document.getElementById("inpToan").value;
    let diemLy=document.getElementById("inpLy").value;
    let diemHoa=document.getElementById("inpHoa").value;
    tinhdiemtb(diemToan,diemLy,diemHoa);
}
const tinhdiemtbkhoi2 = () => {
    let diemVan=document.getElementById("inpVan").value;
    let diemSu=document.getElementById("inpSu").value;
    let diemDia=document.getElementById("inpDia").value;
    let diemTA=document.getElementById("inpEnglish").value;
    tinhdiemtb(diemVan,diemSu,diemDia,diemTA);
}
const tinhdiemtb = (...diemtb) => {
    let content = 0;
    console.log(diemtb);
    for (const value of diemtb) {
        content += Number(value)
    }
    if (diemtb.length ==3) {
        document.getElementById("tbKhoi1").innerHTML =  Number.parseFloat(content/3).toFixed(2);
        
    } else {
        document.getElementById("tbKhoi2").innerHTML =Number.parseFloat(content/4).toFixed(2);
        
    }
}