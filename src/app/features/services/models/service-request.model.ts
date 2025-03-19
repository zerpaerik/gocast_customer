export interface ServiceRequest {
  name: string;
  vehicle: string;
  plate: string;
  location: string;
  phone: string;
  details?: string;
  serviceId?: string;
  serviceType?: string;
  status: 'pending' | 'accepted' | 'in_progress' | 'completed' | 'cancelled';
  timestamp: string;
}
