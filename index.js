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

    rocket.style.left = `${Math.floor(Math.random()*100)}%`
    rocket.onanimationend = e => {
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
            rocket.classList.remove('rocket');
            rocket.classList.add('rocket');
            rocket.style.display = "block"
            fire.style.display = "none"            
        }
        e.target.style.display = "none";
    }
}