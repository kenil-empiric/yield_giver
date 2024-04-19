let gradient;
function getGradient(ctx, chartArea) {
  if (chartArea) {
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(35, 109, 231,0.7)");
    gradient.addColorStop(0.6, "rgba(53, 205, 194,0.7)");
    gradient.addColorStop(1, "rgba(1, 249, 198,0.7)");
  }

  return gradient;
}

export default getGradient;
