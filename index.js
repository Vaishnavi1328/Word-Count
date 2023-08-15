document.getElementById("find").addEventListener("click",calculate);

function calculate()
{
    let val=document.getElementById("input").value;
    if(val.length>0)
    {
        let ar=val.split(" ");
        document.getElementById("answer").innerHTML=`${ar.length} words`;
    }
    else
    {
        document.getElementById("answer").innerHTML=`type something...`
    }
}

document.getElementById("empty").addEventListener('click',()=>
{
    document.getElementById("input").value="";
    document.getElementById("answer").innerHTML="";
})







