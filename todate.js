const addForm = document.querySelector(".add");
const li = document.querySelector(".todos");
const search = document.querySelector(".search input");
const time = document.querySelector("#gtime");
const alert_message = document.querySelector(".alert-boy");
// const alert_message1 = document.querySelector(".alert-b");

let tds = [];

const repetion = (todo)=>{
    let a = Array.from(li.children)
    .filter(t => t.textContent.trim().toLowerCase() == todo);
    
    if(a.length){
        return true;
    }
    else{
        return false;
    }

};


const generateTemplate = (todo,time) =>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center ">
                    <span>${todo}</span><span>${time}</span>
                    <i class="fa fa-trash-o delete pl-3" aria-hidden="true"></i>
                   </li>`;
    li.innerHTML += html;
};


addForm.addEventListener('submit',event=>{
    event.preventDefault();
    alert_message.classList.add("display-it");
    const time = addForm.time.value;
    const todo = addForm.add.value.trim().toLowerCase();
    const obj = new object(time,todo);
    if(!repetion(todo)){
        if(todo.length>0){
            generateTemplate(todo,time);
            tds.push(obj);
            addForm.reset();
        }
    }
    else{
            
            alert_message.classList.remove('display-it');
            alert_message.innerHTML = "Todo already exists";
            addForm.reset();
    }       
});

li.addEventListener('click',e=>{
    console.log(e)
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        tds = tds.filter(t => (`${t.todo}` == e.target.textContent.trim().toLowerCase()));
        // console.log(tds);
        
    }
});
const filterTodo = (term) => {
    

    Array.from(li.children)
    .filter(todo => !todo.textContent.includes(term))
    .forEach(todo=>todo.classList.add('filtered'));

    Array.from(li.children)
    .filter(todo =>todo.textContent.includes(term))
    .forEach(todo =>todo.classList.remove('filtered'));

    };

search.addEventListener('keyup',event=>{
    const term = search.value.trim().toLowerCase();
    console.log(term);
    filterTodo(term); 
})

