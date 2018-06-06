function assignedMatrixMultiplication(x, y, res) {
  // Unrolled loop
  res[0] = x[0] * y[0] + x[1] * y[4] + x[2] * y[8] + x[3] * y[12];
  res[1] = x[0] * y[1] + x[1] * y[5] + x[2] * y[9] + x[3] * y[13];
  res[2] = x[0] * y[2] + x[1] * y[6] + x[2] * y[10] + x[3] * y[14];
  res[3] = x[0] * y[3] + x[1] * y[7] + x[2] * y[11] + x[3] * y[15];

  res[4] = x[4] * y[0] + x[5] * y[4] + x[6] * y[8] + x[7] * y[12];
  res[5] = x[4] * y[1] + x[5] * y[5] + x[6] * y[9] + x[7] * y[13];
  res[6] = x[4] * y[2] + x[5] * y[6] + x[6] * y[10] + x[7] * y[14];
  res[7] = x[4] * y[3] + x[5] * y[7] + x[6] * y[11] + x[7] * y[15];

  res[8] = x[8] * y[0] + x[9] * y[4] + x[10] * y[8] + x[11] * y[12];
  res[9] = x[8] * y[1] + x[9] * y[5] + x[10] * y[9] + x[11] * y[13];
  res[10] = x[8] * y[2] + x[9] * y[6] + x[10] * y[10] + x[11] * y[14];
  res[11] = x[8] * y[3] + x[9] * y[7] + x[10] * y[11] + x[11] * y[15];

  res[12] = x[12] * y[0] + x[13] * y[4] + x[14] * y[8] + x[15] * y[12];
  res[13] = x[12] * y[1] + x[13] * y[5] + x[14] * y[9] + x[15] * y[13];
  res[14] = x[12] * y[2] + x[13] * y[6] + x[14] * y[10] + x[15] * y[14];
  res[15] = x[12] * y[3] + x[13] * y[7] + x[14] * y[11] + x[15] * y[15];

  return res;
}

function assignTranslate(matrix, x, y, z) {
  matrix[0] = 1;
  matrix[1] = 0;
  matrix[2] = 0;
  matrix[3] = 0;
  matrix[4] = 0;
  matrix[5] = 1;
  matrix[6] = 0;
  matrix[7] = 0;
  matrix[8] = 0;
  matrix[9] = 0;
  matrix[10] = 1;
  matrix[11] = 0;
  matrix[12] = x;
  matrix[13] = y;
  matrix[14] = z;
  matrix[15] = 1;
}

function assignRotateX(matrix, rad) {
  matrix[0] = 1;
  matrix[1] = 0;
  matrix[2] = 0;
  matrix[3] = 0;
  matrix[4] = 0;
  matrix[5] = Math.cos(rad);
  matrix[6] = -Math.sin(rad);
  matrix[7] = 0;
  matrix[8] = 0;
  matrix[9] = Math.sin(rad);
  matrix[10] = Math.cos(rad);
  matrix[11] = 0;
  matrix[12] = 0;
  matrix[13] = 0;
  matrix[14] = 0;
  matrix[15] = 1;
}

var assignRotateY = function(matrix, rad) {
  matrix[0] = Math.cos(rad);
  matrix[1] = 0;
  matrix[2] = Math.sin(rad);
  matrix[3] = 0;
  matrix[4] = 0;
  matrix[5] = 1;
  matrix[6] = 0;
  matrix[7] = 0;
  matrix[8] = -Math.sin(rad);
  matrix[9] = 0;
  matrix[10] = Math.cos(rad);
  matrix[11] = 0;
  matrix[12] = 0;
  matrix[13] = 0;
  matrix[14] = 0;
  matrix[15] = 1;
};

function assignRotateZ(matrix, rad) {
  matrix[0] = Math.cos(rad);
  matrix[1] = -Math.sin(rad);
  matrix[2] = 0;
  matrix[3] = 0;
  matrix[4] = Math.sin(rad);
  matrix[5] = Math.cos(rad);
  matrix[6] = 0;
  matrix[7] = 0;
  matrix[8] = 0;
  matrix[9] = 0;
  matrix[10] = 1;
  matrix[11] = 0;
  matrix[12] = 0;
  matrix[13] = 0;
  matrix[14] = 0;
  matrix[15] = 1;
}

