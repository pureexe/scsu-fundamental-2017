$(function() {
  $('#searchForm').submit(function(e){
    e.preventDefault();
    var uid = $('#uid').val().trim();
    var email = $('#email').val().trim();
    email = email.toLowerCase();
    window.location.assign('score/'+md5(uid+'|'+email));
  });
});
