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
// Local storage
let profileImgUrl = localStorage.getItem("profileImgUrl")
if (profileImgUrl == ""){
    profileImgUrl = "https://t4.ftcdn.net/jpg/04/85/67/07/360_F_485670786_X9jhMQrKf27exSGzaJxjGMpI1z6TcnP6.jpg"
}
profilePhoto.src = profileImgUrl

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
        var urlProfileImg = $("#inputSrcProfileImg:text").val();
        if (urlProfileImg == ""){
            let emptyLinkAlert = confirm("This link is empty! Do you want to delete your existing profile photo?")
            if (emptyLinkAlert) {
                urlProfileImg = profileImgUrl;
            } else {
                return
            } 
        } 
            // access JQuery library to extract and store the input  of the input element speific to Profile Img src ID 
        profilePhoto.src = urlProfileImg
        console.log(urlProfileImg)
        editProfileImgSection.style.display = "none";
        localStorage.setItem("profileImgUrl", urlProfileImg) // store the new input url of profile picture so when refesh it keeps the link
       
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

// liked post

