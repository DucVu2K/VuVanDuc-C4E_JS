let Skill = [{
    Skill: 1,
    Name:['Tackle'],
    Minimum_level: 1,
    Damage: 5,
    Hit_rate: 0

},
{
    Skill: 2,
    Name: ['Quick attack'],
    Minimum_level: 2,
    Damage: 3,
    Hit_rate: 0.5,

},
{
    Skill:3,
    Name: ['Strong Kick'],
    Minimum_level: 4,
    Damage: 9,
    Hit_rate: 0.2

}
];
//console.log(Skill)
for(let i=0;i<Skill.length;i++){
    console.log(i+1+': ',Skill[i]);
}
///17+18
let level=1;
let a=Math.random();
console.log(a)
for(let i=0;i<Skill.length;i++){
    console.log(i+1+': ',Skill[i]);
}

let chon=prompt('Chon skill: ');

if(chon>level){
    console.log('Ban chua du level (*-*)');
}
else if(chon<=level)
{
    console.log(Skill[chon-1].Damage)
    
    if(a<Skill[chon-1].Hit_rate){
        console.log(Skill[chon-1].Damage);
        level++;
    }
    else if(a>Skill[chon-1].Hit_rate)
    {
        console.log('Khong trung muc tieu');
    }
}
///18


// if(a<Skill[chon-1].Hit_rate){
//     console.log(Skill[chon-1].Damage);
//     level++;
// }
// else if(a>Skill[chon-1].Hit_rate)
// {
//     console.log('Khong trung muc tieu');
// }
