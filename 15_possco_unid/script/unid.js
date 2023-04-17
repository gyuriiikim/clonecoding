const sub = document.querySelectorAll('.sub1')
const bg = document.querySelector('.bg')
const gnb = document.querySelectorAll('.gnb >li')
const h_bg = document.querySelector('#h_bg')
console.log(sub, bg, gnb,h_bg)


// 1. 모든 sub와 bg 숨기기
for(let i of sub){i.style.display = 'none'}
// 배경미리 숨기기
bg.style.display = 'none' //1개여서 for사용 안함

// 2. li에 마우스를 올리면 sub의 전체메뉴가 나타나게 하기
for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        sub_func('block' , '#fff')
        i.children[1].style.background = '#eee'
        i.children[0].style.color = '#003a14'
    })
    i.addEventListener('mouseout',()=>{
        sub_func('none', 'rgba(255,255,255,0.6)')
        i.children[1].style.background = '#fff'
        i.children[0].style.color = '#000'
    })
}

// 2번을 함수로 이용해보기
function sub_func(value, nav_bg, bg_top){
    h_bg.style.background = nav_bg 
    bg.style.display = value
    bg.style.borderTop = bg_top
    for(let i of sub)(i.style.display = value)
}

// -------------------------------------------------
