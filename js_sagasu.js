var permute = function(nums){
  var result = [];
  var backtrack = (i, nums) => {
    if(i===nums.length){
      result.push(nums.slice());
      return;
    }
    for(let j = i; j < nums.length; j++){
      [nums[i],nums[j]] = [nums[j],nums[i]];
      backtrack(i+1, nums);
      [nums[i],nums[j]] = [nums[j],nums[i]];
    }
  }
  backtrack(0, nums);
  return result;
};

var msg = document.getElementById('msg');

var checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);

function butotnClick(){

  var result_total = "";
  var one = "<a href=\"";
  var two = "\" target=\"_blank\">";
  var three = "</a><br><br>";
  var url_title = [
    ['https://www.yahoo.co.jp/', 'yahoo!', 0],
    ['https://www.google.com/?hl=ja', 'google', 0],
    ['https://ja-jp.facebook.com/', 'facebook', 0],
    ['https://ja-jp.facebook.com/', 'amazon', 0],
    ['https://ja-jp.facebook.com/', 'microsoft', 0],
    // ['<URL>', '表示される部分', 0],
  ];

  const str = nameText.value;
  const arr = [...str];
  var num_num = permute(arr);
  var message = '';
  var semi_final_message = '';
  var final_message = '';
  for (let i=0;i<num_num.length;i++){
    message += one + two + num_num[i] + three;
  }
  message += "<hr>";

  if (1 < num_num.length){

    for (let k=1;k<num_num.length+1;k++){
      for (let i=1;i<num_num[k].length+1;i++){
        var stream = num_num[k].slice(0, i).join('').toString();

        for (let m=0;m<url_title.length;m++){
          if ( url_title[m][1].match(stream)) {
            url_title[m][2] = 1;
          }
        }
      }

      for (let h=0;h<url_title.length;h++){
        if ( url_title[h][2] == 1) {
          // semi_final_message += url_title[h][1] + "<br><br>";
          semi_final_message += one + url_title[h][0] + two + url_title[h][1] + three;
        }
      }
      final_message = semi_final_message;
      semi_final_message = '';

      document.getElementById("msg").innerHTML = final_message;
    }
    // alert(url_title);
  }else if (num_num.length == 1){
    stream = num_num[0];
    for (let m=0;m<url_title.length;m++){
      if ( url_title[m][1].match(stream)) {
        url_title[m][2] = 1;
      }
    }
  }

  for (let h=0;h<url_title.length;h++){
    if ( url_title[h][2] == 1) {
      final_message += one + url_title[h][0] + two + url_title[h][1] + three;
    }
  }

  if(!nameText.value){
    final_message = "";
  }else if(nameText.value.length == 0){
    final_message = "";
  }
  document.getElementById("msg").innerHTML = final_message;
}
