## Frontend Architecture

The frontend is built using React, TypeScript, and Vite.

### Landing Page Components

```txt
WelcomePage/
```

Responsible for:

- Hero section
- Course overview
- Testimonials and proof
- Getting started guide
- Landing page navigation
- Call-to-action sections

### Payment Flow

```txt
Payment/
```

Responsible for:

- Payment submission
- Pending payment state
- User payment workflow

### Thank You Flow

```txt
ThankYouAndPayment/
```

Responsible for:

- Purchase confirmation
- Post-payment instructions

### Admin Dashboard

```txt
admin/
```

Responsible for:

- Viewing transactions
- Reviewing pending payments
- Validating purchases
- Rejecting invalid transactions
- Managing payment records

### Shared Components

```txt
Spinner.tsx
```

Used for:

- Loading states
- API request feedback

---

## Frontend Workflow

```text
Landing Page
      │
      ▼
Email Submission
      │
      ▼
Payment Page
      │
      ▼
Pending Review
      │
      ▼
Admin Dashboard
      │
      ▼
Payment Approved
      │
      ▼
Email Queue
      │
      ▼
Course Delivery
```

---

## Live Demo

https://nwanoruovictory87-web.github.io/digital-marketing-guide/
