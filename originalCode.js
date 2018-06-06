// symptoms = [
//   "對事情或活動有過度的焦慮和擔憂",
//   "睡眠困擾",
//   "肌肉緊繃",
//   "易怒",
//   "腦中一片空白",
//   "注意力不集中",
//   "容易疲勞",
//   "心情不定",
//   "感覺緊張",
//   "坐立不安",
//   "個案認為難以控制面臨的擔憂"
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

// var form = FormApp.create("GAD問卷");

// form.setDescription(
//   "待會會出現DSM-5中「廣泛性焦慮疾患」（Generalized Anxiety Disorder）病人的可能症狀，就您的專業臨床經驗，如您認為兩症狀間為「共同發生」（co-occurs）關係，請選 左 <-> 右；如為「因果」（causes）關係，請選擇 左 -> 右 或 右 -> 左。箭頭請選「因」症狀指向「果」症狀）。本研究希望探尋實徵臨床病人的症狀間的關聯，而非DSM-5診斷準則定義，所以請您以您的臨床經驗回答，而非求符合臨床診斷準則。"
// );

// var pageNum = set.length * 2;
// var j = 0; // index of set for questions
// var k = 0; // index of set for followups
// for (var i = 0; i < pageNum; i++) {
//   form.addPageBreakItem();
//   if (i == 0 || i % 2 == 0) {
//     var item = form.addMultipleChoiceItem();
//     item
//       .setTitle(set[j])
//       .setChoices([
//         item.createChoice("無關"),
//         item.createChoice("左 -> 右"),
//         item.createChoice("左 <- 右"),
//         item.createChoice("左 <-> 右")
//       ]);
//     j = j + 1;
//   } else {
//     form
//       .addMultipleChoiceItem()
//       .setTitle(set[k] + " 的因果或共同關係的強度")
//       .setChoiceValues([1, 2, 3]);
//     k = k + 1;
//   }
// }

// Logger.log("Published URL: " + form.getPublishedUrl());
// Logger.log("Editor URL: " + form.getEditUrl());
