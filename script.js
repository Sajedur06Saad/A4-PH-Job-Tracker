let interviewList = [];
let rejectedList = [];


let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');


const allFilterBtn = document.getElementById('all-filter-btn')
const interviewBtn = document.getElementById('interview-filter-btn')
const rejectedBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards')
const mainContainer = document.querySelector('main')




function calculateCount(){
    total.innerText= allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

calculateCount()

function toggleStyle(id){

}