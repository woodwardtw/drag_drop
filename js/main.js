let left = 'left-copy-1tomany';
let right = 'right-copy-1tomany';

dragula([document.getElementById(left), document.getElementById(right)], {
  copy: function (el, source) {
    return source === document.getElementById(left)
  },
  accepts: function (el, target) {
    return target !== document.getElementById(left)
  }
});