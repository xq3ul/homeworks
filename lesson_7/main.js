class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
        this.price = options.price
    }
    start() {
        console.log("Машина заведена")
    }

}


class Toyota extends Cars {
    constructor(options) {
        super(options);
    }
}



const toyota = new Toyota({
        model: " fortuner",
        color: "white",
        wheels: 4,
        price: "20000$"
    }
)


class Mazda extends Cars{
    constructor(options) {
        super(options);
    }
}


const mazda = new Mazda({
    model: "RX-7",
    color: "Red",
    wheels: 12,
    price: "50000$"
})

class Nissan extends Cars {
    constructor(options) {
        super(options);
    }
}


const nissan = new Nissan({
    model: "skyline",
    color: "blue",
    wheels: 4,
    price: "80000$"
})

nissan.start()
mazda.start()
toyota.start()


class Light
{
    constructor(selector) {
        this.$element = document.getElementById(selector)
    }
}


class Circle extends Light
{
    constructor(options) {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt("Выберите цвет светофора").toLowerCase()
if (color === "красный") {
    const red = new Circle({
        selector: "red",
        color: "red",
        text: "stop"
    })
} else if(color === "желтый") {
    const yellow = new Circle({
        selector: "yellow",
        color: "yellow",
        text: "wait"

    })
} else if(color === "зеленый") {
    const green = new Circle({
        selector: "green",
        color: "green",
        text: "go"

    })
} else {
    alert("Вы должны ввести цвет светофора: красный, желтый, зеленый")
}

