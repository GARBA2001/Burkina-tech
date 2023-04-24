const tabs = document.querySelectorAll(".tr");
const tabBtns = document.querySelectorAll(.btn);

const tab_Nav = function(tabBtnclick){
    tabBtns[tabBtnclick].classList.add("active");
    tabs[tabBtnclick].classList.add("active");
     
}
tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click ", () => {
tab_Nav(i);
    });
});