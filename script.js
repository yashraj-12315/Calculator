let result = document.getElementById("inputext");

let calculate = (number) => {
  result.value += number;
};

let Result = () => {
  try {
    result.value = eval(result.value);
    // 89*-2 -Inavlid Operation
    // eval is inbuilt function it will check whether the input is valid or not
  } catch (err) {
    alert("Enter the valid input");
  }
};

function clr() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);

  //     -1 means last digit will be removed
  //     -2 means last two digit will be removed
}
