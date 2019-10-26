let list=[7,8,9,3,10]
let a='.    '
// console.log('High scores: ')
// for(let i=0;i<list.length;i++)
// {
//     console.log(i+'.'+list[i])
// }

// /////Bai 10
// let add=prompt('Enter your new score: ')
// list.push(add)
// console.log('High scores: ')
// for(let i=0;i<list.length;i++)
// {
//     console.log(i+'.'+list[i])
// }

////// Bai 11
// let temp
// for(let i=0;i<list.length;i++)
// {for(let j=1;j<i;j++)
//    {     if(list[i]<list[j])
//         {
//             temp=list[i];
//             list[i]=list[j];
//             list[j]=temp;
//         }
//     }
// }
// console.log('High scores: ')
// for(let i=0;i<list.length;i++)
// {
//     console.log(i+'.'+list[i])
// }1
///Them diem
let add=prompt('Enter your new score: ')
list.push(add)
for(let i=0;i<=list.length;i++)
{for(let j=0;j<i+1;j++)
    if(list[j]<list[i])
    {
        temp=list[i];
        list[i]=list[j];
        list[j]=temp;
    }
}
console.log('High scores: ')
for(let i=0;i<list.length;i++)
{
    console.log(i+'.'+list[i])
}
add=prompt('Enter your new score: ')
list.push(add)
for(let i=0;i<=list.length;i++)
{for(let j=0;j<i+1;j++)
    if(list[j]<list[i])
    {
        temp=list[i];
        list[i]=list[j];
        list[j]=temp;
    }
}
console.log('High scores: ')
for(let i=0;i<5;i++)
{
    console.log(i+'.'+list[i])
}
