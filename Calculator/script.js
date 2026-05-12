let current = "";

function add(value) {

    if (current === "0" && value !== "+" && value !== "-" && value !== "*" && value !== "/") {
        current = value;
    } else {
        current += value;
    }

    document.getElementById("screen").textContent = current;
}

function result() {
    current = eval(current).toString();
    document.getElementById("screen").textContent = current;
}

function del() {
    current = current.slice(0, -1);
    document.getElementById("screen").textContent = current;
}