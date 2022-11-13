// Profile variable
let editProfileImgSection = document.querySelector("#editImgDiv")
let editProfileImgButton = document.querySelector("#editProfileImg")
let uploadProfileImgButton = document.querySelector("#uploadSrclinkProfileImg")
let cancelProfileImgButton = document.querySelector("#hideEditImgDiv")
let profilePhoto = document.querySelector("#profilePhoto")
// Bio Variab;e
let editProfileBioSection = document.querySelector("#editBioDiv")
let editProfileBioButton = document.querySelector("#editBioButton")
let updateBioButton = document.querySelector("#updateBioContentButton")
let cancelProfileBioButton = document.querySelector("#hideEditBioDiv")
let bioContent = document.querySelector("#bioContent")
// Profile Img
editProfileImgSection.style.display = "none";
editProfileImgButton.addEventListener("click", function(){
    editProfileImgSection.style.display = "block";
})
cancelProfileImgButton.addEventListener("click",function(){
    editProfileImgSection.style.display = "none";
})
uploadProfileImgButton.addEventListener("click", function(){
    let confirmChangedProfileImg = confirm("CONFIRM CHANGED: Do you want to change into your new profile image?")
    if (confirmChangedProfileImg) { // replace the new input to the src from  ID#profilePhto 
        var x = $("#inputSrcProfileImg:text").val(); // access JQuery library to extract and store the input  of the input element speific to Profile Img src ID 
        profilePhoto.src = x
        console.log(x)
        editProfileImgSection.style.display = "none";
    } 
})
// Bio Content 
editProfileBioSection.style.display = "none"; 
editProfileBioButton.addEventListener("click",function(){
    editProfileBioSection.style.display = "block";
})
cancelProfileBioButton.addEventListener("click", function(){
    editProfileBioSection.style.display = "none"
})
updateBioButton.addEventListener("click", function(){
    let confirmEditBiocontent = confirm("CONFIRM EDITED: Do you want to updated new bio content?")
})


