/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

O max area between two sides in container
I array of nums (heights)
C container can't be slanted
E none

make max variable = 0
make left var = 0
make right var = height.length - 1
(two pointers)
while left < right
shortest side = height[left] or height[right]
area = shortest side * (right - left)
max = math.max(max, area)
left++
right--
return max

*/

const maxArea = (height) => {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
      let shortestSide = height[left] <= height[right] ? height[left] : height[right];
      let area = shortestSide * (right - left);
      max = Math.max(max, area);

      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return max;
};
