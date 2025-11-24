export interface TrackingEvent {
  id: string;
  status: string;
  location: string;
  timestamp: string;
  description: string;
  completed: boolean;
  // Added 'alert-triangle' to valid icon types
  icon: 'package' | 'truck' | 'plane' | 'check' | 'warehouse' | 'alert-triangle';
}

export interface Item {
  name: string;
  quantity: number;
  weight: string;
  category: string;
  image?: string;
}

export interface ShipmentData {
  trackingId: string;
  sender: {
    name: string;
    location: string;
  };
  receiver: {
    name: string;
    location: string;
    address: string;
  };
  currentStatus: 'Pending' | 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Exception';
  estimatedDelivery: string;
  items: Item[];
  timeline: TrackingEvent[];
  weight: string;
  dimensions: string;
  serviceType: string;
}