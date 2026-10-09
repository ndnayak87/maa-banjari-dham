// Mobile gallery photo ko Firestore me rakhne layak chhota banao.
// Camera photo 3-5MB hota hai — ise max 1280px JPEG (~150-300KB) me compress karo.
export function fileToCompressedDataUrl(file, maxSize = 1280, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Photo padh nahi paye"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Photo khol nahi paye"));
      img.onload = () => {
        let { width, height } = img;
        const scale = Math.min(1, maxSize / Math.max(width, height));
        width = Math.round(width * scale);
        height = Math.round(height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        // JPEG me convert — PNG screenshot bhi chhota ho jayega
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
