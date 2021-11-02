window.onload = () => {

    let body = document.querySelector('body')

    let element = (tag, arg, child) => {
        let element = document.createElement(tag);
        element.innerHTML = child ? child : "";
        if (arg) {
            for (i in arg) element.setAttribute(i, arg[i])
        }
        return element
    }

    let sendroc = element("div", { class: "sendroc" })
    let spark = element("div", { class: "spark" })
    let firework = element("div", { class: "firework" })
    let rocket = element('div', { class: "rocket" })

    for (let i = 0; i < 20; i++) {
        let org = spark.cloneNode()
        org.style.transform = `rotate(${18 * i}deg)`;
        firework.appendChild(org);
    }

    sendroc.appendChild(firework);
    sendroc.appendChild(rocket);
    body.appendChild(sendroc);

    // for (let i = 0; i < 20; i++) {
    //     let e = document.querySelector(`.firework .spark:nth-child(${i + 1})`)
    //     e.style.transform = `rotate(${18 * i}deg)`;
    // }
    // let rocket = document.querySelector('.rocket');
    rocket.style.left = `${Math.floor(Math.random()*100)}%`
    rocket.onanimationend = e => {
        console.log('rocket and')
        // let fire = document.querySelector('.firework')
        let fire = firework
        colors = ["red",'yellow','lime','magenta','aqua','orange','white']
        fire.style.background = colors[Math.floor(Math.random()*7)]
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