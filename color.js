//Links라는 변수에 객체를 담을 것임
var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll("a"); // 모든 a태그를 배열로 저장
    for (var i = 0; i < alist.length; i++) {
      alist[i].style.color = color;
    }
  },
};
//Body라는 변수에 객체를 담을 것임
var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
function nightDayHandler(self) {
  if (self.value === "Night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "Day";
    Links.setColor("white");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "Night";
    Links.setColor("black");
  }
}
