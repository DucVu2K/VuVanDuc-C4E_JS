async function getdata() {
    const response=await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json');
    const data=await response.json();
    return data;
}
async function handlesubmit() {
    const container=document.getElementById('container')
    const data=await getdata();
    const random=Math.floor(Math.random() * data.length);
     container.innerHTML=`<p> QuoteText: ${data[random].quoteText}</p><p> QuoteAuthor: ${data[random].quoteAuthor}</p>`;
    
}
function main() {
    const button=document.getElementById('button');
    button.addEventListener('click', handlesubmit);
}
main();