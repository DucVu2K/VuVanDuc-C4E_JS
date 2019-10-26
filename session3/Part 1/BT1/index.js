let list=[5,10,15,20,25]
let sum=''

for(let i=0;i<list.length;i++)
{
    if(list[i]%2===0)
    {
        sum+=String(list[i]);
        sum+=','
    }
}

console.log(`All even number: `,sum)
