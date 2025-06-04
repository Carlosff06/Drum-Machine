import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  estado=signal<string>('Apagado');
  volumen=signal<number>(0.5);
  pista=signal<string>('');
  sonidos = ['Clap - Crackle 1.wav',
    'Hats - Metal.wav',
    'Hats - Wonky.wav',
    'Kick - 1985.wav',
    'Kick - Roundabout.wav',
    'Perc - Analog 1.wav',
    'Perc - Digital Noise.wav',
    'Snare - 1982 Drive.wav',
    'Snare - Clappers Delight.wav'
  ]

  cambiarEstado() {
    this.estado.set(this.estado() === 'Apagado' ? 'Encendido' : 'Apagado');

  }

  cambiarVolumen(){
    this.pista.set(`Volumen: ${this.volumen()}%`);
  }

  tocarSonido(opcion:number){

    if(this.estado() === 'Encendido') {
    const audio = new Audio(`sounds/${this.sonidos[opcion]}`);
    audio.volume = this.volumen()/100;
    this.pista.set(this.sonidos[opcion].split('.')[0]);
    audio.play().catch(error => {
      console.error('Error al reproducir el sonido:', error);
    })
  }
  }

}
