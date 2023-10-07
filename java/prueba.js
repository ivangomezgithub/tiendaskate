

const banner = document.getElementById ("bannerAnim")
banner.textContent = ("holamundo");
banner.classList.add ("banner");
;



window.addEventListener("mousemove", (e) => {
        let yPos = e.clientY;
        let posDiv = parseInt((yPos) / 8);

        const pantallaDiv = parseInt( yPos / (screen.width / 100));

    banner.innerHTML =`

    <span><p>${yPos}</p></span>
    <img src="/images/videoskate/theartteam Capa ${pantallaDiv}.jpg" width = "100%">
    `
    
});
