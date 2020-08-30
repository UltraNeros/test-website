var one = 0;

function readMoreFunction() {
  if (one == 0) {
    document.getElementById('extraText').style.display='block';
    document.querySelector('.readMoreButton').innerHTML='Read Less';
    console.log("display set to block");
    one++;
    console.log(one);
  }
  else {
    document.getElementById('extraText').style.display='none';
    document.querySelector('.readMoreButton').innerHTML="Read More";
    console.log("display set to none");
    one--;
  }
}
