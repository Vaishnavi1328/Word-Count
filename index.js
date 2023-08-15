document.getElementById("find").addEventListener("click",calculate);

function calculate()
{
    let val=document.getElementById("input").value;
    let ar=val.split(" ");
    console.log(ar.length);
    document.getElementById("answer").innerHTML=`${ar.length} words`;
}

document.getElementById("empty").addEventListener('click',()=>
{
    document.getElementById("input").value="";
    document.getElementById("answer").innerHTML="";
})







