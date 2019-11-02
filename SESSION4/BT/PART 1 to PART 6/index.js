let shop={
    HP: 20,
    DELL: 50,
    MACBOOK: 12,
    ASUS: 30,
    ACER:100,
}
// ///2
// console.log(shop.MACBOOK)

// ///////////////////////


// alert('Ban ten gi')


// /////////////////////
// ///3
// let key=prompt('Nhap Hang can kiem tra: ')
// console.log(shop[key])
// ///4
 shop['TOSHIBA']=10
// console.log(shop.TOSHIBA)
// ///5
// key=prompt('Nhap hang moi: ')
// let value=prompt('Nhap so luong: ')
// shop[key]=Number(value)
// ///6
// shop.DELL=shop.DELL+10
// console.log(shop.DELL)
// shop.MACBOOK=2
// ///7
// for(let i in shop)
// {
//     console.log(i+': ',shop[i])
// }
// ///8
// let sum=0
// for(let i in shop)
// {
//     sum+=shop[i]
// }
// console.log('Tong: ',sum)
// ///9
 shop['FUJITSU']=15
 shop['ALIENWARE']=5
// ///10
// for(let i in shop)
// {
//     console.log(i+': ',shop[i])
// }
//  sum=0
// for(let i in shop)
// {
//     sum+=shop[i]
// }
// console.log('Tong: ',sum)
////PART 4
//1
let gia={
    HP: 600,
    DELL: 650,
    MACBOOK: 12000,
    ASUS: 400,
    ACER: 350,
    TOSHIBA: 600,
    FUJITSU: 900,
    ALIENWARE: 1000
}
// //2
// console.log(gia.ASUS);
// //3
// let key=prompt('Nhap hang may can kiem tra gia: ');
// console.log(gia[key]);
// //4
// let donhang=5;
//  let tongdonhang=donhang*gia.ASUS;
// // console.log('Tong gia tri 5 may ASUS la: ',tongdonhang);
// //5
// key=prompt('Nhap hang may: ');
// donhang=prompt('Nhap so luong: ');

// tongdonhang=donhang*gia[key];
// console.log('Tong gia tri don hang la: ',tongdonhang);
// //6
// shop[key]-=donhang;
// console.log(shop[key])
// //7
// key=prompt('Nhap hang may: ');
// donhang=prompt('Nhap so luong: ');
// shop[key]-=donhang;
//8
let giatri={}
for(let i in shop){
    giatri[i]=shop[i]*gia[i];
}
console.log(giatri);
//9
let sum=0;
for(let i in giatri){
    sum+=giatri[i];
}
console.log('Tong gia tri cac may la: ',sum)

