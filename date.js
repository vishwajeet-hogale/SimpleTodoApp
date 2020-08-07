const clock =  document.querySelector(".clock");
let f=0;
const alert = document.querySelector("#put");
const flash = (li) =>{
    
        if(li.remainder == false){
            alert.innerHTML +=`<div class="alert alert-success alert-dismissible fade show" role="alert">
            Please complete ${li.todo}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            `
            li.remainder = true;
        }
   
}
let g=0;
const tick = () =>{
    alert_message.classList.add("display-it");
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const n = `${h}:${m}`;
    let a = [];
    let i = [];
    tds.forEach((obj,index) => {
        if(obj.time == n && obj.remainder != true){
            
            flash(obj);
            f++;
            console.log(obj);
        }
        if(f>0){
            f++;
        }
    });
    
    console.log(a,f);
    if(f == 10){
        alert.innerHTML = "";
        f=0;
    }
    
    
    const html = `
    <span>${h} h</span> :
    <span>${m} m</span> :
    <span>${s} s</span>
    `;
    clock.innerHTML = html;
};
setInterval(tick,1000);