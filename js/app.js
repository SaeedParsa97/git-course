const boxes = document.querySelectorAll('.item');


function colorGenerator()
{
    const c = Math.floor(Math.random()*5547688)+1;
    return c
}

function coorizer(){

    boxes.forEach((el)=>{
        el.style.backgroundColor = `#${colorGenerator()}`
    });

    setTimeout(()=>{
        coorizer()
    },100)
}


coorizer()