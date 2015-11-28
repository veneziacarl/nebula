exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    var pos = arr.indexOf(item);
    return pos;
  },

  sum : function(arr) {
    var total = arr.reduce( (prev, curr) => prev + curr );
    return total;

    // another way of doing this summation:
    // var total = arr.reduce(function(a, b) { return a + b; });
    // return total;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
      }
    };
    return arr;
  },

  reverseString : function(str) {

    var new_str = str.split('').reverse().join('');

    // longer way of reversing a string
  //   var new_str = ""
  //   for (var i = (str.length - 1); i >= 0; i--) {
  //     new_str += str[i];
  //   };

    return new_str;
  },


  longestSubString : function(str) {
    var sub_strings = str.split(' ');
    var longest_sub_string = ""

    for (var i = 0; i < sub_strings.length; i++) {
      if (sub_strings[i].length > longest_sub_string.length) {
        longest_sub_string = sub_strings[i];
      };
    }
    return longest_sub_string;
  },

  letterMoveForward : function(str) {
    new_letter_str = ""
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'z') {
        new_letter_str += 'a';
      } else if (!isNaN(parseInt(str[i]))) {
          new_letter_str += str[i];
      } else {
          new_letter_str += String.fromCharCode(str.charCodeAt(i) + 1);
      };
    };
    return new_letter_str;
  },

  capitalizeWords : function(str) {
    var substrings = str.split(' ');

    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    for (var i = 0; i < substrings.length; i++) {
      substrings[i] = capitalizeFirstLetter(substrings[i]);
    };
    return substrings.join(" ");
  }

};
