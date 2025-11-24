import { ShipmentData } from '../types';

/**
 * ==================================================================================
 *  📦 LOGIXPRESS SHIPMENT CONTROL CENTER
 * ==================================================================================
 * 
 *  Use this section to manage the state of your shipments. 
 *  Changes made here will be reflected immediately in the application.
 * 
 *  INSTRUCTIONS:
 *  1. Locate the shipment by its UNIQUE TRACKING ID below.
 *  2. Update the `currentStatus` field to one of the allowed statuses:
 *     - 'Pending'          (Order received, not yet shipped)
 *     - 'In Transit'       (Moving between facilities)
 *     - 'Out for Delivery' (On the truck to final destination)
 *     - 'Delivered'        (Successfully arrived)
 *     - 'Exception'        (Held up, customs issue, delayed)
 * 
 *  3. To add history, append a new object to the `timeline` array.
 *     - Set `completed: true` for past events.
 *     - Set `completed: false` for the current or future step.
 * 
 * ==================================================================================
 */

export const MOCK_SHIPMENTS: Record<string, ShipmentData> = {
  
  // --------------------------------------------------------------------------------
  // SHIPMENT 1: Tokyo 🇯🇵 -> San Francisco 🇺🇸
  // TRACKING CODE: LX-40291882
  // --------------------------------------------------------------------------------
  'LX-40291882': {
    trackingId: 'LX-40291882',
    currentStatus: 'In Transit', // <--- 📝 CHANGE STATUS HERE
    estimatedDelivery: 'Nov 27, 2025',
    serviceType: 'Specialized Auto Transport',
    weight: '2,200 kg',
    dimensions: '520x195x150 cm',
    sender: {
      name: 'Luxury Auto Imports JP',
      location: 'Tokyo, Japan',
    },
    receiver: {
      name: 'Prestige Motors SF',
      location: 'San Francisco, CA',
      address: '888 Brannan St, San Francisco, CA 94103'
    },
    items: [
      { 
        name: '2025 Mercedes-Benz S-Class', 
        quantity: 1, 
        weight: '2200kg', 
        category: 'Automobile',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      }
    ],
    timeline: [
      {
        id: '1',
        status: 'Vehicle Processed',
        location: 'Yokohama Port, JP',
        timestamp: 'Nov 01, 2025 - 09:00 AM',
        description: 'Vehicle inspection passed. Loaded into container.',
        completed: true,
        icon: 'package'
      },
      {
        id: '2',
        status: 'Departed Port',
        location: 'Yokohama Port, JP',
        timestamp: 'Nov 03, 2025 - 06:00 PM',
        description: 'Vessel "Ocean Giant" departed for USA.',
        completed: true,
        icon: 'plane' // representing ship/travel
      },
      {
        id: '3',
        status: 'In Transit',
        location: 'Pacific Ocean',
        timestamp: 'Nov 15, 2025 - 12:00 PM',
        description: 'Mid-transit update. Weather conditions normal.',
        completed: true,
        icon: 'plane'
      },
      {
        id: '4',
        status: 'Arriving Soon',
        location: 'Golden Gate Bridge, San Francisco',
        timestamp: 'Nov 24, 2025 - 08:30 AM',
        description: 'Vessel approaching San Francisco Bay.',
        completed: true, 
        icon: 'truck'
      },
      {
        id: '5',
        status: 'Customs Processing',
        location: 'Port of Oakland, CA',
        timestamp: 'Nov 24, 2025 - 02:00 PM',
        description: 'Awaiting customs clearance and unloading.',
        completed: false,
        icon: 'warehouse'
      }
    ]
  },

  // --------------------------------------------------------------------------------
  // SHIPMENT 2: Dallas 🇺🇸 -> Austin 🇺🇸
  // TRACKING CODE: LX-72819304
  // --------------------------------------------------------------------------------
  'LX-72819304': {
    trackingId: 'LX-72819304',
    currentStatus: 'Delivered', // <--- 📝 CHANGE STATUS HERE
    estimatedDelivery: 'Delivered',
    serviceType: 'Ground Freight Express',
    weight: '85 kg',
    dimensions: '200x90x80 cm',
    sender: {
      name: 'Prime Furniture Warehouse',
      location: 'Dallas, TX',
    },
    receiver: {
      name: 'Alice Johnson',
      location: 'Austin, TX',
      address: '1234 River Rd, Austin, TX 78701'
    },
    items: [
      { 
        name: 'Oak Dining Table', 
        quantity: 1, 
        weight: '85kg', 
        category: 'Furniture',
        image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=200&q=80'
      }
    ],
    timeline: [
      {
        id: '1',
        status: 'Picked Up',
        location: 'Dallas, TX',
        timestamp: 'Oct 15, 2025 - 10:00 AM',
        description: 'Carrier picked up package.',
        completed: true,
        icon: 'truck'
      },
      {
        id: '2',
        status: 'In Transit',
        location: 'I-35 South',
        timestamp: 'Oct 16, 2025 - 01:00 PM',
        description: 'On route to destination hub.',
        completed: true,
        icon: 'truck'
      },
      {
        id: '3',
        status: 'Delivered',
        location: 'Austin, TX',
        timestamp: 'Oct 17, 2025 - 02:30 PM',
        description: 'Delivered to front porch.',
        completed: true,
        icon: 'check'
      }
    ]
  },

  // --------------------------------------------------------------------------------
  // SHIPMENT 3: Los Angeles 🇺🇸 -> Miami 🇺🇸
  // TRACKING CODE: LX-19283745
  // --------------------------------------------------------------------------------
  'LX-19283745': {
    trackingId: 'LX-19283745',
    currentStatus: 'Pending', // <--- 📝 CHANGE STATUS HERE
    estimatedDelivery: 'TBD',
    serviceType: 'Standard Shipping',
    weight: '2.5 kg',
    dimensions: '30x20x10 cm',
    sender: {
      name: 'Fashion Nova',
      location: 'Los Angeles, CA',
    },
    receiver: {
      name: 'Emily Davis',
      location: 'Miami, FL',
      address: '777 Ocean Dr, Miami, FL 33139'
    },
    items: [
      { 
        name: 'Summer Dress', 
        quantity: 2, 
        weight: '1kg', 
        category: 'Apparel',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=200&q=80'
      },
      { 
        name: 'Designer Sandals', 
        quantity: 1, 
        weight: '1.5kg', 
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=200&q=80'
      }
    ],
    timeline: [
      {
        id: '1',
        status: 'Order Placed',
        location: 'Online Store',
        timestamp: 'Today - 10:00 AM',
        description: 'Order details received. Waiting for pickup.',
        completed: true,
        icon: 'package'
      },
      {
        id: '2',
        status: 'Ready for Pickup',
        location: 'Los Angeles, CA',
        timestamp: 'Today - 02:00 PM',
        description: 'Label created, waiting for carrier.',
        completed: false,
        icon: 'warehouse'
      }
    ]
  },

  // --------------------------------------------------------------------------------
  // SHIPMENT 4: Berlin 🇩🇪 -> London 🇬🇧
  // TRACKING CODE: LX-93021833
  // --------------------------------------------------------------------------------
  'LX-93021833': {
    trackingId: 'LX-93021833',
    currentStatus: 'Exception', // <--- 📝 CHANGE STATUS HERE
    estimatedDelivery: 'Delayed',
    serviceType: 'International Heavy Freight',
    weight: '150 kg',
    dimensions: '100x100x100 cm',
    sender: {
      name: 'AutoParts Direct GmbH',
      location: 'Berlin, Germany',
    },
    receiver: {
      name: 'Mechanic Shop 24',
      location: 'London, UK',
      address: '22 Baker St, London, UK'
    },
    items: [
      { 
        name: 'V8 Engine Block', 
        quantity: 1, 
        weight: '150kg', 
        category: 'Automotive',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=200&q=80'
      }
    ],
    timeline: [
      {
        id: '1',
        status: 'Shipped',
        location: 'Berlin, DE',
        timestamp: 'Nov 01, 2025',
        description: 'Left warehouse.',
        completed: true,
        icon: 'warehouse'
      },
      {
        id: '2',
        status: 'Customs Hold',
        location: 'Dover, UK',
        timestamp: 'Nov 03, 2025 - 08:00 AM',
        description: 'Missing commercial invoice. Clearance delayed.',
        completed: false,
        icon: 'alert-triangle'
      }
    ]
  }
};

export const getShipment = async (id: string): Promise<ShipmentData | null> => {
  return new Promise((resolve) => {
    // Simulate network delay for realism
    setTimeout(() => {
      resolve(MOCK_SHIPMENTS[id] || null);
    }, 800); 
  });
};