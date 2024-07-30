import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iframe-dynamic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iframe-dynamic.component.html',
  styleUrl: './iframe-dynamic.component.css'
})
export class IframeDynamicComponent implements OnInit {

  dataIframe = {};

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.createIframe();
  }

  createIframe(): void {
    const iframe = this.renderer.createElement('iframe');
    this.renderer.setStyle(iframe, 'width', '100%');
    this.renderer.setStyle(iframe, 'height', '500px');

    const container = this.el.nativeElement.querySelector('#iframe-container');
    this.renderer.appendChild(container, iframe);

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iframe dinámico</title>
</head>

<body>
    <h1>iframe dinámico</h1>
    <p>Este es un iframe dinámico.</p>

    <form id="myForm" action="">
        <input type="text" id="nombre" placeholder="Nombre">
        <button type="button" onclick="sendFormData()">Enviar</button>
    </form>

    <div id="result"></div>

    <script>
        function sendFormData() {
            const form = document.getElementById('myForm');
            const nombre = form.querySelector('#nombre').value;
            const data = { nombre };

            // Enviar datos al padre
            window.parent.postMessage(data, '*');
            showResult('Data enviada al padre: ' + JSON.stringify(data));
        }

        function showResult(result) {
            document.getElementById('result').innerHTML = result;
        }
    </script>
</body>

</html>
      `);
      doc.close();
    }
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
