const btn = document.getElementById('btn');

function randomColor(){
    let color = "0123456789ABCDEF";
    let random = "#";
    let index = Math.floor(Math.random()*color.length);

    for(let i = 0; i < 6; i++){
        random += color[index];
    }
    return random;
}
btn.addEventListener('click',()=>{
    document.body.style.background = randomColor();
});
