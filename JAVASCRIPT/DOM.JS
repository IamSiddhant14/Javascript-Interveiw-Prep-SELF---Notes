// Node Js dont understand document or dom , only the js engine understand it 

console.log(document);

//This give us a Node list 

document.querySelectorAll('p');
document.querySelectorAll('#p');
const a = document.querySelectorAll('.p');

// We can use forEach for nodeList :-

a.forEach((ele) => {
    console.log(ele);
});

document.querySelector('.p');


document.getElementsByTagName();


document.getElementById();


document.getElementsByClassName();


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

//  This will give all the children to the parent div 
b.children;


//  This will give parent to the  children div 
b.parentElement;

//  To converthtml Collection to n array we do the folloeing

Array.from(b.children);

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
})


//Mouse move

d.addEventListener('mousemove' , () => {
    console.log('mouse move');
});


d.addEventListener('click' , (e) => {
    // Like reloading while submiting form 

    e.preventDefault();
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

document.createChild();
document.appendChild()