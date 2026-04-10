# CrewVoy Finance Blueprint

## Run locally

```bash
npm install
npm run dev
```

## Booking email setup (EmailJS)

Bookings are sent to both owners and the user via EmailJS. Create a project at https://www.emailjs.com and add one template (used for both emails).

The booking form passes these template variables:

- `full_name`
- `user_email`
- `phone`
- `booking_date`
- `booking_time`
- `booking_date_time`
- `time_zone`
- `consent`
- `reply_to`
- `to_email`

Add your keys to `.env.local` (see `.env.example`).
