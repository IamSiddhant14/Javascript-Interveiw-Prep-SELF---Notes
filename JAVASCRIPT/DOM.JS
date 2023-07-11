// Node Js dont understand document or dom , only the js engine understand it 

//  Select and then change the element   

console.log(document);
console.log(document.url);

//This give us a Node list 

document.querySelectorAll('p');
document.querySelectorAll('#p');

// we will get a nodelist as a result of it 
const a = document.querySelectorAll('.p');

//  This will convert the nodellist into an array
console.log(a);
Array.from(document.querySelectorAll('p'));

// We can use forEach for nodeList :-

a.forEach((ele) => {
    console.log(ele);
});

document.querySelector('.p');

document.getElementsByTagName('p');
document.getElementsByTagName('div');
document.getElementsByTagName('a');

document.getElementById('fbi');
document.getElementsByClassName('fdi');


const b = document.querySelector('p');
// They overrides the already text present

b.innerText = 'hello innerText';

// Full ata hai with tags and all other stuff 
b.innerHTML = 'hello innerHTML';

// To not override 
b.innerHTML += 'hi';

const c = b.getAttribute('href') ;
b.setAttribute('href' , 'yt.com');

b.style.color = 'red';
b.style.backgroundColor = 'green';

b.classList.add('');
b.classList.remove();
b.classList.replace();

//  This will give all the children to the parent div result is an html collection 

b.children;

//  To converthtml Collection to na array we do the folloeing

Array.from(b.children);

//  This will give parent to the  children div 
b.parentElement;   

b.previousElementSibling;
b.nextElementSibling;
 
b.addEventListener( 'click' , (e) => {
    console.log(e.target)
    e.target.style.color = 'red';
    e.target.style.textDecoration = 'line-through' ;
    e.target.classList.add('');
    e.target.removeEventListener();
    e.target.remove();

    const c = document.createElement('h1');
    c.innerText =  'Siddhnat';
    d.appendChild(c)
});

//  Event prapogation
const d = document.querySelector('ul');

d.addEventListener('click' , (e) => {
    if( e.target.nodeName == 'LI'){
        e.target.remove();
    }
})

d.addEventListener('copy' , (e) => {
  alert('Dont copy');
});

//Mouse move

d.addEventListener('mousemove' , () => {
    console.log('mouse move');
});


d.addEventListener('click' , (e) => {
    // Like reloading while submiting form 
    e.preventDefault();// Submit button
    e.stopPropagation();// Bubbling
})


// FORM :-

{/* <form action=" " class='sign-up-form'>

// Rejex
<input type='email' name='userEmail' id='mail' />
<input type='password' name='userEmail' id='mail' />
<input type='submit' value ='submit'/>
</form> */}


a.addEventListener('submit', (e) => {
    e.target ;
});

a.addEventListener('keyup', (e) => {
    e.target ;
});

document.appendChild()

// e.target refers to the entire tag now we can take out e.target.value , e,target.tagName , e.target.href , e.target.style from it 

