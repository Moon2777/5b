function pattern1(radius, time){
  let c = Math.cos(time);
  let s = Math.sin(time);

  let x = c;
  let z = s;
  let y = ((c ** 2) * (s ** 2));

  let v = [radius[0] * x, radius[1] * z + 1.25, radius[2] * y];

  return v;
}

function pattern2(radius, time){
  let c = Math.cos(3 * time);
  let s = Math.sin(2 * time);

  let x = c * (s ** 2);
  let z = s * (c ** 2);
  let y = (s ** 2);

  let v = [radius[0] * x, radius[1] * z + 1, radius[2] * y];
  return v;
}

function pattern3(radius, time){
  let c = Math.cos(time);
  let s = Math.sin(time);

  let x = c;
  let z = s;
  let y = c * s;

  let v = [radius[0] * x, radius[1] * z + 1, radius[2] * y];
  return v;
}
