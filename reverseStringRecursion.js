/*
snippet to test my grasp of basic recursion concepts. reverses string using recursion (very inefficient + not the best approach for reversing a string in the real world)

*/

const reverse = (str) => {
  if (!str) {
    return '';
  }

  return reverse(str.substring(1)) + str.charAt(0);
};

console.log(reverse('hello'));

/*
call stack for str: 'hello'

in chronological order:
ello + h
llo + e
lo + l
o + l
'' + o

call stack order is reversed:
'' + o
o + l
lo + l
llo + e
ello + h

hit base case '' ===> '' + o + l + l + e + h = 'olleh'

*/