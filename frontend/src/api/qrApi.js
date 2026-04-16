import axios from 'axios'

export const generateQr = async (url, size, fgColor, bgColor) => {
  const response = await axios.post(
    'http://localhost:8080/api/qr/generate',
    { url, size, foregroundColor: fgColor, backgroundColor: bgColor },
    { responseType: 'blob' }
  )
  return response.data
}