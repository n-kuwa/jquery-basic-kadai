// ボタンを押すと文字色変化
$('#change-color').on('click', function() {
  $('#target').css('color', 'red');
});

// ボタンを押すと文字内容変化
$('#change-text').on('click', function() {
  $('#target').text('Hello!');
});

// ボタンを押すとフェードアウトで文字が消える
$('#fade-out').on('click', function() {
  $('#target').fadeOut();
});

// ボタンを押すとフェードインで文字が現れる
$('#fade-in').on('click', function() {
  $('#target').fadeIn();
});