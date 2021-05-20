$(".categoryClicked").on("click", function(event) {
  let name = event.currentTarget;
  let val = $(name).attr("name");
  window.location.href = "/product/"+ val;
});

$(".medium-cate-tab").on("click", function(event) {
  $(event.currentTarget).siblings().children().removeClass("active");
  $(event.currentTarget).children().addClass("active");

})
