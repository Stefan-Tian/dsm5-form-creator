var symptoms = [
  '"對事情或活動有過度的焦慮和擔憂"',
  '"睡眠困擾"',
  '"肌肉緊繃"',
  '"易怒"',
  '"腦中一片空白"',
  '"注意力不集中"',
  '"容易疲勞"',
  '"心情不定"',
  '"感覺緊張"',
  '"坐立不安"',
  '"個案認為難以控制面臨的擔憂"'
];

function getCombination(symptoms) {
  var result = [];
  function func(symptoms) {
    var first = symptoms.shift();
    for (var i = 0; i < symptoms.length; i++) {
      var comb = first + " vs " + symptoms[i];
      result.push(comb);
    }
  }
  while (symptoms && symptoms.length > 1) {
    func(symptoms);
  }
  return result;
}

var set = getCombination(symptoms);

/// random the set!!
var newSet = [];
for (var i = 0; i < set.length; i++) {
  var randomNum = Math.floor(Math.random() * set.length);
  while (set[randomNum] === undefined) {
    randomNum = Math.floor(Math.random() * set.length);
  }
  newSet.push(set[randomNum]);

  set[randomNum] = undefined;
}

var form = FormApp.create("GAD問卷");

form.setDescription(
  "待會會出現DSM-5中「廣泛性焦慮疾患」（Generalized Anxiety Disorder）病人的可能症狀，就您的專業臨床經驗，如您認為兩症狀間為「共同發生」（co-occurs）關係，請選 左 <-> 右；如為「因果」（causes）關係，請選擇 左 -> 右 或 右 -> 左。箭頭請選「因」症狀指向「果」症狀）。本研究希望探尋實徵臨床病人的症狀間的關聯，而非DSM-5診斷準則定義，所以請您以您的臨床經驗回答，而非求符合臨床診斷準則。"
);

var pages = [];
var items = [];
for (var i = 0; i < newSet.length; i++) {
  var page1 = form.addPageBreakItem();
  pages.push(page1);
  var item1 = form.addMultipleChoiceItem();
  items.push(item1);
  var page2 = form.addPageBreakItem();
  pages.push(page2);
  var item2 = form.addScaleItem();
  items.push(item2);
}

var j = 0; // set index
var k = 0; // followup index
var pageLength = newSet.length * 2;
for (var i = 0; i < pageLength; i++) {
  if (i == 108) {
    items[i]
      .setTitle(newSet[54]) // question 2 start from the last
      .setChoices([
        items[i].createChoice("無關", FormApp.PageNavigationType.SUBMIT),
        items[i].createChoice("左 --> 右", FormApp.PageNavigationType.CONTINUE),
        items[i].createChoice("左 <-- 右", FormApp.PageNavigationType.CONTINUE),
        items[i].createChoice("左 <--> 右", FormApp.PageNavigationType.CONTINUE)
      ]);
  } else if (i == 0 || i % 2 == 0) {
    items[i]
      .setTitle(newSet[j])
      .setChoices([
        items[i].createChoice("無關", pages[i + 2]),
        items[i].createChoice("左 --> 右", pages[i + 1]),
        items[i].createChoice("左 <-- 右", pages[i + 1]),
        items[i].createChoice("左 <--> 右", pages[i + 1])
      ]);
    j = j + 1;
  } else {
    items[i]
      .setTitle(newSet[k] + " 的因果或共同關係強度")
      .setBounds(1, 3)
      .setLabels("弱", "強");
    k = k + 1;
  }
}

Logger.log("Published URL: " + form.getPublishedUrl());
Logger.log("Editor URL: " + form.getEditUrl());
