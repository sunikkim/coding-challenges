/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

O 2d array of intervals after merging overlaps
I 2d array of intervals
C none
E none

sort array by first num in each interval
initialize output array
iterate through input array
insert first interval into output array
for next intervals,
if current interval begins after previous interval ends
there is no overlap and curr interval can be pushed to output
else they do overlap
update the end value of previous interval with end value of current interval if that value is greater
return output array
*/

const merge = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);

  let output = [];

  for (let i = 0; i < arr.length; i++) {
      if (!output.length || output[output.length - 1][1] < arr[i][0]) {
          output.push(arr[i]);
      } else {
          output[output.length - 1][1] = Math.max(output[output.length - 1][1], arr[i][1]);
      }
  }

  return output;
};