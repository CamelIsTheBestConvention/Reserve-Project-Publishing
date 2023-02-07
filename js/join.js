var pwInput = document.querySelector("#pw-write");
var pwEye = document.querySelector("#eye-img");

function pwChange() {
  let num = 0;
  pwEye.click(function () {
    if (num == 0) {
      pwEye.attr("src", "../img/hide10.png");
      num = 1;
    } else {
      pwEye.attr("src", "../img/view 4.png");
      num = 0;
    }
  });
  pwInput.prop("type", "text");
}
