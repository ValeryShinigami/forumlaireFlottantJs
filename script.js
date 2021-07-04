function move()
{
    let x = document.getElementById('soumettre');
    let pos = 0;
    let id = setInterval(frame, 5);
    function frame()
    {
        if (pos == 385){
            clearInterval(id); 
            
        }else{
            pos++;
            x.style.visibility='visible'; 
            x.style.left = pos + "px";
        }
        
    }
}

function moveLeft()
{
    let x = document.getElementById('login');
    let pos = 0;
    let id = setInterval(frame, 5);
    function frame()
    {
        if (pos == 385){
            clearInterval(id); 
            
        }else{
            pos++;
            x.style.visibility='visible'; 
            x.style.right = pos + "px";
        }
        
    }
}