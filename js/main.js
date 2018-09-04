let left = 'left-copy-1tomany';
let right = 'right-copy-1tomany';
let rightb = 'right-copy-1tomanyb';

dragula([document.getElementById(left), document.getElementById(right), document.getElementById(rightb)], {
  copy: function (el, source) {
  	el.id = randomId()
    return source === document.getElementById(left)
  },
  accepts: function (el, target) {
    return target !== document.getElementById(left)
  }
});



//from http://www.frontcoded.com/javascript-create-unique-ids.html
/**
   * Creates a string that can be used for dynamic id attributes
   * Example: "id-so7567s1pcpojemi"
   * @returns {string}
   */
function randomId() {
  return 'id-' + Math.random().toString(36).substr(2, 16);
};