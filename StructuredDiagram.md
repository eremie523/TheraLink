## 1. DATA FLOW DIAGRAM (DFD - LEVEL 1)

Entities:

- Client
- Therapist
- Admin

Processes:

- 1.0 Client Onboarding
- 2.0 Therapist Verification
- 3.0 Matchmaking & Booking
- 4.0 Session Execution
- 5.0 Payment & Review

Data Stores:

- D1: User DB
- D2: Therapist KYC Docs
- D3: Sessions DB
- D4: Payment Transactions

Flow:
Client → 1.0 → D1
Therapist → 2.0 → D1, D2
Client → 3.0 → D3 (AI Matching)
Client ↔ Therapist → 4.0 → D3
Client → 5.0 → D4 → Admin

---

## 2. CLASS DIAGRAM

Classes:

- User
  - id, name, email, role, password
- Therapist (inherits User)
  - license_docs, verified, availability, rating
- Client (inherits User)
  - risk_profile, emotional_tags
- Session
  - id, client_id, therapist_id, datetime, status
- Payment
  - id, session_id, amount, status
- Admin
  - id, email, permissions

Relationships:

- User ↔ Session (1..\*)
- Therapist ↔ Session (1..\*)
- Client ↔ Session (1..\*)
- Session → Payment (1:1)

---

## 3. CONTEXT DIAGRAM

External Entities:

- Users (Clients & Therapists)
- Payment Gateway (Stripe, Flutterwave)
- KYC Service (YouVerify)

System: TheraLink Platform

Data Flows:

- Users register, submit info → System
- System ↔ KYC Service (verification)
- System ↔ Payment Gateway (escrow)
- Users schedule, chat, rate → System

---

## 4. STRUCTURED CHARTS (Module Breakdown)

Main Module: TheraLink
├── Auth Module
│ ├── Register
│ ├── Login
├── KYC Module
│ ├── ID Upload
│ ├── Document Review
├── Matchmaking Module
│ ├── AI Matcher
│ ├── Profile Filters
├── Booking Module
│ ├── Calendar Sync
│ ├── Session Management
├── Payment Module
│ ├── Escrow
│ ├── Payouts
├── Review Module
│ ├── Rating Engine
├── Admin Panel
│ ├── Approvals
│ ├── Flags

---

## 5. USE CASE DIAGRAM

Actors:

- Client
- Therapist
- Admin

Use Cases:

- Client: Register, Take Risk Assessment, Match with Therapist, Book Session, Pay, Leave Review
- Therapist: Register, Upload Credentials, Get Verified, Set Availability, Accept Sessions, Get Paid
- Admin: Review Therapist Docs, Moderate Sessions, Handle Disputes, View Reports
