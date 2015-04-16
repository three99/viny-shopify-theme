

function paginate(){
  var $more = $("#more");
  var $grid = $("#products-grid"); 
  if ($more.length) {
    if($(document).height() - 500 < ($(document).scrollTop() + $(window).height())) {
      url = $more.attr("href");
      $more.remove();
      $.ajax({
        type: 'GET',
        url: url,
        beforeSend: function() {
          $grid.after('<small class="loader">loading more</small>');
        },
        success: function(data) {
          $grid.next().remove();
          var $newitems = $(data).find(".product-grid-item");
          $newitems.addClass("invisible");
          $newitems.each(function(i){
            var $item = $(this);
            $grid.append($item);
            setTimeout(function(){
              $item.removeClass("invisible");
            }, 120 * i);
          });
          setTimeout(function(){
            $grid.after($(data).find("#more"));
          }, 120 * $newitems.length);
        },
        dataType: "html"
      });
    }
  }
}

$(document).ready(function () {
  $(window).scroll(function(){
    //setTimeout(paginate, 500);
    paginate();
  });
});
