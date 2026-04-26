export function formatSecondsToMinutes(seconds: number) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondMod = String(Math.floor(seconds % 60)).padStart(2, '0');
  console.log(minutes, secondMod);
  return `${minutes}:${secondMod}`;
}
