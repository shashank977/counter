let count=0;

const value= document.querySelector("#value");
const btns= document.querySelectorAll(".btn");
console.log(value);
console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener('click', function(each){
        const styles = each.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        
        
    /*-----color-----*/

        if(count>0){
            value.style.color="green";
        }
        else if (count<0){
            value.style.color= "red";
        }
        else{
            value.style.color= "black";
        }
        value.textContent = count;
    });
});
