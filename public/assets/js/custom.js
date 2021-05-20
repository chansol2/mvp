$(".categoryClicked").on("click", function(event) {
  let name = event.currentTarget;
  let val = $(name).attr("name");
  window.location.href = "/product/"+ val;
});
