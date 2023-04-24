import { Component } from '@angular/core';

@Component({
  selector: 'app-flujograma',
  templateUrl: './flujograma.component.html',
  styleUrls: ['./flujograma.component.css']
})
export class FlujogramaComponent {
  async download() {
    const url = './assets/documents/FLUJOGRAMA-DEPURACION.docx';
    let  link = document.createElement('a');
    link.href = url;
    link.target = '_blanck';
    link.download = 'Flujograma Depuracón.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
