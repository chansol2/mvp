$(".categoryClicked").on("click", function(event) {
  let name = event.currentTarget;
  let val = $(name).attr("name");
  window.location.href = "/product/"+ val;
});

$(".medium-cate-tab").on("click", function(event) {
  $(event.currentTarget).siblings().children().removeClass("active");
  $(event.currentTarget).children().addClass("active");

  target = $($(event.currentTarget).children().attr("name"));

  sibs = target.siblings();
  sibLen = sibs.length;
  targetList = sibs.slice(1,sibLen);

  targetList.addClass("d-none").removeClass("show");
  target.removeClass("d-none").addClass("show");
  // console.log(targetList)



})
