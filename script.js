let button = document.querySelectorAll(".buy");
let cartNo = document.querySelector(".no");
let no = 0;
const dropDown = document.querySelector(".acct");
const acctName = document.querySelector(".name");
const arrow = document.querySelector(".arrow");
const featuredCollections = document.querySelectorAll(".featured-collection div");
const featuredpage = document.querySelector(".featured-collection-info");
let messages = document.querySelector(".messages-cont");
let number2 = document.querySelectorAll(".no")[1];
const messageHolder = document.querySelector(".messages");
const mail = document.querySelector(".mail");
// cart number counter
let cartNumber = function () {
    button.forEach((button) => {
    button.addEventListener("click", function () {
        cartNo.classList.add("no1");
        no++;
        cartNo.textContent = no;
        });
    });
};
// acct name dropdown
acctName.addEventListener("click", () => {
    dropDown.classList.toggle("drp");
    messageHolder.classList.remove("active")
  //     if(clicked==true){
  //         dropDown.classList.remove("drp");
  //         clicked=false
  //     }
});
// featured collections info popup
const featuredCollectionPopUp = function () {
    featuredCollections.forEach((collection) => {
        collection.addEventListener("click", () => {
            featuredpage.classList.add("clicked");
        });
        featuredpage.addEventListener("click", () => {
            featuredpage.classList.remove("clicked");
        });
    });
};
//icon nunbering,messages notification
const messageFunc = function () {
    if ((messages.children.length = 0)) {
        let emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "sorry you have no  messages at the moment";
        messages.appendChild(emptyMessage);
    }
    number2.className += 2;
    number2.textContent = messages.children.length;
    if (messages.children.length === 0) {
        number2.className = "no";
    }
    const messageToggle = function () {
        mail.addEventListener("click", () => {
            messageHolder.classList.toggle("active");
            dropDown.classList.remove("drp")
            // messages input focus
            let search = document.querySelector(".search");
            search.focus();
        });
    };
    
    messageToggle();
};
// messages popup

cartNumber();
featuredCollectionPopUp();
messageFunc();
