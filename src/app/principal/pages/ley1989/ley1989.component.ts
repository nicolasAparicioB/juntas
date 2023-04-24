import { Component } from '@angular/core';

@Component({
  selector: 'app-ley1989',
  templateUrl: './ley1989.component.html',
  styleUrls: ['./ley1989.component.css']
})
export class Ley1989Component {
  async download() {
    const url = './assets/documents/Ley_1989_de_2019.pdf';
    let  link = document.createElement('a');
    link.href = url;
    link.target = '_blanck';
    link.download = 'Ley 1989 de 2019.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
