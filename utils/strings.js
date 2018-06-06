// var symptoms = [
//   '"對事情或活動有過度的焦慮和擔憂"',
//   '"睡眠困擾"',
//   '"肌肉緊繃"',
//   '"易怒"',
//   '"腦中一片空白"',
//   '"注意力不集中"',
//   '"容易疲勞"',
//   '"心情不定"',
//   '"感覺緊張"',
//   '"坐立不安"',
//   '"個案認為難以控制面臨的擔憂"'
// ];

// function getCombination(symptoms) {
//   var result = [];
//   function func(symptoms) {
//     var first = symptoms.shift();
//     for (var i = 0; i < symptoms.length; i++) {
//       var comb = first + " vs " + symptoms[i];
//       result.push(comb);
//     }
//   }
//   while (symptoms && symptoms.length > 1) {
//     func(symptoms);
//   }
//   return result;
// }

// var set = getCombination(symptoms);

// // random the set!!
// var newSet = [];
// for (var i = 0; i < set.length; i++) {
//   var randomNum = Math.floor(Math.random() * set.length);
//   while (set[randomNum] === undefined) {
//     randomNum = Math.floor(Math.random() * set.length);
//   }
//   newSet.push(set[randomNum]);

//   set[randomNum] = undefined;
// }
