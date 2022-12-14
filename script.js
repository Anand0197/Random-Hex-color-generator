const hexColor = document.querySelector('.hex-color');
const hexGenerate = document.querySelector('.hex-generate');
const box = document.querySelector('.Generate-box');

const colorgenerate = () => {
  const colornum = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = '#' + colornum;
  hexColor.innerHTML = '#' + colornum;
  box.style.backgroundColor = `#${colornum}`;
};

//Getting random color on clicking button
hexGenerate.addEventListener('click', colorgenerate);

//To get random color whenever page load
colorgenerate();
