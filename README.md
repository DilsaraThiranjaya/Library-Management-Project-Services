# Core Services: Library Management Domain logic

### Student Information
- **Student Name**: Dilsara Thiranjaya
- **Student Number**: 2301692050
- **Slack Handle**: Dilsara Thiranjaya
- **GCP Project ID**: dilsara

### Public Access Points

- **Eureka Dashboard**: [http://34.96.243.98:8761](http://34.96.243.98:8761)

---

## Project Description
This repository contains the core business logic microservices for the Library Management System. Each service is responsible for a specific domain within the library ecosystem, ensuring high cohesion and loose coupling.

## Services
- **Book Service**: Manages the library catalog and book inventory.
- **Member Service**: Handles member registrations and profiles.
- **File Service**: Manages cloud-based file uploads (GCS) and media assets.

## Technology Stack
- **Framework**: Spring Boot 4.0.3
- **Databases**: MySQL (Books), MongoDB (Members)
- **Cloud Storage**: Google Cloud Storage
- **Build Tool**: Maven
- **Environment**: Java 25

## Setup / Getting Started
To run these services:
1. Ensure the Platform components (Config Server, Eureka) are running.
2. Ensure the respective databases (MySQL, MongoDB) are accessible.
3. Use Maven to run each service individually:
   ```bash
   mvn spring-boot:run
   ```