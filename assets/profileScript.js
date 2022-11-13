let editProfileImgSection = document.querySelector("#editImgDiv")
let editProfileImgButton = document.querySelector("#editProfileImg")
let uploadProfileImgButton = document.querySelector("#uploadSrclinkProfileImg")
let cancelProfileImgButton = document.querySelector("#hideEditImgDiv")
let editProfileBioSection = document.querySelector("#editBioDiv")
let editProfileBioButton = document.querySelector("#editBioButton")
let updateBioButton = document.querySelector("#updateBioContentButton")
let cancelProfileBioButton = document.querySelector("#hideEditBioDiv")
// Profile Img
editProfileImgSection.style.display = "none";
editProfileImgButton.addEventListener("click", function(){
    editProfileImgSection.style.display = "block";
})
cancelProfileImgButton.addEventListener("click",function(){
    editProfileImgSection.style.display = "none";
})
// Bio Content 
editProfileBioSection.style.display = "none"; 
editProfileBioButton.addEventListener("click",function(){
    editProfileBioSection.style.display = "block";
})
cancelProfileBioButton.addEventListener("click", function(){
    editProfileBioSection.style.display = "none"
})


