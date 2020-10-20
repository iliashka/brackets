module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let s of str) {
     if (s == '(' || s == '[' || s == '{') {
        stack.push(s);
        continue; 
     }

     if (stack.length === 0) {
         return false
     }

     switch (s) {
         case ')':
              stack.pop();
              if (s == '{' || s == '[') {
                return false  
              }
              break;
         case '}':
              stack.pop();
              if (s == '(' || s == '[') {
                return false  
              }
              break;
         case ']':
              stack.pop();
              if (s == '{' || s == '(') {
                return false  
              }
              break;
     }
  }
  return stack.length ? false : true
}
