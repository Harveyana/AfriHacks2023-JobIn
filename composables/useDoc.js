import { default as pdfParse } from 'pdf-parse';
const fs = require('fs');

export async function extractPdf(pdfBuffer) {
  try {
    const data = await pdfParse(pdfBuffer);
    return data.text;
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    return null;
  }
}