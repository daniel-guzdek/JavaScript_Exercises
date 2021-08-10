let fn = function() {
  // You need to write a self calling function.
  {
    (function() {
      let l = 'let';
      var v = 'var';
      console.log(l);
      console.log(v);
    })();
  }
}

fn();