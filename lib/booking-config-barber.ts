import { BookingConfig } from './booking-types';

export const barberConfig: BookingConfig = {
  businessName: 'Iron & Blade Barbershop',
  businessEmail: 'info@ironblade.com',
  layout: 'barber',

  services: [
    { id: 'classic-cut', name: 'Classic Haircut', category: 'Haircut', duration: 30, price: 35, description: 'Clean cut, styled to perfection' },
    { id: 'beard-trim', name: 'Beard Trim & Shape', category: 'Beard', duration: 20, price: 25, description: 'Sculpted beard, sharp lines' },
    { id: 'hot-shave', name: 'Hot Towel Shave', category: 'Shave', duration: 40, price: 45, description: 'Traditional straight razor shave' },
    { id: 'cut-beard', name: 'Cut + Beard Combo', category: 'Combo', duration: 50, price: 55, description: 'Full grooming experience' },
    { id: 'fade', name: 'Skin Fade', category: 'Haircut', duration: 45, price: 40, description: 'High, mid or low fade' },
    { id: 'kids-cut', name: "Kid's Cut", category: 'Haircut', duration: 20, price: 20, description: 'Under 12 years old' },
  ],

  // ← teamMembers zamiast team
  teamMembers: [
    { id: 'marcus', name: 'Marcus', role: 'Master Barber', avatar: '✂️' },
    { id: 'dante', name: 'Dante', role: 'Fade Specialist', avatar: '💈' },
    { id: 'ricky', name: 'Ricky', role: 'Beard Artist', avatar: '🪒' },
  ],

  // ← businessHours zamiast workingHours (pamiętamy ten błąd z historii 😄)
  businessHours: [
    { day: 'Monday',    open: '09:00', close: '20:00' },
    { day: 'Tuesday',   open: '09:00', close: '20:00' },
    { day: 'Wednesday', open: '09:00', close: '20:00' },
    { day: 'Thursday',  open: '09:00', close: '20:00' },
    { day: 'Friday',    open: '09:00', close: '20:00' },
    { day: 'Saturday',  open: '09:00', close: '18:00' },
    { day: 'Sunday',    open: '09:00', close: '09:00', closed: true },
  ],

  timeSlotDuration: 30,
  allowTeamSelection: true,
  requirePhone: false,
  minAdvanceBookingHours: 2,
  maxAdvanceBookingDays: 60,
};