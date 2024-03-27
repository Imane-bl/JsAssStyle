
let input1=document.querySelector(".one")
let input2=document.querySelector(".two")
let input3=document.querySelector(".three")
let s=document.querySelector("select")

///hna session bach yb9a mhtafd bles donnes f l page ki  nghl9 fenetre ltma yrou7
input1.oninput=function(){
  window.sessionStorage.setItem("input1",input1.value);
}
input2.oninput=function(){
    window.sessionStorage.setItem("input2",input2.value);
  }
  input3.oninput=function(){
    window.sessionStorage.setItem("input3",input3.value);
  }
s.onchange=function(){
    window.sessionStorage.setItem("s",s.value);
    document.body.style.color=s.value
     
}
//ki nktb dakhl input bach mayrouhouch w yb9aw ki ndir reload 
input1.value=window.sessionStorage.getItem("input1")
input2.value=window.sessionStorage.getItem("input2")
input3.value=window.sessionStorage.getItem("input3")
document.body.style.color=window.sessionStorage.getItem("s")
s.value= window.sessionStorage.getItem("s")
