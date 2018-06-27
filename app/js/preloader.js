document.body.onload = function() {
  setTimeout(function() {
    var sitebody = document.getElementById('page-wrapper');
    if( !sitebody.classList.contains('done'))
    {
      sitebody.classList.add('done');
    }
  }, 300);
  setTimeout(function() {
    var preloader = document.getElementById('page-preloader');
    if( !preloader.classList.contains('done'))
    {
      preloader.classList.add('done');
    }
  }, 1000);
}