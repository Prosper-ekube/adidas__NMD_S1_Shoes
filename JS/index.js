const sentence1 = document.getElementById("sentence-1");
const sentence2 = document.getElementById("sentence-2");
let currentSentence = 1;
const showMoreBtnCon = document.getElementById("show-more-btn__con");
const showLessBtnCon = document.getElementById("show-less-btn__con");
let currentBtn = 3;
const imgCon1ChildSub5 = document.getElementById("img-con-1__child--sub5");
const imgCon1ChildSub6 = document.getElementById("img-con-1__child--sub6");
const imgCon1ChildSub7 = document.getElementById("img-con-1__child--sub7");
const imgCon1ChildSub8 = document.getElementById("img-con-1__child--sub8");
const imgCon1ChildSub9 = document.getElementById("img-con-1__child--sub9");
const imgCon1ChildSub10 = document.getElementById("img-con-1__child--sub10");
/*const heroSectionCon9ChildC = document.getElementByClassName("hero-section-con-9__childC");*/
const detailsSub = document.getElementById("details__sub");
let currentState = 5;
const faAngleDown3 = document.getElementById("fa__angle__down3");
const faAngleUp3 = document.getElementById("fa__angle__up3");
const reviewsSubChildBFadown = document.getElementById("reviews-sub__childB--fa-down");
const reviewsSubChildBFaUp = document.getElementById("reviews-sub__childB--fa-up");
const reviewsSubChildBSub1BId = document.getElementById("reviews-sub__childB--sub1BId");
let sortState = 7;
const reviews = document.getElementById("reviews");
const reviewsOpen = document.getElementById("reviewsOpen");
const reviewsClose = document.getElementById("reviewsClose");
let reviewsState = 9;
const description = document.getElementById("description");
const descriptionClose = document.getElementById("descriptionClose");
const descriptionOpen = document.getElementById("descriptionOpen");
let descriptionState = 11;

showLessBtnCon.style.display = "none";
detailsSub.style.display = "none";
faAngleUp3.style.display = "none";
reviewsSubChildBFaUp.style.display = "none";
reviewsSubChildBSub1BId.style.display = "none";
reviews.style.display = "none";
reviewsClose.style.display = "none";
descriptionClose.style.display = "none";
description.style.display = "none";

function switchDescriptionState() {
    if (descriptionState == 11) {
        description.style.display = "flex"
        descriptionClose.style.display = "block";
        descriptionOpen.style.display = "none";
        descriptionState = 12;
    } else {
        description.style.display = "none"
        descriptionClose.style.display = "none";
        descriptionOpen.style.display = "flex";
        descriptionState = 11;
    }
}


function switchReviewsState() {
    if (reviewsState === 9) {
        reviews.style.display = "block";
        reviewsClose.style.display = "block";
        reviewsOpen.style.display = "none";
        reviewsState = 10;
    } else {
        reviews.style.display = "none";
        reviewsClose.style.display = "none";
        reviewsOpen.style.display = "block";
        reviewsState = 9;
    }
}

function toggleSentence() {
    if (currentSentence === 1) {
        sentence1.style.display = "block";
        sentence2.style.display = "none";
        currentSentence = 2
    } else {
        sentence1.style.display = "none";
        sentence2.style.display = "block";
        currentSentence = 1
    }
}

function switchSentence() {
    toggleSentence();
    setTimeout(switchSentence, 4000)
}

switchSentence();

function switchButton() { 
    if (currentBtn === 3) {
        showLessBtnCon.style.display = "block";        
        showMoreBtnCon.style.display = "none";
        imgCon1ChildSub5.style.display = "block";
        imgCon1ChildSub6.style.display = "block";
        imgCon1ChildSub7.style.display = "block";
        imgCon1ChildSub8.style.display = "block";
        imgCon1ChildSub9.style.display = "block";
        imgCon1ChildSub10.style.display = "block";
        currentBtn = 4;
    } else {
        showLessBtnCon.style.display = "none";
        showMoreBtnCon.style.display = "block";
        imgCon1ChildSub5.style.display = "none";
        imgCon1ChildSub6.style.display = "none";
        imgCon1ChildSub7.style.display = "none";
        imgCon1ChildSub8.style.display = "none";
        imgCon1ChildSub9.style.display = "none";
        imgCon1ChildSub10.style.display = "none";
        currentBtn = 3;
    }
}

function switchState() {
    if (currentState === 5) {
        detailsSub.style.display = "flex";
        faAngleUp3.style.display = "block";
        faAngleDown3.style.display = "none";
        currentState = 6;
    } else {
        detailsSub.style.display = "none";
        faAngleUp3.style.display = "none";
        faAngleDown3.style.display = "block";
        currentState = 5;
    }
}

function switchSortState() {
    if (sortState === 7) {
        reviewsSubChildBFadown.style.display = "none";
        reviewsSubChildBFaUp.style.display = "block";
        reviewsSubChildBSub1BId.style.display = "flex";
        sortState = 8;
    } else {
        reviewsSubChildBFadown.style.display = "block";
        reviewsSubChildBFaUp.style.display = "none";
        reviewsSubChildBSub1BId.style.display = "none";
        sortState = 7;
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}