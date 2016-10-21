exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },


  sum: function(arr) {
    return arr.reduce(function(sum, number) {
      return sum + number;
    }, 0)
  },

/*
  sum: function(arr) {
    return arr.reduce(sum, number) => sum + number;}, 0);
  },
*/
  remove: function(arr, item) {
    return arr.filter(function(x) {
          return x !== item;
        });
},

  removeWithoutCopy: function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            console.log(arr);
          if (arr[i] === item) {
             arr.splice(i, 1);
          }
      };
          return arr;
       },

  append: function(arr, item) {
    arr.push(item);
    console.log(arr);
    return arr;
  },

  truncate: function(arr) {
    okayPopped = arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    okayUnshifted = arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    okayShifted = arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      let arrayHolder = arr.splice(index, 0, item);
      return arr.concat(arrayHolder);
  },

  count: function(arr, item) {
      let counting = 0;
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === item) {
        counting += 1;
      }
      }
      return counting;
  },

  duplicates: function(arr) {
  /**    const duplicateTest = arr.includes(arr[i])**/

  },

  square: function(arr) {
      return arr.map(function(i){
        return i * i;
      });
  },

  findAllOccurrences: function(arr, target) {
/**      let theOccurences = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          theOccurences.unshift(arr.indexOf(target));
    }
      console.log(theOccurences);
      return theOccurences;
      **/
  }
};
