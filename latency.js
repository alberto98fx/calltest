function test_inside(){
  return console.timeEnd("call_inside");
}
function test(){
  console.time("call_inside");
  test_inside();
}
