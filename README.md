# Movie Booking Application

A **movie ticket booking application** similar to **BookMyShow**, **Fandango**, and **Paytm Movies**.  
This platform allows users to **browse movies, select theatres, choose showtimes, pick seats, and book tickets directly** from the application with a smooth and user-friendly experience.

## Benefits of the Movie Booking Application

- **Pre-booking**  
  Users can pre-book movie tickets in advance, ensuring seat availability for popular shows and new releases.

- **Anytime Booking**  
  Movies can be booked at any time based on real-time seat and show availability.

- **Anywhere Access**  
  Users can book movie tickets online from anywhere using their mobile or desktop devices.

- **Movie & Show Timing Information**  
  Users can easily list and view available movies along with their show timings and theatres.

- **Updates from Cinema Owners**  
  Cinema owners can notify users about:
  - New movie releases  
  - Special offers and discounts  
  - Upcoming shows  

- **Feedback & Reviews**  
  Users can provide feedback and reviews, helping cinema owners improve their services.

- **Easy Online Payments**  
  Secure and hassle-free online payment options eliminate the need for physical counters.

- **Better Planning**  
  Users can pre-plan their schedules in advance, avoiding last-minute rush and sold-out shows.

This application improves **convenience, accessibility, and efficiency** for both **movie-goers** and **cinema owners**.


## Authentication & Authorization

The application uses a **secure, role-based authentication and authorization system** to control access and ensure proper permissions for each user type.

### User Access Rules

- Only **valid registered users** can access and use the application.
- All users must **Sign Up** and **Log In** to use protected features.
- Authentication is handled using **token-based authentication** (JWT).

---

### User Roles & Permissions

#### Root Admin
- Created **directly in the database** (no public API endpoint).
- Has full system access and control.
- Approves and manages **System Admins** and **Clients**.
- Can configure global application settings.

---

#### System Admin
- Registered through the application.
- Requires **Root Admin approval** to activate the account.
- Manages:
  - Client (Theatre Owner) approvals
  - Movies, theatres, and show timings
  - User feedback and reviews

---

#### Client (Theatre Owner)
- Can register in the system.
- Account becomes active **only after Admin approval**.
- Can:
  - Add and manage theatres
  - Create movie shows and schedules
  - Publish offers, discounts, and announcements
  - View customer feedback and ratings

---

#### Customer (Normal User)
- Can directly register and log in without approval.
- Can:
  - Browse movies and show timings
  - Book tickets
  - Make online payments
  - View booking history
  - Submit reviews and feedback

---

### Authentication Flow

1. User registers based on their role.
2. Admin approval is required for **System Admins** and **Clients**.
3. User logs in using valid credentials.
4. Server issues a **JWT token** on successful login.
5. Token is used to access protected APIs.
6. Role-based authorization determines allowed actions.

---

### Security Measures

- Token-based authentication (JWT)
- Role-based access control (RBAC)
- Secure password hashing
- Protected admin-only APIs
- No public endpoint for Root Admin creation

This approach ensures **data security, controlled access, and system integrity** across all user roles.


## List Movies & Halls (Theatre Management)

The application provides complete **movie theatre resource management**, allowing administrators and authorized clients to create, manage, and discover theatres efficiently.

### Theatre Management Features

- **Create Theatre**  
  Add a new movie theatre with details such as name, location, city, PIN code, and available screens.

- **Update Theatre**  
  Modify existing theatre information including address, facilities, and operational details.

- **Fetch All Theatres**  
  Retrieve a complete list of all registered theatres in the system.

- **Filter Theatres**  
  Search and filter theatres based on:
  - City  
  - PIN code  
  - Location  

- **Delete Theatre**  
  Remove a theatre from the system (restricted to authorized roles only).

---

### Access Control

- Theatre creation, update, and deletion are restricted to:
  - **Root Admin**
  - **System Admin**
  - **Approved Clients (Theatre Owners)**

- Theatre listing and filtering are available to **all users**, including customers, for easy discovery and booking.

---

### Benefits

- Centralized management of movie theatres
- Easy discovery of theatres by location
- Accurate and up-to-date theatre information
- Controlled access ensures data integrity

This module ensures **scalable theatre onboarding**, **efficient management**, and **seamless user discovery**.
