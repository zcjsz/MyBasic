function func1(x) {
  console.log('func1-' + x);
}

function func2() {
  return func1(2);
}

func2();
