import QRCode from 'qrcode'

export const generateQr = (text, size, fgColor, bgColor) =>
  QRCode.toDataURL(text, {
    width: size,
    margin: 1,
    errorCorrectionLevel: 'M',
    color: { dark: fgColor, light: bgColor },
  })
