//Bai 3
let Quan=['ST','BD','BTL','CG','ĐĐ','HBT'];
let Danso=[150.300,247.100,333.300,266.800,420.900,318.000]
let min=Danso[0]
let max=Danso[0]
let a=0
//Bai 4 && Bai 5
for(let i=1;i<Danso.length;i++)
{
    if(Danso[i]>max)
    {
        max=Danso[i]
        a=i
    }
}
console.log('Quận có dân số lớn nhất là :',Quan[a])
a=0
for(let i=1;i<Danso.length;i++)
{
    if(Danso[i]<min)
    {
        min=Danso[i]
        a=i
    }
}
console.log('Quân có dân số ít nhất là: ',Quan[a])


//Bai 6
let Dientich=[117.43,9.224,43.35,12.04,9.96,10.09]
let Matdo=[]
let sum=0
for(let i=0;i<Dientich.length;i++)
{
    Matdo.push(Danso[i]/Dientich[i])
    sum+=Matdo[i]
}
//Bai 7
let MDDC=sum/Quan.length
console.log('Mật độ dân cư trung bình: ',MDDC)