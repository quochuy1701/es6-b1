const getText = () => {
    let Text = document.getElementById("heading").innerHTML;
    let chars = [...Text];
    let content ="";
    for (const value of chars) {
        content += `<span>${value}</span>`
    }
    document.getElementById("heading").innerHTML = content;
}
getText();