// Bubbling : In bubbling the control goes from bottom to top like a bubble 

//  Events like focus and hover do not bubble while events like click event do bubble

// event.target refers to the initial target
// event.currentTarget refers to the current target and not the initial one , that is event.currentTarget bubbles up by default
//  this.target works like event.currentTarget

div.addEventListner( 'click' , (e)=> {
     
},{
  capture : true // this is used to reverse direction of bubbling
})
 
// This is used to stop the event prapogation/bubbling process
e.stopPropagation();

// Event delegation 

// Here in this instead of adding event to each element we will add the listner to parent it-self and then there after determine which elemnet is been clicked 

div.addEventListner( 'click' , (e) => {

    if(e.target.tagName === 'SPAN'){
        window.location.href += '/' + e.target.className ;
    }
    
})

// e.preventDefault is used on anchor taag to prevent reload
