import axios from 'axios'

export const generateQr = async (url, size) => {
  const response = await axios.post(
    'http://localhost:8080/api/qr/generate',
    { url, size },
    { responseType: 'blob' }
  )
  return response.data
}