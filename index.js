window.onload = () => {

    let seeni = () => {
        let body = document.querySelector('body')
        let music = document.querySelector('audio')

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

        let sparkWidth,sparkHeight = undefined

        if(window.innerWidth < window.innerHeight){
            sparkWidth = ".3vw"
            sparkHeight = "20vw"
        }else {
            sparkWidth = ".3vh"
            sparkHeight = "20vh"
        }

        for (let i = 0; i < 30; i++) {
            let org = spark.cloneNode()
            org.style.transform = `rotate(${12 * i}deg)`;
            org.style.width = sparkWidth
            org.style.height = sparkHeight
            firework.appendChild(org);
        }

        rocket.onanimationend = e => {
            let fire = firework;
            let colors = ["red", 'yellow', 'lime', 'magenta', 'aqua', 'orange', 'white']
            fire.style.background = colors[Math.floor(Math.random() * 7)]
            rocPos = e.target.getBoundingClientRect();
            rocX = rocPos.x
            rocY = rocPos.y
            fire.style.top = rocY
            fire.style.left = rocX
            fire.style.display = "block";
            let leftPos = ['20%', '40%', '60%', '80%']
            let topPos = ['25%',"50%",'38%']
            let aniDly = ['1s',".5s","2s","1.5s"]
            rocket.style.left = leftPos[Math.floor(Math.random() * 4)]
            rocket.style.top = topPos[Math.floor(Math.random() * 3)]
            rocket.style.animationDelay = aniDly[Math.floor(Math.random() * 4)]
            fire.onanimationend = e => {
                rocket.classList.remove('rocket');
                rocket.classList.add('rocket');
                rocket.style.display = "block"
                rocket.style.visibility = "hidden"
                fire.style.display = "none"
            }
            e.target.style.display = "none";
        }
        rocket.onanimationstart = () => {
            rocket.style.visibility = "visible"
            let promise = music.play();
            promise.catch(() => {})
        }

        sendroc.appendChild(firework);
        sendroc.appendChild(rocket);
        body.appendChild(sendroc);
    }

    seeni();
    seeni();
    seeni();
    seeni();
    seeni();
    seeni();
    seeni();
    seeni();
    seeni();
    seeni();

}