const getcolor = () => {
    let content ="";
    const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermil",
        "lion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
    const element=document.getElementById("colorContainer")
    for (const value of colorList) {
        content += `<button class="color-button ${value} " onclick="setcolor('${value}')"></button>`
    }
    element.innerHTML=content;
}
getcolor();
// const set = (second) => {third}
const setcolor = (value) => {
    document.getElementById('house').className = `house ${value}`;
}