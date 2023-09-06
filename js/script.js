// scroll sections

let 

window.onscroll = () => {
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.screenY > 100);
}

console.log("eeee");