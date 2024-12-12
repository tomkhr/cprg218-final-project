const aboutGameDiv = document.getElementById('aboutGameDiv');
const whyThisGameDiv = document.getElementById('whyThisGameDiv');
const theDevDiv = document.getElementById('theDevDiv');

const aboutGameButton = document.getElementById('aboutGameButton')
const whyThisGameButton = document.getElementById('whyThisGameButton')
const theDevButton = document.getElementById('theDevButton')

aboutGameButton.className = ('aboutNavItem-current')

aboutGameDiv.style.display = 'flex'
whyThisGameDiv.style.display = 'none'
theDevDiv.style.display = 'none'


aboutGameButton.addEventListener('click',function(){
    aboutGameButton.className = ('aboutNavItem-current')
    whyThisGameButton.className = ('aboutNavItem')
    theDevButton.className = ('aboutNavItem')

    aboutGameDiv.style.display = 'flex'
    whyThisGameDiv.style.display = 'none'
    theDevDiv.style.display = 'none'
});


whyThisGameButton.addEventListener('click',function(){
    aboutGameButton.className = ('aboutNavItem')
    whyThisGameButton.className = ('aboutNavItem-current')
    theDevButton.className = ('aboutNavItem')

    aboutGameDiv.style.display = 'none'
    whyThisGameDiv.style.display = 'flex'
    theDevDiv.style.display = 'none'
});



theDevButton.addEventListener('click',function(){
    aboutGameButton.className = ('aboutNavItem')
    whyThisGameButton.className = ('aboutNavItem')
    theDevButton.className = ('aboutNavItem-current')

    aboutGameDiv.style.display = 'none'
    whyThisGameDiv.style.display = 'none'
    theDevDiv.style.display = 'flex'
});