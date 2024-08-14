// let counter = document.querySelector('.counter');

// let count=1;

// setInterval(()=>{
//     if(count<=75){
//         count++;
//         counter.innerText = count;
//     }
// },100);

let counters = document.querySelectorAll('.counter');
let time = 300;

counters.forEach(counter => {
    let updateCount = () => {
        let target = +counter.getAttribute('data-target');
        let count= +counter.innerText;



        let increment = target/time;
        if(count <target){
            counter.innerHTML = Math.ceil(count+increment);
            setInterval(updateCount,100);
        }
        else{
            counter.innerText =target;
        }
    };
    
    
    updateCount();

});


let healthCondition = document.querySelector('.health');

setTimeout(() => {
    healthCondition.innerText= "You are FIT";
    
}, 2000);