
function calculateSupply(){
    let Age=prompt('Nhap tuoi: ');
    let maxAge=prompt('Nhap tuoi max: ');
    let amountPerday=prompt('Nhap so luong snack moi ngay: ')
    let amountconsumed=amountPerday*365*(maxAge-Age);
    alert(`You will need ${amountconsumed} to last you until the ripe old age of ${maxAge}`) 
}

for(let i=0;i<3;i++){
    calculateSupply();
}