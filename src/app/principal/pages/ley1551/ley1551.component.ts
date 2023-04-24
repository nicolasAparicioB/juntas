import { Component } from '@angular/core';
@Component({
  selector: 'app-ley1551',
  templateUrl: './ley1551.component.html',
  styleUrls: ['./ley1551.component.css']
})
export class Ley1551Component {

async download() {
  const url = './assets/documents/Ley_1551_de_2012.pdf';
  let  link = document.createElement('a');
  link.href = url;
  link.target = '_blanck';
  link.download = 'Ley 1551 de 2012.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
}