function assignSkew(matrix, ax, ay) {
  matrix[0] = 1;
  matrix[1] = Math.tan(ax);
  matrix[2] = 0;
  matrix[3] = 0;
  matrix[4] = Math.tan(ay);
  matrix[5] = 1;
  matrix[6] = 0;
  matrix[7] = 0;
  matrix[8] = 0;
  matrix[9] = 0;
  matrix[10] = 1;
  matrix[11] = 0;
  matrix[12] = 0;
  matrix[13] = 0;
  matrix[14] = 0;
  matrix[15] = 1;
}

function assignScale(matrix, x, y) {
  matrix[0] = x;
  matrix[1] = 0;
  matrix[2] = 0;
  matrix[3] = 0;
  matrix[4] = 0;
  matrix[5] = y;
  matrix[6] = 0;
  matrix[7] = 0;
  matrix[8] = 0;
  matrix[9] = 0;
  matrix[10] = 1;
  matrix[11] = 0;
  matrix[12] = 0;
  matrix[13] = 0;
  matrix[14] = 0;
  matrix[15] = 1;
}

function assignIdentity(matrix) {
  matrix[0] = 1;
  matrix[1] = 0;
  matrix[2] = 0;
  matrix[3] = 0;
  matrix[4] = 0;
  matrix[5] = 1;
  matrix[6] = 0;
  matrix[7] = 0;
  matrix[8] = 0;
  matrix[9] = 0;
  matrix[10] = 1;
  matrix[11] = 0;
  matrix[12] = 0;
  matrix[13] = 0;
  matrix[14] = 0;
  matrix[15] = 1;
}

function moveArray(src, dest) {
  dest[0] = src[0];
  dest[1] = src[1];
  dest[2] = src[2];
  dest[3] = src[3];
  dest[4] = src[4];
  dest[5] = src[5];
  dest[6] = src[6];
  dest[7] = src[7];
  dest[8] = src[8];
  dest[9] = src[9];
  dest[10] = src[10];
  dest[11] = src[11];
  dest[12] = src[12];
  dest[13] = src[13];
  dest[14] = src[14];
  dest[15] = src[15];
}

const a = new Float32Array(16);
const b = new Float32Array(16);

export function createMatris() {
  var data = new Float32Array(16);
  assignIdentity(data);
  return data;
}

export function asCSS(data) {
  var css = "matrix3d(";
  for (var i = 0; i < 15; ++i) {
    css += data[i].toFixed(10) + ",";
  }
  css += data[15].toFixed(10) + ")";
  return css;
}

export function clear(data) {
  assignIdentity(data);
}

export function fromCSS(cssString) {
  const cells = cssString
    .replace("matrix3d(", "")
    .replace(")", "")
    .split(",");
  const matris = createMatris();
  cells.forEach((cell, index) => (matris[index] = parseFloat(cell)));
  return matris;
}

export function translate(data, x = 0, y = 0, z = 0) {
  moveArray(data, a);
  assignTranslate(b, x, y, z);
  assignedMatrixMultiplication(b, a, data);
}

export function rotateX(data, radians) {
  moveArray(data, a);
  assignRotateX(b, radians);
  assignedMatrixMultiplication(b, a, data);
}

export function rotateY(data, radians) {
  moveArray(data, a);
  assignRotateY(b, radians);
  assignedMatrixMultiplication(b, a, data);
}

export function rotateZ(data, radians) {
  moveArray(data, a);
  assignRotateZ(b, radians);
  assignedMatrixMultiplication(b, a, data);
}

export function scale(data, x, y) {
  moveArray(data, a);
  assignScale(b, x, y);
  assignedMatrixMultiplication(b, a, data);
}

export function skew(data, ax, ay) {
  moveArray(data, a);
  assignSkew(b, ax, ay);
  assignedMatrixMultiplication(b, a, data);
}
