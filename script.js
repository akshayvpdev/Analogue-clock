
sec=document.querySelector("#sec")
min=document.querySelector("#min")
hr=document.querySelector("#hr")
function run(){
    const d=new Date()
    let s=d.getSeconds()
    let m=d.getMinutes()
    let h=d.getHours()

    srt=s*6
    mrt=m*6
    hrt=(30*h+m/2)

    sec.style.transform=`rotate(${srt}deg)`
    min.style.transform=`rotate(${mrt}deg)`
    hr.style.transform=`rotate(${hrt}deg)`

}
setInterval(run,1000);

const num = document.querySelectorAll("span")
const numArray =Array.from(num)
let deg = 0;
    numArray.forEach(p => {
        deg=deg+30
        p.style.transform=`rotate(${deg}deg)`
 });
  const numb=document.querySelectorAll("span b");
  const numbArray = Array.from(numb)
  let d = 0;
      numbArray.forEach(p=>{
        d=d-30
        p.style.transform=`rotate(${d}deg)`
      })




