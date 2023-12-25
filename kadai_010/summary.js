$(function() {
  $('p').text('こんにちは！');

  //change-colorがクリックされたら文字の色が変わる
  $('#change-color').on({
    'click':() => {
      $('#target').css('color', 'red');
    },
  });

  //change-textがクリックされたら文字内容が変わる
  $('#change-text').on({
    'click':() => {
      $('#target').text('Hello!');
    },
  });

  //fade-outがクリックされたらフェードアウトで文字が消える
  $('#fade-out').on({
    'click':() => {
      $('#target').fadeOut();
    },
  });  

  //fade-inがクリックされたらフェードインで文字が現れる
  $('#fade-in').on({
    'click':() => {
      $('#target').fadeIn();
    },
  });  

  });