import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iframe-static',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iframe-static.component.html',
  styleUrl: './iframe-static.component.css'
})
export class IframeStaticComponent implements OnInit {

  dataIframe = {};

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.createIframe();
  }

  createIframe(): void {
    const iframe = this.renderer.createElement('iframe');
    this.renderer.setAttribute(iframe, 'src', 'assets/iframe.html');
    this.renderer.setStyle(iframe, 'width', '100%');
    this.renderer.setStyle(iframe, 'height', '500px');

    const container = this.el.nativeElement.querySelector('#iframe-container');
    this.renderer.appendChild(container, iframe);
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {
    if (event.origin !== window.location.origin) {
      return;
    }
    const data = event.data;
    console.log('Datos recibidos del iframe:', data);
    this.dataIframe = data;
    // Aquí puedes manejar los datos como desees, por ejemplo:
    // this.handleFormData(data);
  }

  // Ejemplo de método para manejar los datos
  handleFormData(data: any): void {
    console.log('Nombre:', data.nombre);
    // Puedes actualizar tu lógica de negocio o el estado de la aplicación aquí
  }
}
