import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eye',
  templateUrl: './eye.component.html',
  styleUrls: ['./eye.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class EyeComponent {
  pupilStyle = {};

  onMouseMove(event: MouseEvent) {
    const eye = (event.currentTarget as HTMLElement).querySelector('.eye')!;
    const rect = eye.getBoundingClientRect();
    const pupil = eye.querySelector('.pupil')!;

    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const dx = event.clientX - eyeCenterX;
    const dy = event.clientY - eyeCenterY;
    const angle = Math.atan2(dy, dx);

    const pupilRadius = pupil.getBoundingClientRect().width / 2;
    const radius = rect.width / 2 - pupilRadius; // keeps pupil inside

    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), radius);

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    this.pupilStyle = {
      transform: `translate(${x}px, ${y}px)`,
    };
  }
}
