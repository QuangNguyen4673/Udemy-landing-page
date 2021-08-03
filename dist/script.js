$(document).ready(function () {
  $(".carousel .slide")
    .popover({
      html: true,
      offset: 80,
      trigger: "manual",
      content: function () {
        return $("#pop").html();
      },
    })
    .on("mouseenter", function () {
      var _this = this;
      $(this).popover("show");
      $(".popover").on("mouseleave", function () {
        $(_this).popover("hide");
      });
    })
    .on("mouseleave", function () {
      var _this = this;
      setTimeout(function () {
        if (!$(".popover:hover").length) {
          $(_this).popover("hide");
        }
      }, 100);
    });
});
