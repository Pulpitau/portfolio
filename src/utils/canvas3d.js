export function rotY(x, y, z, a) {
  return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)]
}
export function rotX(x, y, z, a) {
  return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)]
}
export function proj3(x, y, z, cx, cy, fov) {
  const s = fov / (fov + z)
  return [cx + x * s, cy + y * s, s]
}
