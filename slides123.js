document.getElementById('project1').addEventListener('mouseover', function() {
    document.getElementById('content').style.backgroundColor = 'red';
});

document.getElementById('project2').addEventListener('mouseover', function() {
    document.getElementById('content').style.backgroundColor = 'green';
});

document.getElementById('project3').addEventListener('mouseover', function() {
    document.getElementById('content').style.backgroundColor = 'purple';
});

document.querySelector('.navbar').addEventListener('mouseleave', function() {
    document.getElementById('content').style.backgroundColor = 'blue';
});