let input = document.querySelector('.text-input');
let wordCountBtn = document.querySelector('.word-count');
let charCountBtn = document.querySelector('.char-count');
let ClearBtn = document.querySelector('.clear');
let wordres = document.querySelector('.wordRes');
let a = document.querySelector('#wordP');
let charres = document.querySelector('.charRes');
let b = document.querySelector('#charP');

wordCountBtn.addEventListener('click', () => {
    let txt = input.value;
    let count = 0;
    a.style.opacity = 1;
    //exclude  start and end white-space
    txt = txt.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1  
    txt = txt.replace(/[ ]{2,}/gi, " ");
    // exclude newline with a start spacing  
    txt = txt.replace(/\n /, "\n");
    count = txt.split(' ').length;
    if(txt==="")
    {
        count=0;
    }
    wordres.innerHTML = count;

})
charCountBtn.addEventListener('click', () => {
    let txt1 = input.value;
    let p=0;
    let count1 = 0;
    b.style.opacity = 1;
     for(i=0;i<txt1.length;i++)
     {
        if(txt1.charAt(i)==" ")
        {
            p++;
        }
     }
    count1 = txt1.length-p;
    
    charres.innerHTML = count1;
})
ClearBtn.addEventListener('click', () => {
    input.value = "";
    b.style.opacity = 0;
    a.style.opacity = 0;

})
