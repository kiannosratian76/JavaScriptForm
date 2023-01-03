//get Name from input and plus li element to form whith click event of button

//menu Ul Element parent of items
const formMenu = document.getElementById("menuItems");
//select input and button form
//Button from Form
const btnForm = document.getElementById("button-form");
//input from Form
const inputForm = document.getElementById("input-form");
//add eventListener for button

btnForm.addEventListener("click", function (e) {
    // check unsubmit Form for another render
    e.preventDefault();

    //check value input if its not empty return true event
    if (inputForm.value !== "") {
        //Create Elment li
        var liElement = document.createElement("li");
        //add class wrapper-item from css to element
        liElement.classList.add("wrapper-items");
        // set inner html to js from es6

        var pElement = document.createElement("p");
        pElement.classList.add("Wr-items-para");
        liElement.innerHTML = `
        <p class="Wr-items-para">${inputForm.value}</p>
            <input />
               <p class="wrapper-btn">
              <i class="Tik">TIk</i>_<i class="Close">Close</i>
              </p>
    `;

        //append child to parent ul element
        formMenu.appendChild(liElement);
    }
    // else console log please check the input
    else {
        console.log("please fit the fill");
    }
});

////// Close and Edit name of input items in wrapper container
//get buttons check for delete or edit
//if user want to edit that fucking name displaye input should be block
// else display stay in none
//get button tik and close
const btnTik = document.querySelectorAll(".Tik");
// create Function for tik element
btnTik.forEach((tik) => {
    tik.addEventListener(
        "click",
        (e) => {
            if (e.target.className == "Tik") {
                var note = tik.parentNode.parentNode.children[1];
                note.style.display = "block";
                /////get parenet Element
                note.addEventListener("keypress", (event) => {
                    if (event.key !== "Enter") {
                    } else {
                        var firspara =
                            e.target.parentNode.parentNode.children[0];
                        firspara.innerHTML = `${note.value}`;
                        note.style.display = "none";
                    }
                });
            } else {
                return false;
            }
        },
        true
    );
});

//Close EVent
const btnClose = document.querySelectorAll(".Close");
btnClose.forEach((close) => {
    close.addEventListener("click", (e) => {
        if (e.target.className == "Close") {
            const btnParent = e.target.parentNode.parentNode;
            btnParent.remove();
        }
    });
});
