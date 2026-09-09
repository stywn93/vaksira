import jsPDF from "jspdf"
import { toPng } from "html-to-image"

async function captureAsImage(node) {
  return toPng(node, {
    pixelRatio: 2,
    backgroundColor: "#ffffff",
    cacheBust: true,
  })
}

export async function exportElementToPdf(node, filename = "report.pdf") {
  const dataUrl = await captureAsImage(node)
  const image = new Image()
  image.src = dataUrl

  await new Promise((resolve, reject) => {
    image.onload = resolve
    image.onerror = reject
  })

  const pdf = new jsPDF({
    orientation: image.width > image.height ? "landscape" : "portrait",
    unit: "px",
    format: [image.width, image.height],
  })

  pdf.addImage(dataUrl, "PNG", 0, 0, image.width, image.height)
  pdf.save(filename)
}