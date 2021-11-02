window.onload = () => {
    for (let i = 0; i < 20; i++) {
        let e = document.querySelector(`.firework .spark:nth-child(${i + 1})`)
        e.style.transform = `rotate(${18 * i}deg)`;
    }
    let rocket = document.querySelector('.rocket');
    console.log(rocket)
    rocket.onanimationend = e => {
        console.log('rocket and')
        let fire = document.querySelector('.firework')
        // fire.style.background = "red"
        rocPos = e.target.getBoundingClientRect();
        rocX = rocPos.x
        rocY = rocPos.y
        fire.style.top = rocY
        fire.style.left = rocX
        fire.style.display = "block";
        fire.onanimationend = e => {
            console.log('firework and')
            rocket.classList.remove('rocket');
            rocket.classList.add('rocket');
            rocket.style.display = "block"
            fire.style.display = "none"            
        }
        console.log(rocX, rocY);
        e.target.style.display = "none";
    }
}