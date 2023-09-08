var typed = new Typed(".text", {
    strings: [" College Student B.tech CSE Final year"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


var typed = new Typed(".text1", {
    strings: [" This website is basically one of my Web Development project."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});








function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function notif() {
    let btn = document.getElementById("btn")
    await sleep(2000)
    btn.textContent = "Sent Successfully !!"
    await sleep(6000)
    btn.textContent = "Send"
}
