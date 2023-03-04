// In spread operator we could de-compress , while in rest operator we compress the text

// spread could be used any where while in the case of rest operator it should only be used at the end
// https://www.youtube.com/watch?v=gQWOLRKGPsA&ab_channel=Coder%27sGyan

// [...speed];
// [...restt];
  
function d(...nums){//rest , rest parameter must be the last one , rest is always in the parameter while spread is always in argument

    console.log(nums);
    console.log(nums[0] , nums[1]);
}
  
  let nums = [ 1 ,2 ,3 ,4 ,5 ];
  d(...nums);//spread

  let nums2 = [ ...nums ];
  nums[3] = 9;
  
  console.log(nums);
  console.log(nums2);