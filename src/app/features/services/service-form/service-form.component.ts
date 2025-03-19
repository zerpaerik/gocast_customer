import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceType } from '../models/service-type.model';

@Component({
  selector: 'app-service-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="service-page">
    <header class="header">
        <div class="header-content">
          <img src="assets/images/logob.png" alt="GoCast Logo" class="header-logo">
        </div>
      </header>

      <div class="main-content">
        <div class="welcome-section">
          <h1>Hola, {{ userName }}</h1>
          <p class="subtitle">¿Como te podemos ayudar?</p>
        </div>

        <div class="contact-info">
          <a href="tel:+00000000000" class="contact-button">
            Contacta GoCast: +00-000-0000000
          </a>
        </div>

        <div class="services-grid">
          <div *ngFor="let service of services; trackBy: trackServiceById" class="service-card" (click)="onServiceSelect(service)">
            <div class="card-image">
              <img [src]="service.imageUrl" [alt]="service.title">
            </div>
            <div class="card-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .service-page {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
    }

    .header {
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
      width: 100%;
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .header-logo {
      height: 32px;
      width: auto;
    }

    .main-content {
      flex: 1;
      background-color: #3F51B5;
      padding: 2rem;
    }

    .welcome-section {
      max-width: 1200px;
      margin: 0 auto 2rem;
      color: white;
    }

    h1 {
      font-size: 2rem;
      margin: 0;
      font-weight: normal;
    }

    .subtitle {
      font-size: 1.1rem;
      margin: 0.5rem 0 0;
      opacity: 0.9;
    }

    .contact-info {
      max-width: 1200px;
      margin: 0 auto 2rem;
      text-align: right;
    }

    .contact-button {
      display: inline-block;
      background-color: #2196F3;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-size: 0.9rem;
      transition: background-color 0.3s;
    }

    .contact-button:hover {
      background-color: #1976D2;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .service-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .service-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-content {
      padding: 1.5rem;
    }

    .card-content h3 {
      margin: 0 0 0.5rem;
      color: #333;
      font-size: 1.25rem;
    }

    .card-content p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
        padding: 0 1rem;
      }

      .contact-info {
        text-align: center;
      }
    }
  `]
})
export class ServiceFormComponent implements OnInit {
  userName = '[Nombre]'; // Esto debería venir del servicio de autenticación
  services: ServiceType[] = [
    {
      id: '1',
      title: 'Asistencia Vial',
      description: 'Tu auxilio ante cualquier problema en el camino',
      imageUrl: 'assets/images/srv.png',
      route: '/services/roadside'
    },
    {
      id: '2',
      title: 'Asistencia Vial',
      description: 'Consulta a un médico sobre tu condición física',
      imageUrl: 'assets/images/srv1.png',
      route: '/services/medical'
    },
    {
      id: '3',
      title: 'Mascotas',
      description: 'Consulta sobre tu mascota',
      imageUrl: 'assets/images/srv2.png',
      route: '/services/pets'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Aquí podríamos obtener el nombre del usuario del servicio de autenticación
  }

  trackServiceById(index: number, service: ServiceType) {
    return service.id;
  }

  onServiceSelect(service: ServiceType) {
    // Extraer el ID del servicio de la ruta
    const id = service.route.split('/')[2];
    this.router.navigate(['/services', id]);
  }
}
