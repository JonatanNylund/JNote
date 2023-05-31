const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector(".header span"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "Septeber", "Oktober", "November", "December"];
const notes = JSON.parse(localStorage.getItem(""))
addBox.addEventListener("click", () =>{
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () =>{
    popupBox.classList.remove("show");
});

addBtn.addEventListener("click", e =>{
    e.preventDefault();
    let noteTitle = titleTag.value,
    noteDesc = descTag.value;

    if(noteTitle || noteDesc){
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();

        let noteInfo = {
            title: noteTitle, description: noteDesc,
            date: `${month} ${day}, ${year} `
        }
        const notes = [];
        notes.push(noteInfo);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
});