let s1=document.querySelector(".sl1")
let s2=document.querySelector(".sl2")
let s3=document.querySelector(".sl3")


s1.style.cssText =
"width:100px;height:50px;background-color:#eee;display:flex;justify-content: center; align-items:center;gap:60px;margin-top:30px"

s2.style.cssText =
"width:100px;height:50px;background-color:#eee;display:flex;justify-content: center; align-items:center;gap:10px;margin-top:30px"
s3.style.cssText =
"width:100px;height:50px;background-color:#eee;display:flex;justify-content: center; align-items:center;gap:40px;margin-top:30px"


s1.onchange = function(){
    window.localStorage.setItem("s1",s1.value);
    document.body.style.fontFamily=s1.value;
    }
    s2.onchange = function(){
        window.localStorage.setItem("s2",s2.value);
        document.body.style.color=s2.value;
        }
        s3.onchange = function(){
            window.localStorage.setItem("s3",s3.value);
            document.body.style.fontSize=s3.value;
            }
//******************************************************************************** */
         //drna haka bach lvalue mattbdlch  
           document.body.style.fontFamily=window.localStorage.getItem("s1")
            document.body.style.color=window.localStorage.getItem("s2")
            document.body.style.fontSize=window.localStorage.getItem("s3")
            
    
//******************************************************************************** */

            //bach nkhli select kima khyrt lazm hak
            //genre haka if i choose re 30px hayb9aw mm ki ndir refrech li lpage ta3i

s1.value = window.localStorage.getItem("s1")
s2.value = window.localStorage.getItem("s2")
s3.value = window.localStorage.getItem("s3")

