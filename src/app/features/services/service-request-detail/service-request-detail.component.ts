import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceRequest } from '../models/service-request.model';

@Component({
  selector: 'app-service-request-detail',
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
        <div class="navigation-section">
          <button class="back-button" (click)="goBack()">
            <span class="back-icon">←</span> Volver
          </button>
          <a href="tel:+00000000000" class="contact-button">
            Contacta GoCast: +00-000-0000000
          </a>
        </div>

        <h2 class="service-status">Su servicio de asistencia vial está en camino</h2>

        <div class="service-card">
          <img src="assets/images/ss4.png" alt="Servicio de Grúa" class="service-image">
          <div class="service-tag">Asistencia Vial</div>
          <h3 class="service-title">Servicio de Grúa</h3>
        </div>

        <div class="provider-contact">
          <h3 class="provider-title">Contacta a tu proveedor:</h3>
          <p class="provider-phone">+00-000-0000000</p>
        </div>

        <div class="request-details">
          <div class="detail-group">
            <label>Nombre</label>
            <div class="detail-value">{{ request?.name }}</div>
          </div>

          <div class="detail-group">
            <label>Vehículo</label>
            <div class="detail-value">{{ request?.vehicle }}</div>
          </div>

          <div class="detail-group">
            <label>Placa</label>
            <div class="detail-value">{{ request?.plate }}</div>
          </div>
        </div>

        <button class="cancel-button" (click)="cancelService()">
          Cancelar servicio
        </button>
      </div>
    </div>
  `,
  styles: [`
    .service-page {
      min-height: 100vh;
      background-color: #3F51B5;
      color: white;
    }

    .header {
      background-color: white;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
    }

    .navigation-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .back-button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      color: white;
      font-size: 1rem;
      cursor: pointer;
    }

    .back-icon {
      margin-right: 0.5rem;
    }

    .contact-button {
      background-color: #2196F3;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-size: 0.9rem;
    }

    .service-status {
      text-align: center;
      font-size: 1.2rem;
      font-weight: normal;
      margin: 2rem 0;
    }

    .service-card {
      background-color: white;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .service-image {
      width: 100%;
      max-width: 400px;
      height: auto;
      margin-bottom: 1rem;
    }

    .service-tag {
      display: inline-block;
      background-color: #E3F2FD;
      color: #2196F3;
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .service-title {
      color: #333;
      margin: 0;
      font-size: 1.2rem;
    }

    .provider-contact {
      background-color: #1A237E;
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 2rem;
    }

    .provider-title {
      margin: 0 0 0.5rem;
      font-size: 1rem;
      font-weight: normal;
    }

    .provider-phone {
      margin: 0;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .request-details {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .detail-group {
      margin-bottom: 1rem;
    }

    .detail-group:last-child {
      margin-bottom: 0;
    }

    .detail-group label {
      display: block;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
      opacity: 0.8;
    }

    .detail-value {
      font-size: 1rem;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 0.75rem;
      border-radius: 4px;
    }

    .cancel-button {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 4px;
      background-color: #FF4081;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .cancel-button:hover {
      background-color: #F50057;
    }
  `]
})
export class ServiceRequestDetailComponent implements OnInit {
  request: ServiceRequest | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.request = navigation.extras.state['serviceRequest'] as ServiceRequest;
    }
  }

  ngOnInit(): void {
    if (!this.request) {
      this.router.navigate(['/services/roadside']);
    }
  }

  goBack(): void {
    this.router.navigate(['/services/roadside']);
  }

  cancelService(): void {
    // Aquí iría la lógica para cancelar el servicio
    this.router.navigate(['/services/roadside']);
  }
}
