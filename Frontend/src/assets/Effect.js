var ins = 1;
function cursor()
{
    var cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+ (e.pageY -7.5) +"px ; left: "+ (e.pageX -7.5) + "px;");
        }
    );
}
function Clickbtn(id)
{
    var ids = document.getElementById(id);
    if(ids.classList.contains("show"))
    {
        ids.classList.remove("show");
        window.ins = 1
    }
    else
    {
        ids.classList.add("show");
        window.ins = 2
    }
}

window.onclick = function(event){
    if (window.ins == 2){
    var cls = [".bt1", ".bt2", ".bt3",".Button","#menu",".menuitem",".mi"];
    var call = false;
    for(var i = 0 ; i<cls.length ; i++)
    {
        if (event.target.matches(cls[i])){
            call = true;
            i = cls.length
        }
    }
    if(!call)
        {
            var removeshow = document.getElementById('mi')
            if(removeshow.classList.contains("show"))
            {
                removeshow.classList.remove("show")
                window.ins = 1
            }
        }
}
}