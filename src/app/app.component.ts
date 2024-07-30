import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IframeStaticComponent } from './iframe-static/iframe-static.component';
import { IframeDynamicComponent } from './iframe-dynamic/iframe-dynamic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IframeStaticComponent, IframeDynamicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hola-iframe';
  dataIframe = {};
}
