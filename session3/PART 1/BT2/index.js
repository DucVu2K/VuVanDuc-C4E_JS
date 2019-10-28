let numbers=prompt('Enter a list numbers: ')
let list=numbers.split(',')
let sum=''
for (let i=0;i<list.length;i++)
{
    list[i]=Number(list[i])
    if(list[i]%2===0)
    {
        sum+=String(list[i])
        sum+=','
    }
    
}
console.log('All even number from enterd list: ',sum)