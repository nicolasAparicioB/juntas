import { Component } from '@angular/core';

@Component({
  selector: 'app-ley2166',
  templateUrl: './ley2166.component.html',
  styleUrls: ['./ley2166.component.css']
})
export class Ley2166Component {
  async download() {
    const url = './assets/documents/Ley_2166_de_2021.pdf';
    let  link = document.createElement('a');
    link.href = url;
    link.target = '_blanck';
    link.download = 'Ley 2166 de 2021.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
