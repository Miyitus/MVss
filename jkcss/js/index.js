(function() {
  var ctx, cvs, db, r, raf, t;

  t = 0;

  cvs = document.createElement("canvas");

  document.body.appendChild(cvs);

  ctx = cvs.getContext("2d");

  cvs.width = window.innerWidth;

  cvs.height = window.innerHeight;

  raf = requestAnimationFrame;

  db = function(x, y, v) {
    var p, pv;
    p = (x * y) / 4096;
    pv = (v - 80) / 40;
  ctx.fillStyle = "rgb(" + (parseInt((1 - pv) * 255)) + "," + (parseInt(pv * 255)) + "," + (parseInt((0.5 - pv) * 255)) + ")";
    ctx.fillRect(parseInt(x * 10 - parseInt(-window.innerWidth, 10) / 64 * y + window.innerWidth / 2 + parseInt(-window.innerWidth * 1.2, 10), 10), parseInt(y - v + Math.cos(t / 3) * parseInt(window.innerHeight / 3, 10) / 64 * x + window.innerHeight / 2, 10), 10, Math.pow(v, 1.1));
  };

  raf(r = function() {
    var x, y, _i, _j;
    t += 0.1;
   ctx.fillStyle = "#8fb8ee";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    for (x = _i = 0; _i <= 64; x = ++_i) {
      for (y = _j = 0; _j <= 64; y = ++_j) {
        db(x, y, Math.sin(x * y / 4096 * Math.PI * 10 / 2 + t) * 20 + 100);
      }
    }
    return raf(r);
  });

}).call(this);

//

