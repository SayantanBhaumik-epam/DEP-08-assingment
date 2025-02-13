/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let queue = [];
    let result = 0;
    for(let c of s){
      if(queue.includes(c)){
          while(queue[0] != c){
              queue.shift();
          }
          queue.shift();
      }
      queue.push(c);
      if(queue.length>result){
          result = queue.length;
      }
    }  
    return result;
  };