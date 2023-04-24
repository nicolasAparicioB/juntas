import { Component } from '@angular/core';
import { PDFDocument } from 'pdf-lib';
@Component({
  selector: 'app-modelo-estatutos',
  templateUrl: './modelo-estatutos.component.html',
  styleUrls: ['./modelo-estatutos.component.css'],
})
export class ModeloEstatutosComponent {
  async download() {
    const url = './assets/documents/MODELO-ESTATUTOS.pdf';
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[8];
    firstPage.drawText('xxxxxxxxxx', {
      x: 170,
      y: 560,
      size: 10,
    });
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const urlDownloadPdf = window.URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.href = urlDownloadPdf;
    link.target = '_blanck';
    link.download = 'Modelo estatutos.pdf';
    document.body.appendChild(link);
    link.click();
  }
}
