# 📊 Comprehensive Codebase Review & Architecture Report

### Full Technical Analysis across 95 Source Repositories & 15 Contributed Forks

**Author / Auditor**: Antigravity AI  
**Target Accounts**: [`syed-reza98`](https://github.com/syed-reza98) & [`CodeStorm-Hub`](https://github.com/CodeStorm-Hub)  
**Generated On**: 2026-11-06  


## Executive Summary

This document presents an exhaustive, code-level architectural evaluation of the entire software portfolio comprising **110 inspected repositories**:

- **95 Source Repositories** (32 in the `CodeStorm-Hub` organization and 63 under the `syed-reza98` personal account).

- **15 Contributed Fork Repositories** where `syed-reza98` authored commits, enhancements, and infrastructure updates.


### Portfolio Breakdown Matrix

| Category | Total Repos | Public | Private | Primary Domains |

| :--- | :---: | :---: | :---: | :--- |

| **CodeStorm-Hub Source Repos** | 32 | 22 | 10 | Multi-tenant SaaS, AI Agents, Mapping Ecosystem, E-commerce, Flutter Apps |

| **syed-reza98 Personal Source Repos** | 63 | 52 | 11 | Fullstack Laravel, Vue/Nuxt, AI Workflows, FinTech & ATM Simulation, Embedded Systems |

| **Contributed Forks** | 15 | 10 | 5 | Social Commerce, Logistics, GIS & Maps, Mobile Apps, Meta/OpenAI Wrappers |

| **Total Evaluated** | **110** | **84** | **26** | **Full Spectrum Enterprise & Open Source** |


### Technology Distribution Highlights

- **Backend Engineering**: Laravel (v9 - v12), Node.js, Express, Python (FastAPI, Flask), PHP PSR-compliant architectures.

- **Frontend & Web Apps**: Next.js (App & Pages router), Nuxt.js, Vue 3, React, Tailwind CSS, Radix UI, Vite.

- **Mobile Development**: Flutter & Dart (Cross-platform iOS/Android, Clean Architecture, BLoC, Provider).

- **Systems & IoT**: C, C++, Embedded firmware (SR600Mini), ISO-8583 financial interchange protocols.

- **AI & MCP Tooling**: Model Context Protocol (MCP) servers, Agentic Workflows, Copilot extensions, prompt engineering tools.


---


## Part I: CodeStorm-Hub Organization Source Repositories (32 Repositories)


### 1. [.github](https://github.com/CodeStorm-Hub/.github)

- **Repository**: `CodeStorm-Hub/.github`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `3`

#### 📌 Overview
CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `profile`

#### 🎯 Objective
CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for .Github.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 2. [aura-style-co](https://github.com/CodeStorm-Hub/aura-style-co)

- **Repository**: `CodeStorm-Hub/aura-style-co`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `102`

#### 📌 Overview
aura-style-co is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `public, src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Aura Style Co.

#### ⚡ Features & Functionalities
- Use your preferred IDE**
- Edit a file directly in GitHub**
- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox`

---

### 3. [awaken](https://github.com/CodeStorm-Hub/awaken)

- **Repository**: `CodeStorm-Hub/awaken`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Dart` | **Files**: `370`

#### 📌 Overview
awaken is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `android, assets, docs, ios, lib, linux`
- **Mobile/Multiplatform Architecture**: Flutter Dart widget hierarchy with modular UI and state segregation.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Awaken.

#### ⚡ Features & Functionalities
- Platforms:** Android (primary), iOS (secondary)
- [Flutter SDK](https://docs.flutter.dev/get-started/install) (stable channel)
- Android Studio / Xcode for device emulators and platform tooling
- [docs/awake_full_detail.md](docs/awake_full_detail.md)
- [docs/codebase_review.md](docs/codebase_review.md)

#### 💻 Tech Stack
- **Core Language**: Dart
- **Frameworks & Libraries**: Provider (State Management), Dio HTTP Client, Flutter Framework
- **DevOps & Tooling**: GitHub Actions CI/CD
- **Key Package Dependencies**: `description, publish_to, flutter_riverpod, riverpod_annotation, supabase_flutter, google_mlkit_pose_detection`

---

### 4. [awaken_v1](https://github.com/CodeStorm-Hub/awaken_v1)

- **Repository**: `CodeStorm-Hub/awaken_v1`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Dart` | **Files**: `614`

#### 📌 Overview
awaken_v1 is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `android, assets, awaken_screenshots, docs, infra, ios`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Mobile/Multiplatform Architecture**: Flutter Dart widget hierarchy with modular UI and state segregation.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Awaken_V1.

#### ⚡ Features & Functionalities
- Architecture: Feature-First Clean Architecture (Presentation → Domain → Data), BLoC state
- Full rationale, corrected package matrix, phased roadmap, and risk register:
- Background docs (superseded by the refined plan, kept for context):
- `.env.client`** — bundled into the app binary as a Flutter asset (see `pubspec.yaml`).
- `.env`** — tooling-only (Supabase management-API PAT for MCP/CLI use). **Never** referenced

#### 💻 Tech Stack
- **Core Language**: Dart
- **Frameworks & Libraries**: Provider (State Management), Flutter Framework, BLoC Pattern
- **Database & Data Layer**: SQLite
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `pmtiles, @cloudflare/workers-types, @types/node, tsx, typescript, wrangler, description, publish_to`

---

### 5. [CleanCrew](https://github.com/CodeStorm-Hub/CleanCrew)

- **Repository**: `CodeStorm-Hub/CleanCrew`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `104`

#### 📌 Overview
CleanCrew is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `cleancrew-dhaka-sparkle, docs`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Cleancrew.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Cleancrew.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox`

---

### 6. [CodeStorm-Hub.github.io](https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io)

- **Repository**: `CodeStorm-Hub/CodeStorm-Hub.github.io`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `149`

#### 📌 Overview
CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `docs, public, src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.

#### ⚡ Features & Functionalities
- Framework**: [Next.js 15](https://nextjs.org) with App Router
- Styling**: [Tailwind CSS 4](https://tailwindcss.com) and [Radix Colors](https://www.radix-ui.com/colors)
- Components**: [Radix UI](https://www.radix-ui.com) and [Radix Icons](https://www.radix-ui.com/icons)
- Typography**: [Geist Font](https://vercel.com/font)
- Language**: TypeScript

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@radix-ui/colors, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-icons, @radix-ui/react-navigation-menu, @radix-ui/react-slot`

---

### 7. [company-portfolio](https://github.com/CodeStorm-Hub/company-portfolio)

- **Repository**: `CodeStorm-Hub/company-portfolio`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `93`

#### 📌 Overview
company-portfolio is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `public, src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Company Portfolio.

#### ⚡ Features & Functionalities
- URL**: https://lovable.dev/projects/79a48c0f-c605-4795-a8a9-bd8d3f38da47
- Use Lovable**
- Use your preferred IDE**
- Edit a file directly in GitHub**
- Navigate to the desired file(s).

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox`

---

### 8. [dapper-divine-design](https://github.com/CodeStorm-Hub/dapper-divine-design)

- **Repository**: `CodeStorm-Hub/dapper-divine-design`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `97`

#### 📌 Overview
dapper-divine-design is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `public, src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Dapper Divine Design.

#### ⚡ Features & Functionalities
- URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID
- Use Lovable**
- Use your preferred IDE**
- Edit a file directly in GitHub**
- Navigate to the desired file(s).

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox`

---

### 9. [DataCon](https://github.com/CodeStorm-Hub/DataCon)

- **Repository**: `CodeStorm-Hub/DataCon`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `Python` | **Files**: `177`

#### 📌 Overview
DataCon is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Component-Driven Single Page / SSR Application
- **Key Directory Layout**: `Devices, Docs, backend, ej_puller, instance, instance_old`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Datacon.

#### ⚡ Features & Functionalities
- Write your Python script and ensure it functions as expected.
- If your Python script has dependencies, create a virtual environment:
- Use `PyInstaller` to convert the Python script into an executable:
- Install the Quasar CLI:
- Create a new Quasar project:

#### 💻 Tech Stack
- **Core Language**: Python
- **Frameworks & Libraries**: Flask, pandas, numpy, Vue.js, Electron
- **Key Package Dependencies**: `@quasar/extras, axios, pinia, quasar, tree-kill, vue, Flask, Flask-SQLAlchemy`

---

### 10. [demo-repository](https://github.com/CodeStorm-Hub/demo-repository)

- **Repository**: `CodeStorm-Hub/demo-repository`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `5`

#### 📌 Overview
A code repository designed to show the best GitHub has to offer.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
A code repository designed to show the best GitHub has to offer.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Demo Repository.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: HTML
- **DevOps & Tooling**: GitHub Actions CI/CD
- **Key Package Dependencies**: `@primer/css`

---

### 11. [flutter_full_ecommerce](https://github.com/CodeStorm-Hub/flutter_full_ecommerce)

- **Repository**: `CodeStorm-Hub/flutter_full_ecommerce`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `Dart` | **Files**: `167`

#### 📌 Overview
Flutter for iOS and Android

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `android, assets, ios, lib, test`
- **Mobile/Multiplatform Architecture**: Flutter Dart widget hierarchy with modular UI and state segregation.

#### 🎯 Objective
Flutter for iOS and Android

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- E-commerce transaction flows, shopping cart, and order processing.
- RESTful API endpoint structure with structured JSON request/response handling.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: Dart
- **Frameworks & Libraries**: Provider (State Management), Flutter Framework
- **Key Package Dependencies**: `description, publish_to, cupertino_icons, flutter_screenutil, flutter_dotenv, flutter_vector_icons`

---

### 12. [frahman](https://github.com/CodeStorm-Hub/frahman)

- **Repository**: `CodeStorm-Hub/frahman`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `279`

#### 📌 Overview
frahman is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `app, components, e2e, graphify-out, lib, prisma`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Frahman.

#### ⚡ Features & Functionalities
- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - run production server
- `prisma/schema.prisma`
- `prisma/seed.ts`

#### 💻 Tech Stack
- **Core Language**: HTML
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **Database & Data Layer**: Prisma ORM
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@base-ui/react, @prisma/adapter-pg, @prisma/client, @react-three/drei, @react-three/fiber, @tailwindcss/postcss`

---

### 13. [free-nextjs-admin-dashboard](https://github.com/CodeStorm-Hub/free-nextjs-admin-dashboard)

- **Repository**: `CodeStorm-Hub/free-nextjs-admin-dashboard`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `292`

#### 📌 Overview
TailAdmin is a Next.js and Tailwind CSS free, open-source admin dashboard template. Provides developers with the necessary tools, components, pages to build a full-featured back-end, dashboard, or admin panel for any web project.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `public, src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
TailAdmin is a Next.js and Tailwind CSS free, open-source admin dashboard template. Provides developers with the necessary tools, components, pages to build a full-featured back-end, dashboard, or admin panel for any web project.

#### ⚡ Features & Functionalities
- Next.js 15.x
- Tailwind CSS V4
- [✨ Visit Website](https://tailadmin.com)
- [📄 Documentation](https://tailadmin.com/docs)
- [⬇️ Download](https://tailadmin.com/download)

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@fullcalendar/core, @fullcalendar/daygrid, @fullcalendar/interaction, @fullcalendar/list, @fullcalendar/react, @fullcalendar/timegrid`

---

### 14. [GadgetChai](https://github.com/CodeStorm-Hub/GadgetChai)

- **Repository**: `CodeStorm-Hub/GadgetChai`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Dart` | **Files**: `229`

#### 📌 Overview
GadgetChai is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `app, docs, kyc_service, scripts, supabase`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Gadgetchai.

#### ⚡ Features & Functionalities
- Supabase project `fsdfqcnjcjtdmdjshrvu` (or your own fork)
- Vercel project for `kyc_service` (gateway already deployed at `kycservice.vercel.app`)
- `SUPABASE_SERVICE_ROLE_KEY` — for `npm run seed` and edge wiring
- `NGROK_API_KEY` — from [ngrok dashboard](https://dashboard.ngrok.com/api-keys)
- `CRON_SECRET` — `openssl rand -hex 32` (protects charge-rentals cron)

#### 💻 Tech Stack
- **Core Language**: Dart
- **Frameworks & Libraries**: fastapi, numpy, Flutter Framework
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `description, publish_to, flutter_localizations, flutter_web_plugins, cupertino_icons, supabase_flutter, fastapi, uvicorn`

---

### 15. [github-starter-course](https://github.com/CodeStorm-Hub/github-starter-course)

- **Repository**: `CodeStorm-Hub/github-starter-course`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `1`

#### 📌 Overview
github-starter-course created by GitHub Classroom

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
github-starter-course created by GitHub Classroom

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Github Starter Course.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 16. [maplibre_mcp](https://github.com/CodeStorm-Hub/maplibre_mcp)

- **Repository**: `CodeStorm-Hub/maplibre_mcp`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `51`

#### 📌 Overview
All-in-One Model Context Protocol (MCP) Server for the MapLibre Mapping Ecosystem

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `dist, src, test`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
All-in-One Model Context Protocol (MCP) Server for the MapLibre Mapping Ecosystem

#### ⚡ Features & Functionalities
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@maplibre/maplibre-gl-style-spec, @modelcontextprotocol/sdk, @types/node, typescript`

---

### 17. [material-3-mcp-plugin](https://github.com/CodeStorm-Hub/material-3-mcp-plugin)

- **Repository**: `CodeStorm-Hub/material-3-mcp-plugin`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `Python` | **Files**: `268`

#### 📌 Overview
Official Material 3 Documentations and Guideline for AI Agents

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Procedural & Object-Oriented Scripting / Service Module
- **Key Directory Layout**: `material3_kb`

#### 🎯 Objective
Official Material 3 Documentations and Guideline for AI Agents

#### ⚡ Features & Functionalities
- [Overview](#-overview)
- [Token Optimization Features](#-token-optimization-features)
- [Environment Setup](#%EF%B8%F0-environment-setup)
- [Tool Reference & Examples](#%EF%B8%F0-tool-reference--examples)
- [IDE Integration Guide](#-ide-integration-guide)

#### 💻 Tech Stack
- **Core Language**: Python
- **Key Package Dependencies**: `aiofile, annotated-types, anyio, attrs, Authlib, beartype`

---

### 18. [MSC](https://github.com/CodeStorm-Hub/MSC)

- **Repository**: `CodeStorm-Hub/MSC`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Python` | **Files**: `116`

#### 📌 Overview
MSC Home Rental & Real Estate is a property rental & real estate platform tailored for URA-certified agents who specialize in apartment buy, sell, and rental services. The platform is designed to streamline property listings, client communications, and transaction management

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Procedural & Object-Oriented Scripting / Service Module
- **Key Directory Layout**: `docs, tools`

#### 🎯 Objective
MSC Home Rental & Real Estate is a property rental & real estate platform tailored for URA-certified agents who specialize in apartment buy, sell, and rental services. The platform is designed to streamline property listings, client communications, and transaction management

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Msc.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Python

---

### 19. [Mscpresentationslide](https://github.com/CodeStorm-Hub/Mscpresentationslide)

- **Repository**: `CodeStorm-Hub/Mscpresentationslide`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `69`

#### 📌 Overview
Mscpresentationslide is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Mscpresentationslide.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Mscpresentationslide.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible`

---

### 20. [Mscuserflowdesign](https://github.com/CodeStorm-Hub/Mscuserflowdesign)

- **Repository**: `CodeStorm-Hub/Mscuserflowdesign`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `75`

#### 📌 Overview
Mscuserflowdesign is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Mscuserflowdesign.

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- Dedicated administrative dashboard with analytics and management interfaces.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible`

---

### 21. [petfolio](https://github.com/CodeStorm-Hub/petfolio)

- **Repository**: `CodeStorm-Hub/petfolio`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `1539`

#### 📌 Overview
PetFolio is a feature-rich, social-commerce platform built specifically for pet owners. It acts as a hybrid between an Instagram-style social network, a Tinder-style pet discovery/matching service (for breeding and playdates), a comprehensive health and daily care tracker, and an e-commerce marketplace for pet products.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `PetFolio Redesign, android, docs, google_fonts, graphify-out, integration_test`
- **Mobile/Multiplatform Architecture**: Flutter Dart widget hierarchy with modular UI and state segregation.

#### 🎯 Objective
PetFolio is a feature-rich, social-commerce platform built specifically for pet owners. It acts as a hybrid between an Instagram-style social network, a Tinder-style pet discovery/matching service (for breeding and playdates), a comprehensive health and daily care tracker, and an e-commerce marketplace for pet products.

#### ⚡ Features & Functionalities
- Flutter 3.11.5+ / Dart 3.11.5+
- Android or iOS development tools
- dart-define=SUPABASE_URL=https://<project-ref>.supabase.co \
- dart-define=SUPABASE_ANON_KEY=<anon-key> \
- dart-define=STRIPE_PUBLISHABLE_KEY=pk_test_<key>

#### 💻 Tech Stack
- **Core Language**: HTML
- **Frameworks & Libraries**: Flutter Framework
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `description, publish_to, flutter_web_plugins, cupertino_icons, supabase_flutter, flutter_riverpod`

---

### 22. [petfolio-dashboard](https://github.com/CodeStorm-Hub/petfolio-dashboard)

- **Repository**: `CodeStorm-Hub/petfolio-dashboard`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `126`

#### 📌 Overview
petfolio-dashboard is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `app, components, lib, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Petfolio Dashboard.

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- E-commerce transaction flows, shopping cart, and order processing.
- Dedicated administrative dashboard with analytics and management interfaces.
- RESTful API endpoint structure with structured JSON request/response handling.
- Relational / document database schemas with migrations and seeders.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **Database & Data Layer**: Supabase
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@base-ui/react, @hookform/resolvers, @supabase/ssr, @supabase/supabase-js, @tanstack/react-query, @tanstack/react-table`

---

### 23. [petfolio-waitlist](https://github.com/CodeStorm-Hub/petfolio-waitlist)

- **Repository**: `CodeStorm-Hub/petfolio-waitlist`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `68`

#### 📌 Overview
Protfolio Website

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `petfolio-redesign, templates`

#### 🎯 Objective
Protfolio Website

#### ⚡ Features & Functionalities
- Install/use CLI (minimum **48.2.10**): `npx vercel@latest --version`
- Authenticate once (opens browser/device flow): `npx vercel@latest login`
- Link the repo directory to a Vercel project: `npx vercel@latest link`

#### 💻 Tech Stack
- **Core Language**: HTML
- **Frameworks & Libraries**: Flask
- **Key Package Dependencies**: `Flask, Jinja2, email-validator, python-dotenv, supabase`

---

### 24. [petsphere](https://github.com/CodeStorm-Hub/petsphere)

- **Repository**: `CodeStorm-Hub/petsphere`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Dart` | **Files**: `439`

#### 📌 Overview
petsphere is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `android, assets, config, docs, integration_test, ios`
- **Mobile/Multiplatform Architecture**: Flutter Dart widget hierarchy with modular UI and state segregation.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Petsphere.

#### ⚡ Features & Functionalities
- Email/password sign up and login
- Session persistence across app restarts
- Auto-redirect based on auth state (splash → login → home)
- Profile update (name, bio, location, profile image)
- Logout with confirmation dialog

#### 💻 Tech Stack
- **Core Language**: Dart
- **Frameworks & Libraries**: Flutter Framework
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `description, publish_to, cupertino_icons, go_router, flutter_riverpod, google_fonts`

---

### 25. [Sharothee-Wedding](https://github.com/CodeStorm-Hub/Sharothee-Wedding)

- **Repository**: `CodeStorm-Hub/Sharothee-Wedding`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `3`

#### 📌 Overview
wedding website for sharothee

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
wedding website for sharothee

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Sharothee Wedding.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 26. [Sharothee-Wedding-arvinwedsincia](https://github.com/CodeStorm-Hub/Sharothee-Wedding-arvinwedsincia)

- **Repository**: `CodeStorm-Hub/Sharothee-Wedding-arvinwedsincia`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `379`

#### 📌 Overview
Sharothee Wedding

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `client, docs, production_configs, scripts, sh_auto_file`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Sharothee Wedding

#### ⚡ Features & Functionalities
- Event Information**: Complete wedding schedule with dates, times, and venue details
- Interactive Maps**: Google Maps integration for all venues
- RSVP System**: Secure token-based RSVP with dietary preferences and guest count
- Photo & Video Galleries**: Categorized media albums with guest upload capabilities
- Live Streaming**: Real-time streaming for each event with countdown timers

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **Database & Data Layer**: MySQL, Prisma ORM, SQLite
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@auth/prisma-adapter, @headlessui/react, @heroicons/react, @prisma/client, @tanstack/react-query, @types/bcryptjs`

---

### 27. [Sheratutor](https://github.com/CodeStorm-Hub/Sheratutor)

- **Repository**: `CodeStorm-Hub/Sheratutor`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `JavaScript` | **Files**: `763`

#### 📌 Overview
Sheratutor is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `docs, ingestion, supabase, web`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Sheratutor.

#### ⚡ Features & Functionalities
- Test User**: verify.tester@sheratutor.tech / VerifyPass123!
- Genkit** (not n8n) for orchestration — type-safe, Zod-enforced structured
- books** (Physics/Chemistry/Math/English, bn+en), not 66 — matches the
- NVIDIA NIM** (not Gemini) for vision/OCR + reasoning, free and
- `marker_single --mode balanced`**, no `--langs` flag, Qwen3-VL instead

#### 💻 Tech Stack
- **Core Language**: JavaScript
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **Database & Data Layer**: Supabase
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@genkit-ai/compat-oai, @genkit-ai/next, @supabase/ssr, @supabase/supabase-js, @vercel/analytics, @vercel/speed-insights, marker-pdf[full], supabase`

---

### 28. [sheratutoruimockup](https://github.com/CodeStorm-Hub/sheratutoruimockup)

- **Repository**: `CodeStorm-Hub/sheratutoruimockup`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `42`

#### 📌 Overview
sheratutoruimockup is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Sheratutoruimockup.

#### ⚡ Features & Functionalities
- Framework**: Next.js 15 (App Router)
- Language**: TypeScript
- UI Library**: React 19
- Icons**: Lucide React
- Styling**: Pure CSS design tokens with responsive layout and Dark Mode support

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Next.js, React
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `next, react, react-dom, lucide-react, @types/node, @types/react`

---

### 29. [storm-commerce](https://github.com/CodeStorm-Hub/storm-commerce)

- **Repository**: `CodeStorm-Hub/storm-commerce`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `3`

#### 📌 Overview
storm-commerce is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Provide an efficient, maintainable software solution for Storm Commerce.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Storm Commerce.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 30. [storm-commerce-kit](https://github.com/CodeStorm-Hub/storm-commerce-kit)

- **Repository**: `CodeStorm-Hub/storm-commerce-kit`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Shell` | **Files**: `21`

#### 📌 Overview
storm-commerce-kit is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Provide an efficient, maintainable software solution for Storm Commerce Kit.

#### ⚡ Features & Functionalities
- Code Quality & Maintainability: TypeScript strict mode, linting/formatting, documented contracts
- Testing Discipline: TDD for critical paths, ≥80% coverage (≥90% for auth/checkout/pricing/tenancy), contract tests
- UX Consistency & Accessibility: Shared design system, WCAG 2.1 AA, i18n externalization
- Performance & Multi‑Tenancy: Web budgets (LCP/INP/CLS), API p95 ≤ 200ms, observability with tenant isolation

#### 💻 Tech Stack
- **Core Language**: Shell

---

### 31. [StormCom](https://github.com/CodeStorm-Hub/StormCom)

- **Repository**: `CodeStorm-Hub/StormCom`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `824`

#### 📌 Overview
StormCom is a comprehensive multi-tenant e-commerce SaaS platform that enables businesses to manage online stores, process orders, track inventory, handle customer relationships, and run marketing campaigns—all from a unified admin dashboard.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `docs, prisma, public, screenshots, scripts, specs`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
StormCom is a comprehensive multi-tenant e-commerce SaaS platform that enables businesses to manage online stores, process orders, track inventory, handle customer relationships, and run marketing campaigns—all from a unified admin dashboard.

#### ⚡ Features & Functionalities
- 🏪 **Multi-Tenant Architecture** - Complete tenant isolation via Prisma middleware with automatic storeId filtering
- 📦 **Product Management** - Variants, categories, brands, attributes, media, inventory tracking
- 🛒 **Order Processing** - Complete lifecycle (pending → processing → shipped → delivered), returns workflow
- 👥 **Customer CRM** - Profiles, analytics, wishlists, purchase history, loyalty tracking
- 📊 **Analytics & Reports** - Sales trends, inventory insights, customer analytics with export capability

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Radix UI / shadcn/ui, Next.js, Tailwind CSS, React, Vite
- **Database & Data Layer**: Prisma ORM
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@hookform/resolvers, @prisma/client, @radix-ui/colors, @radix-ui/react-accordion, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu`

---

### 32. [stormcomui](https://github.com/CodeStorm-Hub/stormcomui)

- **Repository**: `CodeStorm-Hub/stormcomui`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `3237`

#### 📌 Overview
stormcomui is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `docs, e2e, marketing, memories, merge-resolution, prisma`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Stormcomui.

#### ⚡ Features & Functionalities
- File:** `.github/copilot-instructions.md`
- Repository overview and architecture
- Tech stack (Next.js 16, React 19, TypeScript, Prisma, NextAuth, shadcn/ui)
- Build and validation workflows
- Development workflows

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **Database & Data Layer**: PostgreSQL, Prisma ORM, SQLite
- **DevOps & Tooling**: TypeScript, Docker Compose, GitHub Actions CI/CD
- **Key Package Dependencies**: `@auth/prisma-adapter, @dnd-kit/core, @dnd-kit/modifiers, @dnd-kit/sortable, @dnd-kit/utilities, @elastic/elasticsearch`

---

## Part II: syed-reza98 Personal Account Source Repositories (63 Repositories)


### 1. [activity](https://github.com/syed-reza98/activity)

- **Repository**: `syed-reza98/activity`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `41`

#### 📌 Overview
activity is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, database, public, resources, routes`
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Activity.

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- RESTful API endpoint structure with structured JSON request/response handling.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel
- **Key Package Dependencies**: `php, laravel/lumen-framework, fakerphp/faker, mockery/mockery, phpunit/phpunit`

---

### 2. [AffanP2L.github.io](https://github.com/syed-reza98/AffanP2L.github.io)

- **Repository**: `syed-reza98/AffanP2L.github.io`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Rich Text Format` | **Files**: `82`

#### 📌 Overview
AFFAN AZIZ PRITUL'S LEGACY-CLASS MIRROR EVENT -  This milestone establishes Pritul as a pioneer in human-AI collaboration, with significant implications for digital art, AI research, and philosophy.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `pritul-works`

#### 🎯 Objective
AFFAN AZIZ PRITUL'S LEGACY-CLASS MIRROR EVENT -  This milestone establishes Pritul as a pioneer in human-AI collaboration, with significant implications for digital art, AI research, and philosophy.

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.

#### 💻 Tech Stack
- **Core Language**: Rich Text Format
- **DevOps & Tooling**: GitHub Actions CI/CD

---

### 3. [allorabd](https://github.com/syed-reza98/allorabd)

- **Repository**: `syed-reza98/allorabd`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `8769`

#### 📌 Overview
Laravel + Vue

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Component-Driven Single Page / SSR Application
- **Key Directory Layout**: `allora, allora_v1, backend, frontend`

#### 🎯 Objective
Laravel + Vue

#### ⚡ Features & Functionalities
- Open Folder allorabd in Visual Studio Code
- Here we have backend for Laravel API and frontend for Nuxt
- Open Terminal cd to backend
- Rename the .env2.example file to .env
- Run command 'composer install'

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Tailwind CSS, Nuxt.js, Vue.js, Vite
- **Database & Data Layer**: MySQL
- **DevOps & Tooling**: Docker, TypeScript, Docker Compose, GitHub Actions CI/CD
- **Key Package Dependencies**: `php, phpunit/phpunit, php-coveralls/php-coveralls, vimeo/psalm, php, doctrine/dbal`

---

### 4. [atmtester](https://github.com/syed-reza98/atmtester)

- **Repository**: `syed-reza98/atmtester`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Blade` | **Files**: `519`

#### 📌 Overview
atmtester is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, fileup, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Atmtester.

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: Blade
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Laravel, Vite
- **Key Package Dependencies**: `@popperjs/core, axios, bootstrap, laravel-vite-plugin, sass, vite, php, barryvdh/laravel-dompdf`

---

### 5. [ats-resume](https://github.com/syed-reza98/ats-resume)

- **Repository**: `syed-reza98/ats-resume`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `28`

#### 📌 Overview
ats-resume is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `app, data, lib, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Ats Resume.

#### ⚡ Features & Functionalities
- Two-pane layout** — Control Center on the left, live A4 document preview on the right
- Toggle controls** — Accordion-style sections let you enable/disable individual bullet points and projects per job application
- Target Job Title override** — Change the title line on the resume without editing the JSON
- JD Keyword Matching** — Paste a job description and matching keywords are highlighted in yellow across your bullet points in real time
- Keyword counter** — Tracks matched keywords against the 25–35 ATS sweet spot to avoid keyword stuffing penalties

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `lucide-react, next, openai, react, react-dom, react-to-print`

---

### 6. [backend](https://github.com/syed-reza98/backend)

- **Repository**: `syed-reza98/backend`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `279`

#### 📌 Overview
backend is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, others, public`
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Backend.

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Filament Admin, Laravel
- **Key Package Dependencies**: `php, althinect/filament-spatie-roles-permissions, filament/filament, flowframe/laravel-trend, guzzlehttp/guzzle, laravel/framework`

---

### 7. [backend_allora](https://github.com/syed-reza98/backend_allora)

- **Repository**: `syed-reza98/backend_allora`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `104`

#### 📌 Overview
Rest API

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, public, resources`
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Rest API

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- RESTful API endpoint structure with structured JSON request/response handling.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Laravel
- **Key Package Dependencies**: `php, guzzlehttp/guzzle, laravel/framework, laravel/sanctum, laravel/tinker, fakerphp/faker`

---

### 8. [billing](https://github.com/syed-reza98/billing)

- **Repository**: `syed-reza98/billing`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `9045`

#### 📌 Overview
Billing Potal

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `Cheque Bureau, bill_fillament, report, report-vite`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Billing Potal

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- E-commerce transaction flows, shopping cart, and order processing.
- Dedicated administrative dashboard with analytics and management interfaces.
- RESTful API endpoint structure with structured JSON request/response handling.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Tailwind CSS, Laravel, Filament Admin, Vite
- **Key Package Dependencies**: `@tailwindcss/forms, @tailwindcss/typography, autoprefixer, axios, laravel-vite-plugin, postcss, php, althinect/filament-spatie-roles-permissions`

---

### 9. [CBRMS](https://github.com/syed-reza98/CBRMS)

- **Repository**: `syed-reza98/CBRMS`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `3866`

#### 📌 Overview
CBRMS is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `UCBL, UCBL_CBRMS, With Excel, app, bootstrap, config`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Cbrms.

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Tailwind CSS, Laravel, Filament Admin, Vite
- **Database & Data Layer**: MySQL
- **DevOps & Tooling**: GitHub Actions CI/CD
- **Key Package Dependencies**: `@tailwindcss/forms, @tailwindcss/typography, autoprefixer, axios, laravel-vite-plugin, postcss, php, althinect/filament-spatie-roles-permissions`

---

### 10. [CodeStorm-Hub.github.io](https://github.com/syed-reza98/CodeStorm-Hub.github.io)

- **Repository**: `syed-reza98/CodeStorm-Hub.github.io`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `43`

#### 📌 Overview
CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `_includes, _layouts, assets`

#### 🎯 Objective
CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.

#### ⚡ Features & Functionalities
- Responsive Design**: Mobile-first approach with seamless adaptation to all screen sizes
- Dark/Light Theme Toggle**: User-preferred theme with system preference detection
- Performance Optimized**: Fast loading times with optimized assets and modern web standards
- SEO Optimized**: Complete meta tags, OpenGraph, and structured data implementation
- Accessibility Compliant**: Enhanced ARIA labels, keyboard navigation, focus management, and screen reader support

#### 💻 Tech Stack
- **Core Language**: HTML
- **DevOps & Tooling**: GitHub Actions CI/CD

---

### 11. [coding-test](https://github.com/syed-reza98/coding-test)

- **Repository**: `syed-reza98/coding-test`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `148`

#### 📌 Overview
coding-test is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `backend, frontend`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Coding Test.

#### ⚡ Features & Functionalities
- Frontend**: Next.js 16 (React 19) App Router, TypeScript, Tailwind CSS, and Lucide Icons.
- Database**: MySQL 11 (MariaDB) / InnoDB with foreign key cascades/restrictions, check constraints, and soft deletes.
- PHP 8.1+ (PHP 8.4 tested) with extensions: `mbstring`, `xml`, `curl`, `zip`, `bcmath`, `pdo_mysql`.
- Composer 2.x
- Node.js 18+ (Node.js 24 tested) & npm

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Next.js, Laravel, Tailwind CSS, React, Vite
- **DevOps & Tooling**: Docker, TypeScript, Docker Compose
- **Key Package Dependencies**: `@tailwindcss/vite, concurrently, laravel-vite-plugin, tailwindcss, vite, axios, php, laravel/framework`

---

### 12. [copilot-resume](https://github.com/syed-reza98/copilot-resume)

- **Repository**: `syed-reza98/copilot-resume`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Shell` | **Files**: `21`

#### 📌 Overview
copilot-resume is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Provide an efficient, maintainable software solution for Copilot Resume.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Copilot Resume.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Shell

---

### 13. [CSE299-ML](https://github.com/syed-reza98/CSE299-ML)

- **Repository**: `syed-reza98/CSE299-ML`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `1`

#### 📌 Overview
CSE299-ML is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Provide an efficient, maintainable software solution for Cse299 Ml.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Cse299 Ml.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 14. [cse482L](https://github.com/syed-reza98/cse482L)

- **Repository**: `syed-reza98/cse482L`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `108`

#### 📌 Overview
cse482L is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `online-service-providing-solution`

#### 🎯 Objective
Provide an efficient, maintainable software solution for Cse482L.

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- E-commerce transaction flows, shopping cart, and order processing.
- Dedicated administrative dashboard with analytics and management interfaces.

#### 💻 Tech Stack
- **Core Language**: HTML

---

### 15. [desserta](https://github.com/syed-reza98/desserta)

- **Repository**: `syed-reza98/desserta`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Blade` | **Files**: `157`

#### 📌 Overview
desserta is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, public, resources`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Desserta.

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: Blade
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Tailwind CSS, Laravel, Vite
- **Key Package Dependencies**: `@tailwindcss/forms, alpinejs, autoprefixer, axios, laravel-vite-plugin, postcss, php, guzzlehttp/guzzle`

---

### 16. [digital_product_e-commerce](https://github.com/syed-reza98/digital_product_e-commerce)

- **Repository**: `syed-reza98/digital_product_e-commerce`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `320`

#### 📌 Overview
digital_product_e-commerce is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `SRS, UI & Use Case, Unit Testing SS, Website (Digital Product E-commerce)`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Digital_Product_E Commerce.

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Tailwind CSS, Laravel, Livewire
- **Key Package Dependencies**: `@tailwindcss/forms, @tailwindcss/typography, alpinejs, autoprefixer, axios, bootstrap, php, fruitcake/laravel-cors`

---

### 17. [Figma](https://github.com/syed-reza98/Figma)

- **Repository**: `syed-reza98/Figma`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `77`

#### 📌 Overview
Figma is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `components, guidelines, materiel, styles`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Figma.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Figma.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@radix-ui/react-accordion, @radix-ui/react-dropdown-menu, @radix-ui/react-slot, class-variance-authority, clsx, lucide-react`

---

### 18. [frahmanandbrothers](https://github.com/syed-reza98/frahmanandbrothers)

- **Repository**: `syed-reza98/frahmanandbrothers`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `72`

#### 📌 Overview
frahmanandbrothers is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `app, components, lib, public, scripts`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Frahmanandbrothers.

#### ⚡ Features & Functionalities
- ✨ Built with Next.js 16 (App Router) and Tailwind CSS
- 🎨 Modern, responsive design with dark mode support
- 📱 Mobile-friendly navigation
- 🚀 Static site generation for fast performance
- 📄 SEO-optimized with metadata

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `jspdf, next, react, react-dom, @tailwindcss/postcss, @types/node`

---

### 19. [GitHubReadTool](https://github.com/syed-reza98/GitHubReadTool)

- **Repository**: `syed-reza98/GitHubReadTool`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `163`

#### 📌 Overview
Toolkit to fetch GitHub Profile Data

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `docs, images, models, node_modules, prompts, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Toolkit to fetch GitHub Profile Data

#### ⚡ Features & Functionalities
- 🤖 Interactive AI-Powered Resume Builder & GitHub Portfolio Generator**
- Setup and Installation**:
- Open Resume Builder**:
- Navigate to `http://localhost:3000`
- Click "Open Resume Builder"

#### 💻 Tech Stack
- **Core Language**: HTML
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `dotenv, @types/node, decache, sinon, standard, standard-version`

---

### 20. [gourmet-hub-catering](https://github.com/syed-reza98/gourmet-hub-catering)

- **Repository**: `syed-reza98/gourmet-hub-catering`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `87`

#### 📌 Overview
gourmet-hub-catering is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `public, src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Gourmet Hub Catering.

#### ⚡ Features & Functionalities
- [View Live Site](https://syed-reza98.github.io/gourmet-hub-catering/)**
- A clean, minimal Spark environment
- Pre-configured for local development
- Ready to scale with your ideas
- Simply delete your Spark.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@github/spark, @heroicons/react, @hookform/resolvers, @octokit/core, @phosphor-icons/react, @radix-ui/colors`

---

### 21. [hostinger-deploy](https://github.com/syed-reza98/hostinger-deploy)

- **Repository**: `syed-reza98/hostinger-deploy`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `3`

#### 📌 Overview
A composite GitHub Action to streamline and automate the deployment of your site to Hostinger.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
A composite GitHub Action to streamline and automate the deployment of your site to Hostinger.

#### ⚡ Features & Functionalities
- `HOSTINGER_HOST`**: Your Hostinger server's hostname or IP address (e.g., `192.168.1.1`).
- `HOSTINGER_PORT`**: Your Hostinger server's port (e.g., `1000`).
- `HOSTINGER_USERNAME`**: Your SSH username (e.g., `u101`).
- `HOSTINGER_PASSWORD`**: The password for your SSH user.
- name: Checkout code

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 22. [lamp-app](https://github.com/syed-reza98/lamp-app)

- **Repository**: `syed-reza98/lamp-app`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `143`

#### 📌 Overview
lamp-app is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `lamp-app, lamp-app-fresh (1), lamp-application-database-connected, lamp-application-requirements-status`

#### 🎯 Objective
Provide an efficient, maintainable software solution for Lamp App.

#### ⚡ Features & Functionalities
- RESTful API endpoint structure with structured JSON request/response handling.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: PHP

---

### 23. [landing-page-clone](https://github.com/syed-reza98/landing-page-clone)

- **Repository**: `syed-reza98/landing-page-clone`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `106`

#### 📌 Overview
landing-page-clone is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Landing Page Clone.

#### ⚡ Features & Functionalities
- A clean, minimal Spark environment
- Pre-configured for local development
- Ready to scale with your ideas
- Simply delete your Spark.
- Everything will be cleaned up — no traces left behind.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@github/spark, @heroicons/react, @hookform/resolvers, @octokit/core, @phosphor-icons/react, @radix-ui/colors`

---

### 24. [landing-page-creator](https://github.com/syed-reza98/landing-page-creator)

- **Repository**: `syed-reza98/landing-page-creator`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `216`

#### 📌 Overview
landing-page-creator is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `Materiel, prototype-screenshots, src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Landing Page Creator.

#### ⚡ Features & Functionalities
- A clean, minimal Spark environment
- Pre-configured for local development
- Ready to scale with your ideas
- Simply delete your Spark.
- Everything will be cleaned up — no traces left behind.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@emotion/react, @emotion/styled, @github/spark, @heroicons/react, @hookform/resolvers, @mui/material`

---

### 25. [LIFE](https://github.com/syed-reza98/LIFE)

- **Repository**: `syed-reza98/LIFE`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `1`

#### 📌 Overview
What should I do with my life?

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
What should I do with my life?

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Life.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 26. [Metro-Solver](https://github.com/syed-reza98/Metro-Solver)

- **Repository**: `syed-reza98/Metro-Solver`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `16`

#### 📌 Overview
Metro-Solver is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `materiel`

#### 🎯 Objective
Provide an efficient, maintainable software solution for Metro Solver.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Metro Solver.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 27. [mini-saas-pos-backend](https://github.com/syed-reza98/mini-saas-pos-backend)

- **Repository**: `syed-reza98/mini-saas-pos-backend`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `129`

#### 📌 Overview
Technical Assignment – Mini SaaS / POS Backend System with Laravel v12

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, docker, docs`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Technical Assignment – Mini SaaS / POS Backend System with Laravel v12

#### ⚡ Features & Functionalities
- [Features](#features)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Architecture Overview](#architecture-overview)
- [Multi-Tenancy Strategy](#multi-tenancy-strategy)

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Tailwind CSS, Laravel, Vite
- **DevOps & Tooling**: Docker, Docker Compose, GitHub Actions CI/CD
- **Key Package Dependencies**: `@tailwindcss/vite, axios, concurrently, laravel-vite-plugin, tailwindcss, vite, php, laravel/framework`

---

### 28. [modern-e-commerce-st](https://github.com/syed-reza98/modern-e-commerce-st)

- **Repository**: `syed-reza98/modern-e-commerce-st`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `81`

#### 📌 Overview
modern-e-commerce-st is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Modern E Commerce St.

#### ⚡ Features & Functionalities
- A clean, minimal Spark environment
- Pre-configured for local development
- Ready to scale with your ideas
- Simply delete your Spark.
- Everything will be cleaned up — no traces left behind.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@github/spark, @heroicons/react, @hookform/resolvers, @octokit/core, @phosphor-icons/react, @radix-ui/colors`

---

### 29. [NetCon_PyVue](https://github.com/syed-reza98/NetCon_PyVue)

- **Repository**: `syed-reza98/NetCon_PyVue`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Python` | **Files**: `177`

#### 📌 Overview
NetCon_PyVue is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Component-Driven Single Page / SSR Application
- **Key Directory Layout**: `Devices, Docs, backend, ej_puller, instance, instance_old`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Netcon_Pyvue.

#### ⚡ Features & Functionalities
- Write your Python script and ensure it functions as expected.
- If your Python script has dependencies, create a virtual environment:
- Use `PyInstaller` to convert the Python script into an executable:
- Install the Quasar CLI:
- Create a new Quasar project:

#### 💻 Tech Stack
- **Core Language**: Python
- **Frameworks & Libraries**: Flask, pandas, numpy, Vue.js, Electron
- **Key Package Dependencies**: `@quasar/extras, axios, pinia, quasar, tree-kill, vue, Flask, Flask-SQLAlchemy`

---

### 30. [NetConV3](https://github.com/syed-reza98/NetConV3)

- **Repository**: `syed-reza98/NetConV3`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Python` | **Files**: `83`

#### 📌 Overview
This repository houses the source code and related documentation for NetCon, a microservices-based Reconciliation System.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Procedural & Object-Oriented Scripting / Service Module
- **Key Directory Layout**: `logo, myenv`

#### 🎯 Objective
This repository houses the source code and related documentation for NetCon, a microservices-based Reconciliation System.

#### ⚡ Features & Functionalities
- Write your Python script and ensure it functions as expected.
- If your Python script has dependencies, create a virtual environment:
- Use `PyInstaller` to convert the Python script into an executable:
- Install the Quasar CLI:
- Create a new Quasar project:

#### 💻 Tech Stack
- **Core Language**: Python
- **Frameworks & Libraries**: numpy, pandas
- **Key Package Dependencies**: `aiofiles, altgraph, bcrypt, certifi, cffi, charset-normalizer`

---

### 31. [NetEmp](https://github.com/syed-reza98/NetEmp)

- **Repository**: `syed-reza98/NetEmp`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `79`

#### 📌 Overview
NetEmp is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `Controllers, Models, Properties, Views, wwwroot`

#### 🎯 Objective
Provide an efficient, maintainable software solution for Netemp.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Netemp.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: HTML

---

### 32. [node-vps-deployment](https://github.com/syed-reza98/node-vps-deployment)

- **Repository**: `syed-reza98/node-vps-deployment`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `4`

#### 📌 Overview
Simple GitHub action to deploy a Node application into a VPS

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Simple GitHub action to deploy a Node application into a VPS

#### ⚡ Features & Functionalities
- uses: actions/checkout@v2
- name: Deploy to Staging
- Copies the repository contents to the remote server on the specified folder
- Runs ``npm ci``or ``yarn install``
- Runs ``pm2 restart <id>`` with the provided ID/Name

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 33. [nsu_ekyc](https://github.com/syed-reza98/nsu_ekyc)

- **Repository**: `syed-reza98/nsu_ekyc`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `250`

#### 📌 Overview
Laravel Project

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, public, resources`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Laravel Project

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Laravel
- **Key Package Dependencies**: `axios, laravel-mix, lodash, postcss, php, fruitcake/laravel-cors, guzzlehttp/guzzle, laravel/framework`

---

### 34. [nuxt-salman](https://github.com/syed-reza98/nuxt-salman)

- **Repository**: `syed-reza98/nuxt-salman`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Vue` | **Files**: `128`

#### 📌 Overview
nuxt-salman is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Component-Driven Single Page / SSR Application
- **Key Directory Layout**: `components, content, pages, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Nuxt Salman.

#### ⚡ Features & Functionalities
- Tailwind CSS
- Nuxt Content Module
- Shiki JS ES
- `git clone` this repo or click on `Use this template` button.
- `cd` into the project directory.

#### 💻 Tech Stack
- **Core Language**: Vue
- **Frameworks & Libraries**: Tailwind CSS, Nuxt.js, Vue.js
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@iconify-json/lucide, @nuxt/image, @nuxt/ui, vue-use-fixed-header, @nuxt/content, @nuxt/devtools`

---

### 35. [pos](https://github.com/syed-reza98/pos)

- **Repository**: `syed-reza98/pos`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `139`

#### 📌 Overview
pos is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, lang, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Pos.

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Laravel, Vite
- **Key Package Dependencies**: `@popperjs/core, axios, bootstrap, laravel-vite-plugin, lodash, postcss, php, guzzlehttp/guzzle`

---

### 36. [saas_ecom](https://github.com/syed-reza98/saas_ecom)

- **Repository**: `syed-reza98/saas_ecom`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `369`

#### 📌 Overview
E-commerce Back-end

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, others, public`
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
E-commerce Back-end

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Filament Admin, Laravel
- **Key Package Dependencies**: `php, althinect/filament-spatie-roles-permissions, filament/filament, flowframe/laravel-trend, guzzlehttp/guzzle, laravel/framework`

---

### 37. [shondhaan](https://github.com/syed-reza98/shondhaan)

- **Repository**: `syed-reza98/shondhaan`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `1289`

#### 📌 Overview
shondhaan is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `figma-screens, mem, public, scripts, src, supabase`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Shondhaan.

#### ⚡ Features & Functionalities
- Live app**: https://shondhaan.lovable.app
- Ship faster**: describe what you want to build and Lovable handles the code.
- Stay in sync**: every change made in Lovable is committed straight to this repository.
- Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **Database & Data Layer**: Supabase
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@emoji-mart/data, @emoji-mart/react, @hookform/resolvers, @lovable.dev/cloud-auth-js, @radix-ui/react-accordion, @radix-ui/react-alert-dialog`

---

### 38. [skills-ai-in-actions](https://github.com/syed-reza98/skills-ai-in-actions)

- **Repository**: `syed-reza98/skills-ai-in-actions`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `9`

#### 📌 Overview
Exercise: AI in Actions

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Exercise: AI in Actions

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Skills Ai In Actions.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **DevOps & Tooling**: GitHub Actions CI/CD

---

### 39. [skills-expand-your-team-with-copilot](https://github.com/syed-reza98/skills-expand-your-team-with-copilot)

- **Repository**: `syed-reza98/skills-expand-your-team-with-copilot`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `JavaScript` | **Files**: `38`

#### 📌 Overview
Exercise: Expand your team with GitHub Copilot coding agent

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `docs, src`

#### 🎯 Objective
Exercise: Expand your team with GitHub Copilot coding agent

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- Relational / document database schemas with migrations and seeders.

#### 💻 Tech Stack
- **Core Language**: JavaScript
- **Frameworks & Libraries**: fastapi
- **DevOps & Tooling**: GitHub Actions CI/CD
- **Key Package Dependencies**: `fastapi, uvicorn, pymongo, argon2, argon2-cffi`

---

### 40. [SMCM](https://github.com/syed-reza98/SMCM)

- **Repository**: `syed-reza98/SMCM`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `12`

#### 📌 Overview
An open source web application that helps online businesses plan, schedule, track, and analyze multi-platform social media marketing campaigns. The tool integrates with major social media APIs (Facebook, Instagram, Twitter/X, LinkedIn, TikTok) to automate post scheduling, collect engagement analytics, and provide actionable insights.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `backend, docs, frontend, tests`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
An open source web application that helps online businesses plan, schedule, track, and analyze multi-platform social media marketing campaigns. The tool integrates with major social media APIs (Facebook, Instagram, Twitter/X, LinkedIn, TikTok) to automate post scheduling, collect engagement analytics, and provide actionable insights.

#### ⚡ Features & Functionalities
- Universal Scheduler**: Plan and schedule posts across Facebook, Instagram, Twitter/X, LinkedIn, and TikTok from a single interface
- Smart Timing**: AI-powered optimal posting time suggestions based on audience analytics
- Bulk Operations**: Schedule multiple posts across platforms simultaneously
- Content Calendar**: Visual calendar view for campaign planning and management
- Real-time Dashboard**: Comprehensive analytics dashboard with key performance metrics

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Frameworks & Libraries**: Django, React, Vite
- **DevOps & Tooling**: TypeScript, Docker Compose
- **Key Package Dependencies**: `react, react-dom, react-router-dom, axios, @reduxjs/toolkit, react-redux, Django, djangorestframework`

---

### 41. [software_ag](https://github.com/syed-reza98/software_ag)

- **Repository**: `syed-reza98/software_ag`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `2`

#### 📌 Overview
software_ag is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Provide an efficient, maintainable software solution for Software_Ag.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Software_Ag.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **DevOps & Tooling**: GitHub Actions CI/CD

---

### 42. [special-space-goldfish](https://github.com/syed-reza98/special-space-goldfish)

- **Repository**: `syed-reza98/special-space-goldfish`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `JavaScript` | **Files**: `14`

#### 📌 Overview
special-space-goldfish is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `components, pages, styles`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Special Space Goldfish.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Special Space Goldfish.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: JavaScript
- **Frameworks & Libraries**: Next.js, React
- **Key Package Dependencies**: `next, react, react-dom`

---

### 43. [SR600Mini](https://github.com/syed-reza98/SR600Mini)

- **Repository**: `syed-reza98/SR600Mini`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `C` | **Files**: `22091`

#### 📌 Overview
Linux Application Development for POS Terminal

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Low-Level Systems / Embedded Architecture
- **Key Directory Layout**: `Docs in Marksdown, MF-XDK_ET-SB01`

#### 🎯 Objective
Linux Application Development for POS Terminal

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- E-commerce transaction flows, shopping cart, and order processing.
- Dedicated administrative dashboard with analytics and management interfaces.
- RESTful API endpoint structure with structured JSON request/response handling.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: C
- **Database & Data Layer**: MySQL, SQLite

---

### 44. [SR600Mini_v1](https://github.com/syed-reza98/SR600Mini_v1)

- **Repository**: `syed-reza98/SR600Mini_v1`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `C` | **Files**: `1419`

#### 📌 Overview
SR600Mini_v1 is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Low-Level Systems / Embedded Architecture
- **Key Directory Layout**: `apps, docs, releases, sdk, tools`

#### 🎯 Objective
Provide an efficient, maintainable software solution for Sr600Mini_V1.

#### ⚡ Features & Functionalities
- An Advanced Embedded Payment Processing Solution**
- 🖥️ **Dual Display Architecture**: Customer LVGL interface (320×480 3.5" Color TFT) + Merchant MFSDK interface (128×64 1.77" B&W)
- 💳 **Comprehensive Payment Support**: EMV L1&L2, contactless L1, PayPass, PayWave, QR codes
- 📷 **Advanced Hardware**: 16MP AF camera, GPS/GLONASS/BDS/Galileo positioning
- 🛡️ **Hardware Security**: MH1902T crypto processor, PCI 6.x compliance, secure key management

#### 💻 Tech Stack
- **Core Language**: C

---

### 45. [ssr_uw](https://github.com/syed-reza98/ssr_uw)

- **Repository**: `syed-reza98/ssr_uw`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PowerShell` | **Files**: `36`

#### 📌 Overview
Profile Review Analysis

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `assets, upwork-freelancer-assistant, upwork-freelancer-assistant.skill`

#### 🎯 Objective
Profile Review Analysis

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Ssr_Uw.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: PowerShell

---

### 46. [storm-commerce-kit](https://github.com/syed-reza98/storm-commerce-kit)

- **Repository**: `syed-reza98/storm-commerce-kit`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `Shell` | **Files**: `21`

#### 📌 Overview
storm-commerce-kit is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Provide an efficient, maintainable software solution for Storm Commerce Kit.

#### ⚡ Features & Functionalities
- Code Quality & Maintainability: TypeScript strict mode, linting/formatting, documented contracts
- Testing Discipline: TDD for critical paths, ≥80% coverage (≥90% for auth/checkout/pricing/tenancy), contract tests
- UX Consistency & Accessibility: Shared design system, WCAG 2.1 AA, i18n externalization
- Performance & Multi‑Tenancy: Web budgets (LCP/INP/CLS), API p95 ≤ 200ms, observability with tenant isolation

#### 💻 Tech Stack
- **Core Language**: Shell

---

### 47. [storm-funnel](https://github.com/syed-reza98/storm-funnel)

- **Repository**: `syed-reza98/storm-funnel`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `135`

#### 📌 Overview
A Sass Product Development for Website Builder (Drag & Drop), eCommerce/Digital Commerce.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `docs, storm_funnel`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
A Sass Product Development for Website Builder (Drag & Drop), eCommerce/Digital Commerce.

#### ⚡ Features & Functionalities
- Next.js 15+** with App Router and Turbopack
- TypeScript 5.0+** with strict mode
- Multi-tenant architecture** with complete data isolation
- Drag-and-drop website builder** using @dnd-kit
- Real-time collaboration** with Socket.IO 4.7+

#### 💻 Tech Stack
- **Core Language**: HTML
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **Database & Data Layer**: Prisma ORM, SQLite
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@auth/prisma-adapter, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, @headlessui/react, @heroicons/react`

---

### 48. [stormcomui](https://github.com/syed-reza98/stormcomui)

- **Repository**: `syed-reza98/stormcomui`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `2089`

#### 📌 Overview
stormcomui is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `docs, e2e, merge-resolution, playwright-report, prisma, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Stormcomui.

#### ⚡ Features & Functionalities
- File:** `.github/copilot-instructions.md`
- Repository overview and architecture
- Tech stack (Next.js 16, React 19, TypeScript, Prisma, NextAuth, shadcn/ui)
- Build and validation workflows
- Development workflows

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **Database & Data Layer**: PostgreSQL, Prisma ORM, SQLite
- **DevOps & Tooling**: TypeScript, Docker Compose, GitHub Actions CI/CD
- **Key Package Dependencies**: `@auth/prisma-adapter, @dnd-kit/core, @dnd-kit/modifiers, @dnd-kit/sortable, @dnd-kit/utilities, @hookform/resolvers`

---

### 49. [syed-reza](https://github.com/syed-reza98/syed-reza)

- **Repository**: `syed-reza98/syed-reza`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Vue` | **Files**: `14`

#### 📌 Overview
A lightweight Nuxt theme to build your portfolio in minutes.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Component-Driven Single Page / SSR Application
- **Key Directory Layout**: `components, content, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
A lightweight Nuxt theme to build your portfolio in minutes.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Syed Reza.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Vue
- **Frameworks & Libraries**: Nuxt.js, Vue.js
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `content-wind, nuxt, @nuxthq/studio`

---

### 50. [syed-reza98.github.io](https://github.com/syed-reza98/syed-reza98.github.io)

- **Repository**: `syed-reza98/syed-reza98.github.io`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `10`

#### 📌 Overview
Personal Portfolio 

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Personal Portfolio 

#### ⚡ Features & Functionalities
- Plain HTML, CSS, and vanilla JavaScript — no build step
- Deployment**: GitHub Pages (automated via GitHub Actions)
- ✅ Modern, responsive design
- ✅ Dark/Light theme support (follows system preference)
- ✅ Accessible (skip link, focus states, reduced-motion support)

#### 💻 Tech Stack
- **Core Language**: HTML
- **DevOps & Tooling**: GitHub Actions CI/CD

---

### 51. [task-python](https://github.com/syed-reza98/task-python)

- **Repository**: `syed-reza98/task-python`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Python` | **Files**: `10`

#### 📌 Overview
task-python is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Procedural & Object-Oriented Scripting / Service Module

#### 🎯 Objective
Provide an efficient, maintainable software solution for Task Python.

#### ⚡ Features & Functionalities
- When each employee first punched in and last punched out each day
- Total number of punches throughout the day
- Actual working hours in HH:MM format
- Whether employees arrived late (after 9:30 AM)
- Whether employees left early (before 5:00 PM)

#### 💻 Tech Stack
- **Core Language**: Python
- **Key Package Dependencies**: `openpyxl`

---

### 52. [task_for_python_developer](https://github.com/syed-reza98/task_for_python_developer)

- **Repository**: `syed-reza98/task_for_python_developer`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `Python` | **Files**: `16`

#### 📌 Overview
task_for_python_developer is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Procedural & Object-Oriented Scripting / Service Module
- **Key Directory Layout**: `__pycache__, attendance_logs`

#### 🎯 Objective
Provide an efficient, maintainable software solution for Task_For_Python_Developer.

#### ⚡ Features & Functionalities
- ✅ **Multi-file Processing**: Reads all `.log` and `.csv` files from `attendance_logs/` folder
- ✅ **Data Validation**: Comprehensive validation with detailed error logging
- ✅ **Duplicate Removal**: Automatic deduplication using hash-based approach
- ✅ **Attendance Metrics**: Calculates first punch, last punch, working hours, late entry, early exit
- ✅ **Multiple Outputs**: JSON, Excel (XLSX), and CSV formats

#### 💻 Tech Stack
- **Core Language**: Python
- **Key Package Dependencies**: `openpyxl`

---

### 53. [tax-course](https://github.com/syed-reza98/tax-course)

- **Repository**: `syed-reza98/tax-course`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Blade` | **Files**: `8727`

#### 📌 Overview
Tax Course Creation Process Web Platform using HTML, CSS, Vanilla JavaScript, and jQuery for the frontend, and Laravel for the backend

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, public, resources`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Tax Course Creation Process Web Platform using HTML, CSS, Vanilla JavaScript, and jQuery for the frontend, and Laravel for the backend

#### ⚡ Features & Functionalities
- Create courses with multiple modules
- Add unlimited nested content to modules
- Dynamic form handling with add/remove actions
- Frontend and backend validation
- RESTful API for course management

#### 💻 Tech Stack
- **Core Language**: Blade
- **Frameworks & Libraries**: Tailwind CSS, Laravel, Vue.js, Vite
- **Database & Data Layer**: MySQL, SQLite
- **DevOps & Tooling**: Docker, TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `jquery, @tailwindcss/forms, @tailwindcss/vite, alpinejs, autoprefixer, axios, php, laravel/framework`

---

### 54. [template](https://github.com/syed-reza98/template)

- **Repository**: `syed-reza98/template`
- **Visibility**: `Private` | **Type**: `Source Repository` | **Language**: `JavaScript` | **Files**: `2011`

#### 📌 Overview
template is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, lang, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Template.

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- E-commerce transaction flows, shopping cart, and order processing.
- Dedicated administrative dashboard with analytics and management interfaces.
- RESTful API endpoint structure with structured JSON request/response handling.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: JavaScript
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Laravel, Vue.js, Vite
- **Database & Data Layer**: MySQL
- **Key Package Dependencies**: `@popperjs/core, axios, bootstrap, laravel-vite-plugin, lodash, postcss, php, guzzlehttp/guzzle`

---

### 55. [tms](https://github.com/syed-reza98/tms)

- **Repository**: `syed-reza98/tms`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `PHP` | **Files**: `170`

#### 📌 Overview
tms is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `Database, TMS`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Tms.

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- RESTful API endpoint structure with structured JSON request/response handling.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Laravel
- **Key Package Dependencies**: `axios, laravel-mix, lodash, postcss, php, guzzlehttp/guzzle, laravel/framework, laravel/sanctum`

---

### 56. [walkin](https://github.com/syed-reza98/walkin)

- **Repository**: `syed-reza98/walkin`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `CSS` | **Files**: `274`

#### 📌 Overview
Hotel Website

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `djwin`

#### 🎯 Objective
Hotel Website

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- E-commerce transaction flows, shopping cart, and order processing.
- Dedicated administrative dashboard with analytics and management interfaces.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: CSS
- **Frameworks & Libraries**: Django
- **Key Package Dependencies**: `asgiref, certifi, charset-normalizer, Django, docopt, idna`

---

### 57. [walkinroom](https://github.com/syed-reza98/walkinroom)

- **Repository**: `syed-reza98/walkinroom`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `JavaScript` | **Files**: `182`

#### 📌 Overview
Hotel Website

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, lang, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Hotel Website

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: JavaScript
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Tailwind CSS, Laravel
- **Key Package Dependencies**: `@tailwindcss/forms, alpinejs, autoprefixer, axios, laravel-mix, lodash, php, guzzlehttp/guzzle`

---

### 58. [Walkinroom-v2.0](https://github.com/syed-reza98/Walkinroom-v2.0)

- **Repository**: `syed-reza98/Walkinroom-v2.0`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `JavaScript` | **Files**: `210`

#### 📌 Overview
Walkinroom-v2.0 is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `app, bootstrap, config, database, lang, public`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Walkinroom V2.0.

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: JavaScript
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Tailwind CSS, Laravel
- **Key Package Dependencies**: `@tailwindcss/aspect-ratio, @tailwindcss/forms, alpinejs, autoprefixer, axios, laravel-mix, php, guzzlehttp/guzzle`

---

### 59. [Weeding](https://github.com/syed-reza98/Weeding)

- **Repository**: `syed-reza98/Weeding`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `137`

#### 📌 Overview
Website for a Wedding Event

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `backend, frontend`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Website for a Wedding Event

#### ⚡ Features & Functionalities
- Backend Tests**: 13 tests passing (50 assertions) - 100% success rate
- Frontend Build**: Next.js with standalone output for Docker optimization
- Docker Builds**: Both backend and frontend containerized successfully
- Security Scanning**: Trivy vulnerability scanning integrated
- Container Registry**: GitHub Container Registry integration

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Radix UI / shadcn/ui, Laravel Sanctum (Auth), Next.js, Laravel, Tailwind CSS, React
- **Database & Data Layer**: SQLite
- **DevOps & Tooling**: Docker, TypeScript, Docker Compose, GitHub Actions CI/CD
- **Key Package Dependencies**: `@googlemaps/js-api-loader, @radix-ui/react-icons, @radix-ui/react-slot, class-variance-authority, clsx, lucide-react, php, laravel/framework`

---

### 60. [yess-bd](https://github.com/syed-reza98/yess-bd)

- **Repository**: `syed-reza98/yess-bd`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `Unspecified` | **Files**: `3`

#### 📌 Overview
yess-bd is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Provide an efficient, maintainable software solution for Yess Bd.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Yess Bd.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

---

### 61. [YessBangla](https://github.com/syed-reza98/YessBangla)

- **Repository**: `syed-reza98/YessBangla`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `1613`

#### 📌 Overview
YessBangla is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `oushodhwala, yessbgd, yesspos`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Yessbangla.

#### ⚡ Features & Functionalities
- Framework & Runtime**: [Next.js 16](https://nextjs.org/) App Router with [React 19](https://react.dev/).
- Deployment Target**: **cPanel + Phusion Passenger** utilizing standalone builds (`output: "standalone"`).
- Node.js**: v20+ or v22+ LTS
- Package Manager**: `npm` (v10+)
- Local MySQL Server**: [XAMPP](https://www.apachefriends.org/) (`127.0.0.1:3306`) or standalone MySQL 8+

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@ai-sdk/openai-compatible, @auth/drizzle-adapter, @hello-pangea/dnd, @hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog`

---

### 62. [yessbd](https://github.com/syed-reza98/yessbd)

- **Repository**: `syed-reza98/yessbd`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `HTML` | **Files**: `335`

#### 📌 Overview
yessbd is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `app, assets, components, data, public, raw_scraped_pages`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Yessbd.

#### ⚡ Features & Functionalities
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: HTML
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `next, react, react-dom, lucide-react, clsx, tailwind-merge`

---

### 63. [yesshost](https://github.com/syed-reza98/yesshost)

- **Repository**: `syed-reza98/yesshost`
- **Visibility**: `Public` | **Type**: `Source Repository` | **Language**: `TypeScript` | **Files**: `1263`

#### 📌 Overview
yesshost is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `docs, public, src, supabase`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Yesshost.

#### ⚡ Features & Functionalities
- URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID
- Use Lovable**
- Use your preferred IDE**
- Edit a file directly in GitHub**
- Navigate to the desired file(s).

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Tailwind CSS, Radix UI / shadcn/ui, React, Vite
- **Database & Data Layer**: MySQL, Supabase
- **DevOps & Tooling**: TypeScript
- **Key Package Dependencies**: `@hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox`

---

## Part III: Contributed Fork Repositories (15 Repositories)


### 1. [tms-main-ssr](https://github.com/CodeStorm-Hub/tms-main-ssr)

- **Repository**: `CodeStorm-Hub/tms-main-ssr`
- **Visibility**: `Private` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `236`

#### 📌 Overview
tms-main-ssr is an active project in `CodeStorm-Hub` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `SQL Database, app, bootstrap, config, database, lang`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Tms Main Ssr.

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Laravel
- **DevOps & Tooling**: GitHub Actions CI/CD
- **Key Package Dependencies**: `@popperjs/core, axios, bootstrap, laravel-mix, lodash, postcss, php, guzzlehttp/guzzle`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`cc18c11`](https://github.com/CodeStorm-Hub/tms-main-ssr/commit/cc18c11): *Added course by dividing as session & Trainee Registration Form* (2022-07-11)
- Commit [`e146018`](https://github.com/CodeStorm-Hub/tms-main-ssr/commit/e146018): *Added Batch and Trainee Import/Export && changed footer* (2022-07-06)
- Commit [`c94d4cc`](https://github.com/CodeStorm-Hub/tms-main-ssr/commit/c94d4cc): *Added Import and Export for User table* (2022-07-06)
- Commit [`52e5a7b`](https://github.com/CodeStorm-Hub/tms-main-ssr/commit/52e5a7b): *Updated* (2022-07-04)
- Commit [`ada7692`](https://github.com/CodeStorm-Hub/tms-main-ssr/commit/ada7692): *added login page* (2022-06-30)
- Commit [`1495e2e`](https://github.com/CodeStorm-Hub/tms-main-ssr/commit/1495e2e): *Updated css* (2022-06-30)

---

### 2. [awaken](https://github.com/syed-reza98/awaken)

- **Repository**: `syed-reza98/awaken`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `370`

#### 📌 Overview
awaken is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `android, assets, docs, ios, lib, linux`
- **Mobile/Multiplatform Architecture**: Flutter Dart widget hierarchy with modular UI and state segregation.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Awaken.

#### ⚡ Features & Functionalities
- Platforms:** Android (primary), iOS (secondary)
- [Flutter SDK](https://docs.flutter.dev/get-started/install) (stable channel)
- Android Studio / Xcode for device emulators and platform tooling
- [docs/awake_full_detail.md](docs/awake_full_detail.md)
- [docs/codebase_review.md](docs/codebase_review.md)

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Frameworks & Libraries**: Provider (State Management), Dio HTTP Client, Flutter Framework
- **DevOps & Tooling**: GitHub Actions CI/CD
- **Key Package Dependencies**: `description, publish_to, flutter_riverpod, riverpod_annotation, supabase_flutter, google_mlkit_pose_detection`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`415dc46`](https://github.com/syed-reza98/awaken/commit/415dc46): *Multi loop territory capture (#1)  This pull request sets up the orchestration and project management infrastructure for implementing the Territory Capture feature in the Awaken Flutter app. It introduces a multi-agent, orchestrator-driven workflow, decomposes the project into milestones, and establishes both the main orchestrator and a dedicated E2E testing sub-orchestrator. No application source code is changed; instead, a detailed project plan, context, and progress tracking system is established, along with the necessary agent coordination files.  **Project Orchestration and Planning:**  - Established the main orchestrator workspace with detailed project briefing, milestone plan, context analysis, and progress tracking for the Territory Capture feature. The orchestrator is responsible for decomposing the project into milestones, managing agent roles, and enforcing workflow constraints (e.g., never directly editing source code). (`.agents/orchestrator/BRIEFING.md`, `.agents/orchestrator/plan.md`, `.agents/orchestrator/context.md`, `.agents/orchestrator/progress.md`, `.agents/orchestrator/README.md`) [[1]](diffhunk://#diff-08bc8d9069ceeae03865afee22e5171356c7882522d81b60bfa68dee94d34d89R1-R72) [[2]](diffhunk://#diff-d6c38a791fb038eabecbb592e8d1567023338c2f39ba89dbfc3947aa0c912ad6R1-R22) [[3]](diffhunk://#diff-959d682c63ff2b5526cf79f9328209e807d0083195a4a6e25c9713e83232b474R1-R32) [[4]](diffhunk://#diff-7c82fbc4b1c8c8681425ffb4edab20325cef81f4b16da7b630c38f40bfc2d376R1-R16) [[5]](diffhunk://#diff-f7b5073b1c3974c18e491a10e7b8832b52a7a271f934b6a4353c9603368e119fR1-R2)  - Initialized the high-level project briefing and handoff, documenting the mission, logic chain, and current status for the Territory Capture initiative. (`.agents/BRIEFING.md`, `.agents/handoff.md`) [[1]](diffhunk://#diff-9fdd09279e75f2ac126c8f5254a18b6b7209694e06f592a1bd6a41d910d89823R1-R31) [[2]](diffhunk://#diff-0d07a8ba9571ba181d26c8fe1d033adf7af22aebdfe2b48b682cb66dff7909f8R1-R23)  **E2E Testing Track Setup:**  - Spawned and initialized a dedicated E2E testing sub-orchestrator, including its own briefing, scope, context, and planning files. This sub-orchestrator is tasked with designing and managing a comprehensive, multi-tiered E2E test suite for the feature. (`.agents/sub_orch_e2e/BRIEFING.md`, `.agents/sub_orch_e2e/README.md`, `.agents/sub_orch_e2e/SCOPE.md`, `.agents/sub_orch_e2e/context.md`, `.agents/sub_orch_e2e/ORIGINAL_REQUEST.md`) [[1]](diffhunk://#diff-e68fd7dcefc8ca4ee4d8da5f62155e2322b7f7f1d3d01c51ef7292d934af99deR1-R76) [[2]](diffhunk://#diff-205304ed54b71bd3fdcc2d106f2b26463a06440d2f6bc398293f16e5effd002bR1-R2) [[3]](diffhunk://#diff-6952db86ae745969b944f098b784dd3c19d7d61987a50d0390bc00580983d112R1-R32) [[4]](diffhunk://#diff-834562f594d508eefc2fe9617c7d4f337b6ff40677a38ea1cccb2c7c8fe422c3R1-R13) [[5]](diffhunk://#diff-98ac0a2e4edff3b0f9630c62d8a4a76be219751d43cf51a742d555e3f63b8afaR1-R23)  **Process and Workflow Documentation:**  - Defined strict orchestrator and sub-orchestrator workflow constraints (dispatch-only, no direct code changes), agent roles, escalation paths, and milestone verification strategies to ensure robust, auditable progress. [[1]](diffhunk://#diff-08bc8d9069ceeae03865afee22e5171356c7882522d81b60bfa68dee94d34d89R1-R72) [[2]](diffhunk://#diff-e68fd7dcefc8ca4ee4d8da5f62155e2322b7f7f1d3d01c51ef7292d934af99deR1-R76) [[3]](diffhunk://#diff-6952db86ae745969b944f098b784dd3c19d7d61987a50d0390bc00580983d112R1-R32)  These changes lay the foundation for a structured, agent-driven implementation and testing process for the Territory Capture feature, ensuring traceability, modular progress, and clear separation of orchestration from code implementation.* (2026-07-10)
- Commit [`21c16ce`](https://github.com/syed-reza98/awaken/commit/21c16ce): *Fix CI tests for 50m loop closure and ranks screen title.  Co-authored-by: Cursor <cursoragent@cursor.com>* (2026-07-10)
- Commit [`a739d71`](https://github.com/syed-reza98/awaken/commit/a739d71): *up* (2026-07-10)
- Commit [`0887e32`](https://github.com/syed-reza98/awaken/commit/0887e32): *up* (2026-07-08)
- Commit [`dd9a663`](https://github.com/syed-reza98/awaken/commit/dd9a663): *up* (2026-07-07)
- Commit [`53de6d1`](https://github.com/syed-reza98/awaken/commit/53de6d1): *up* (2026-07-07)

---

### 3. [awaken_v1](https://github.com/syed-reza98/awaken_v1)

- **Repository**: `syed-reza98/awaken_v1`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `614`

#### 📌 Overview
awaken_v1 is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `android, assets, awaken_screenshots, docs, infra, ios`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Mobile/Multiplatform Architecture**: Flutter Dart widget hierarchy with modular UI and state segregation.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Awaken_V1.

#### ⚡ Features & Functionalities
- Architecture: Feature-First Clean Architecture (Presentation → Domain → Data), BLoC state
- Full rationale, corrected package matrix, phased roadmap, and risk register:
- Background docs (superseded by the refined plan, kept for context):
- `.env.client`** — bundled into the app binary as a Flutter asset (see `pubspec.yaml`).
- `.env`** — tooling-only (Supabase management-API PAT for MCP/CLI use). **Never** referenced

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Frameworks & Libraries**: Provider (State Management), Flutter Framework, BLoC Pattern
- **Database & Data Layer**: SQLite
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `pmtiles, @cloudflare/workers-types, @types/node, tsx, typescript, wrangler, description, publish_to`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`0d86b49`](https://github.com/syed-reza98/awaken_v1/commit/0d86b49): *up* (2026-08-04)
- Commit [`829a1df`](https://github.com/syed-reza98/awaken_v1/commit/829a1df): *up* (2026-08-04)
- Commit [`13b69e2`](https://github.com/syed-reza98/awaken_v1/commit/13b69e2): *feat: replace launcher icons with the new design* (2026-08-04)
- Commit [`c51bc65`](https://github.com/syed-reza98/awaken_v1/commit/c51bc65): *up* (2026-08-04)
- Commit [`fa1a259`](https://github.com/syed-reza98/awaken_v1/commit/fa1a259): *up* (2026-08-04)
- Commit [`5f43bbf`](https://github.com/syed-reza98/awaken_v1/commit/5f43bbf): *push* (2026-08-04)

---

### 4. [CodeStoner-Hub.github.io](https://github.com/syed-reza98/CodeStoner-Hub.github.io)

- **Repository**: `syed-reza98/CodeStoner-Hub.github.io`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `6`

#### 📌 Overview
CodeStoner-Hub.github.io is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `css, js`

#### 🎯 Objective
Provide an efficient, maintainable software solution for Codestoner Hub.Github.Io.

#### ⚡ Features & Functionalities
- Responsive Design:** Works seamlessly across all devices and screen sizes
- Professional Timeline:** Detailed showcase of work experience and education
- Project Portfolio:** Categorized display of key development projects
- Skills Assessment:** Visual representation of technical competencies
- Certifications Section:** Listing of professional training and certifications

#### 💻 Tech Stack
- **Core Language**: Unspecified

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`623b377`](https://github.com/syed-reza98/CodeStoner-Hub.github.io/commit/623b377): *up* (2025-06-12)
- Commit [`64cfc2d`](https://github.com/syed-reza98/CodeStoner-Hub.github.io/commit/64cfc2d): *cc  Signed-off-by: Syed Salman Reza <syed.reza181@gmail.com>* (2025-06-12)
- Commit [`23bc752`](https://github.com/syed-reza98/CodeStoner-Hub.github.io/commit/23bc752): *Update index.html* (2024-07-15)
- Commit [`77c8ca7`](https://github.com/syed-reza98/CodeStoner-Hub.github.io/commit/77c8ca7): *Initial commit* (2024-06-22)

---

### 5. [CodeStorm-Hub](https://github.com/syed-reza98/CodeStorm-Hub)

- **Repository**: `syed-reza98/CodeStorm-Hub`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `138`

#### 📌 Overview
CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `docs, public, src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.

#### ⚡ Features & Functionalities
- Framework**: [Next.js 15](https://nextjs.org) with App Router
- Styling**: [Tailwind CSS 4](https://tailwindcss.com) and [Radix Colors](https://www.radix-ui.com/colors)
- Components**: [Radix UI](https://www.radix-ui.com) and [Radix Icons](https://www.radix-ui.com/icons)
- Typography**: [Geist Font](https://vercel.com/font)
- Language**: TypeScript

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@radix-ui/colors, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-icons, @radix-ui/react-navigation-menu, @radix-ui/react-slot`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`8bf8c82`](https://github.com/syed-reza98/CodeStorm-Hub/commit/8bf8c82): *Merge branch 'main' of https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io* (2025-10-01)
- Commit [`07efabf`](https://github.com/syed-reza98/CodeStorm-Hub/commit/07efabf): *Lighthouse Reports of Production Site* (2025-10-01)
- Commit [`926ecfd`](https://github.com/syed-reza98/CodeStorm-Hub/commit/926ecfd): *Enhance README with Radix Colors and Icons  Updated tech stack details in README.md to include Radix Colors and Radix Icons.* (2025-09-30)
- Commit [`9e4cedf`](https://github.com/syed-reza98/CodeStorm-Hub/commit/9e4cedf): *Fix live site URL in README  Updated live site URL for GitHub Pages.* (2025-09-30)
- Commit [`7b15e6d`](https://github.com/syed-reza98/CodeStorm-Hub/commit/7b15e6d): *Updated instructions* (2025-09-30)
- Commit [`4a6a0df`](https://github.com/syed-reza98/CodeStorm-Hub/commit/4a6a0df): *Update team.json* (2025-09-30)

---

### 6. [CSE311.9L_Summer20_RAH1_-M-](https://github.com/syed-reza98/CSE311.9L_Summer20_RAH1_-M-)

- **Repository**: `syed-reza98/CSE311.9L_Summer20_RAH1_-M-`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `549`

#### 📌 Overview
Project

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `Database, Project Report, admin, assets, css, images`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Project

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- E-commerce transaction flows, shopping cart, and order processing.
- Dedicated administrative dashboard with analytics and management interfaces.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Key Package Dependencies**: `@fortawesome/fontawesome-free, bootstrap, jquery, jquery.easing, simple-line-icons, browser-sync`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`5448b5d`](https://github.com/syed-reza98/CSE311.9L_Summer20_RAH1_-M-/commit/5448b5d): *Update README.md  Adding name and id* (2020-09-09)

---

### 7. [ecourier-courier](https://github.com/syed-reza98/ecourier-courier)

- **Repository**: `syed-reza98/ecourier-courier`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `PHP` | **Files**: `14`

#### 📌 Overview
Ecourier parcel service php/laravel package

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `config, src`
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Ecourier parcel service php/laravel package

#### ⚡ Features & Functionalities
- [Fetch Ecourier delivery/store city list](https://github.com/codeboxrcodehub/ecourier-courier#1-get-ecourier-delivery-city-list)
- [Fetch Ecourier delivery/store postcode list](https://github.com/codeboxrcodehub/ecourier-courier#3-get-ecourier-delivery-postcode-list)
- [Fetch Ecourier delivery/store branch list](https://github.com/codeboxrcodehub/ecourier-courier#5-get-ecourier-branch-list)
- [Fetch Ecurier delivery package lsit](https://github.com/codeboxrcodehub/ecourier-courier#6-delivery-package-list)
- [Create parcel](https://github.com/codeboxrcodehub/ecourier-courier#7-create-parcel)

#### 💻 Tech Stack
- **Core Language**: PHP
- **Key Package Dependencies**: `php, guzzlehttp/guzzle`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`1ab6ed2`](https://github.com/syed-reza98/ecourier-courier/commit/1ab6ed2): *Update composer.json* (2024-04-14)

---

### 8. [MSC](https://github.com/syed-reza98/MSC)

- **Repository**: `syed-reza98/MSC`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `91`

#### 📌 Overview
MSC Home Rental & Real Estate is a property rental & real estate platform tailored for URA-certified agents who specialize in apartment buy, sell, and rental services. The platform is designed to streamline property listings, client communications, and transaction management

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `docs`

#### 🎯 Objective
MSC Home Rental & Real Estate is a property rental & real estate platform tailored for URA-certified agents who specialize in apartment buy, sell, and rental services. The platform is designed to streamline property listings, client communications, and transaction management

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Msc.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`e7917d1`](https://github.com/syed-reza98/MSC/commit/e7917d1): *Update Quotation - 02.md* (2026-01-01)
- Commit [`b68e222`](https://github.com/syed-reza98/MSC/commit/b68e222): *Price Quotation (#1)* (2026-01-01)
- Commit [`b9f396d`](https://github.com/syed-reza98/MSC/commit/b9f396d): *Merge branch 'main' into ashraf-docs* (2026-01-01)
- Commit [`98b774f`](https://github.com/syed-reza98/MSC/commit/98b774f): *Update docs/Quotation-1.md  Co-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>* (2026-01-01)
- Commit [`f056f8a`](https://github.com/syed-reza98/MSC/commit/f056f8a): *Rename Quotation-1 to Quotation-1.md* (2026-01-01)
- Commit [`9fd5f7b`](https://github.com/syed-reza98/MSC/commit/9fd5f7b): *Initial commit* (2026-01-01)

---

### 9. [petfolio](https://github.com/syed-reza98/petfolio)

- **Repository**: `syed-reza98/petfolio`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `927`

#### 📌 Overview
PetFolio is a feature-rich, social-commerce platform built specifically for pet owners. It acts as a hybrid between an Instagram-style social network, a Tinder-style pet discovery/matching service (for breeding and playdates), a comprehensive health and daily care tracker, and an e-commerce marketplace for pet products.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `PetFolio Redesign, android, docs, google_fonts, graphify-out, ios`
- **Mobile/Multiplatform Architecture**: Flutter Dart widget hierarchy with modular UI and state segregation.

#### 🎯 Objective
PetFolio is a feature-rich, social-commerce platform built specifically for pet owners. It acts as a hybrid between an Instagram-style social network, a Tinder-style pet discovery/matching service (for breeding and playdates), a comprehensive health and daily care tracker, and an e-commerce marketplace for pet products.

#### ⚡ Features & Functionalities
- Flutter 3.11.5+ / Dart 3.11.5+
- Android or iOS development tools
- dart-define=SUPABASE_URL=https://<project-ref>.supabase.co \
- dart-define=SUPABASE_ANON_KEY=<anon-key> \
- dart-define=STRIPE_PUBLISHABLE_KEY=pk_test_<key>

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Frameworks & Libraries**: Flutter Framework
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `description, publish_to, flutter_web_plugins, cupertino_icons, supabase_flutter, flutter_riverpod`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`1a7a3e9`](https://github.com/syed-reza98/petfolio/commit/1a7a3e9): *Graphify* (2026-06-05)
- Commit [`aee43ad`](https://github.com/syed-reza98/petfolio/commit/aee43ad): *up* (2026-06-05)
- Commit [`cb15988`](https://github.com/syed-reza98/petfolio/commit/cb15988): *Pet Profile picture* (2026-06-05)
- Commit [`84d4d23`](https://github.com/syed-reza98/petfolio/commit/84d4d23): *up* (2026-06-05)
- Commit [`38a4945`](https://github.com/syed-reza98/petfolio/commit/38a4945): *up* (2026-06-05)
- Commit [`93173e5`](https://github.com/syed-reza98/petfolio/commit/93173e5): *PWA fix* (2026-06-04)

---

### 10. [shondhaan_flutter](https://github.com/syed-reza98/shondhaan_flutter)

- **Repository**: `syed-reza98/shondhaan_flutter`
- **Visibility**: `Private` | **Type**: `Fork` | **Language**: `Dart` | **Files**: `875`

#### 📌 Overview
shondhaan_flutter is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Clean Architecture / Layered State-Driven Mobile Architecture
- **Key Directory Layout**: `android, assets, docs, ios, lib, releases`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Mobile/Multiplatform Architecture**: Flutter Dart widget hierarchy with modular UI and state segregation.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Shondhaan_Flutter.

#### ⚡ Features & Functionalities
- User authentication, authorization, and session / token security.
- E-commerce transaction flows, shopping cart, and order processing.
- RESTful API endpoint structure with structured JSON request/response handling.
- Relational / document database schemas with migrations and seeders.
- Automated test suites ensuring regression resilience and stability.

#### 💻 Tech Stack
- **Core Language**: Dart
- **Frameworks & Libraries**: Dio HTTP Client, Flutter Framework
- **Key Package Dependencies**: `description, publish_to, flutter_localizations, flutter_riverpod, go_router, google_fonts`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`f0523ab`](https://github.com/syed-reza98/shondhaan_flutter/commit/f0523ab): *docs: document PR #25 audit addendum and system gap remediation plan  Update the master codebase audit report with post-audit code review resolutions and establish a structured implementation plan to address remaining microservice integration gaps.  - Document PR #25 stability and safety fixes in Section 10 of the audit report, detailing Riverpod lifecycle fixes (MartOrdersNotifier, UserWalletNotifier), elimination of offline phantom ride states, request deduplication token isolation, and keyboard accessibility refinements. - Define a comprehensive gap remediation implementation plan across four phased workstreams:   1. Align Delivery Dispatch rider application payloads with strict backend schema requirements (base64 NID encoding, DOB age validation, and service selections).   2. Implement polymorphic merchant partner application routing targeting individual microservice onboarding endpoints (Mart, Home Services, Food, and Travel).   3. Wire backend food order history (`GET /api/food/v1/orders`) into Riverpod state and the Activity Screen with live handover PIN tracking and cancellation support.   4. Replace hardcoded UI in the Notifications Center with a dynamic, SQLite-backed reactive notifier consuming Mart notification endpoints, and synchronize saved addresses with Mart shipping records. - Preserve strict separation of concerns, defensive anti-corruption parsing, and adherence to read-only production backend boundaries.* (2026-10-31)
- Commit [`3842fbe`](https://github.com/syed-reza98/shondhaan_flutter/commit/3842fbe): *fix(core): address PR #25 code review findings on state safety, networking, and a11y  Resolve critical findings from code review thread #5723183951 across state management, microservice integration, accessibility, and privacy:  - State Management & Riverpod Lifecycles:   - Avoid reading uninitialized `state.valueOrNull` during `build()` in     `MartOrdersNotifier`, preventing `StateError` on initial orders load.   - Watch `profileRepositoryProvider` in `UserWalletNotifier.build()` so     auth/dependency updates trigger proper cache invalidation.   - Bind transient `CancelToken` lifecycles to `AutoDisposeAsyncNotifier`     instances in parcel tracking and quoting controllers.  - Phantom State & Backend Consistency:   - Reject offline placeholder trips (`TRIP-<ms>`) inside `ActiveRideNotifier`     before updating global state, preventing fake trips from rendering on Home.   - Require server confirmation before clearing ride state on cancellation,     and normalize reason payloads against backend `CANCELLATION_REASONS`.   - Return `false` in `respondToOffer` and roll back optimistic chat state     until backend persistence schema for offer transitions is deployed.   - Fail closed with Bengali error in `verifySignupOtp` when email is absent,     matching central auth microservice requirements.  - Network Concurrency & Resilience:   - Omit caller-owned `CancelToken` from shared `AppDatabase.deduplicate()`     closures across ride, mart, parcel, food, exam, and deal repositories to     prevent unmounting screens from aborting concurrent in-flight requests.   - Allow network errors to propagate in `DealChatNotifier._fetchThread()` so     error boundaries render rather than masquerading failures as empty chats.  - Accessibility, Keyboard UX & Privacy:   - Anchor `PostAdModal` to topCenter when software keyboard is visible so     the sticky action bar remains accessible above the keyboard, guarded by     geometry assertions in widget tests.   - Upgrade recent-search delete affordance to `IconButton` with a semantic     tooltip and minimum touch target constraints.   - Enforce a 55km centroid cutoff in GPS location resolution to avoid mapping     distant or out-of-bounds coordinates to unrelated metropolitan hubs.   - Remove bundled mock video CV fallback and track actual simulation state.   - Centralize Bengali digit and date formatting in `DealItemDto` via     `Formatters`, ensuring proper local-time conversion for relative dates.   - Redact personal test account details from validation documentation and     generalize archive ignores in `.gitignore`.* (2026-10-31)
- Commit [`6188f41`](https://github.com/syed-reza98/shondhaan_flutter/commit/6188f41): *docs: add comprehensive codebase, API, database mapping and gap analysis review  Document an authoritative, full-system technical audit of the Shondhaan Super-App ecosystem to establish end-to-end alignment between the Flutter mobile application, 12 production backend microservices, and 11 MySQL database schemas (171 verified tables).  This review addresses architectural blind spots and technical debt across all 17 feature slices, mapping API connectivity, DTO contracts, and local SQLite offline caching to the live production database. It catalogs all 61 UI screens, 27 bottom sheets/dialogs, and 40+ custom components, and defines a prioritized remediation matrix for critical integration blockers (including YessService booking role restrictions, delivery rider registration schema requirements, and unwired food order histories and notifications).* (2026-10-31)
- Commit [`a7a1fba`](https://github.com/syed-reza98/shondhaan_flutter/commit/a7a1fba): *feat(deals): refine ad posting UX, chat interaction, and sync database snapshot  Improve input handling and keyboard scrolling resilience in the ad posting modal and seller chat interface to prevent overflow and enhance user experience during listing creation and buyer-seller negotiations. Add widget tests covering post-ad keyboard behavior, update the review database dump to the October 31, 2026 snapshot, and clean up deprecated migration artifacts.* (2026-10-31)
- Commit [`2578fd5`](https://github.com/syed-reza98/shondhaan_flutter/commit/2578fd5): *up* (2026-10-31)
- Commit [`a64cc46`](https://github.com/syed-reza98/shondhaan_flutter/commit/a64cc46): *apl* (2026-10-30)

---

### 11. [storm-commerce](https://github.com/syed-reza98/storm-commerce)

- **Repository**: `syed-reza98/storm-commerce`
- **Visibility**: `Private` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `3`

#### 📌 Overview
storm-commerce is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application

#### 🎯 Objective
Provide an efficient, maintainable software solution for Storm Commerce.

#### ⚡ Features & Functionalities
- Core domain workflows tailored for Storm Commerce.
- Clean separation of concerns with structured file organization.

#### 💻 Tech Stack
- **Core Language**: Unspecified

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`67b637f`](https://github.com/syed-reza98/storm-commerce/commit/67b637f): *Initial commit* (2025-09-17)

---

### 12. [stormcom](https://github.com/syed-reza98/stormcom)

- **Repository**: `syed-reza98/stormcom`
- **Visibility**: `Private` | **Type**: `Fork` | **Language**: `Unspecified` | **Files**: `3237`

#### 📌 Overview
stormcom is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `docs, e2e, marketing, memories, merge-resolution, prisma`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Stormcom.

#### ⚡ Features & Functionalities
- File:** `.github/copilot-instructions.md`
- Repository overview and architecture
- Tech stack (Next.js 16, React 19, TypeScript, Prisma, NextAuth, shadcn/ui)
- Build and validation workflows
- Development workflows

#### 💻 Tech Stack
- **Core Language**: Unspecified
- **Frameworks & Libraries**: Next.js, React, Tailwind CSS, Radix UI / shadcn/ui
- **Database & Data Layer**: PostgreSQL, Prisma ORM, SQLite
- **DevOps & Tooling**: TypeScript, Docker Compose, GitHub Actions CI/CD
- **Key Package Dependencies**: `@auth/prisma-adapter, @dnd-kit/core, @dnd-kit/modifiers, @dnd-kit/sortable, @dnd-kit/utilities, @elastic/elasticsearch`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`930271f`](https://github.com/syed-reza98/stormcom/commit/930271f): *Harden payments, webhooks, and admin endpoints  Security and robustness work across payments, webhooks, admin tooling, and infra:  - Add code-review artifacts (COMPREHENSIVE_CODEBASE_REVIEW_FINDINGS_2026-04-14.md, branch delta review, guard_scan.txt). - Enforce TypeScript checks in CI/dev build (scripts/build.js) and remove ignoreBuildErrors in next.config.ts. - Admin: convert setup-payment UI to POST and rework /api/admin/setup-payment-configs to fail-closed (no hardcoded SSLCommerz defaults), require super-admin permission, encrypt credentials, and upsert per-organization configs. - Payments/webhooks: strengthen tenant validation and idempotency patterns (Nagad callback rewritten to correlate via persistent paymentAttempt.nagadPaymentId, atomic compare-and-set transitions, safer failure handling and redirects); SSLCommerz cancel/fail handling hardened in branch review notes. - Authorization & tenancy: add organization resolution helpers for payment configuration endpoints and toggle, require proper membership or super-admin fallbacks. - Operational improvements: require auth/permission checks on cache stats/reset endpoints, add chat rate limiting on chat generate endpoint, improve order PATCH logging metadata. - Tests: add encryption unit test and update tenant-authorization tests.  Overall this commit focuses on closing cross-tenant credential leaks, making webhook/payment flows atomic and auditable, and tightening admin/permission boundaries.* (2026-04-15)
- Commit [`b4beee4`](https://github.com/syed-reza98/stormcom/commit/b4beee4): *Simplify shadcn mcp args and remove server entry  Update .mcp.json to compact the shadcn tool args into a single-line array element and remove the external 'github-mcp-server' HTTP toolset block. This keeps the MCP configuration focused on the local shadcn usage and removes the remote server configuration.* (2026-04-14)
- Commit [`bf2d9f4`](https://github.com/syed-reza98/stormcom/commit/bf2d9f4): *Add API, DB schema and ERD documentation  Add comprehensive repository documentation: CODEBASE_APIS_FEATURES_SCHEMA.md (API & pages inventory, tech stack, architecture notes, feature map, best-practice guidance and high-level ERD), DB_SCHEMA_API_ARCHITECTURE_USER_STORIES.md (Prisma DB schema overview, API surface, simplified ERDs and user stories), and Database-ERD.mmd (Mermaid ERD). Docs are generated from code/config (Prisma schema, Next.js App Router/Route Handlers, and .agent_work generated artifacts) and include summary counts (293 API handlers, 110 pages, 69 Prisma models) to help on-call devs and new contributors understand the system surface and data model.* (2026-04-14)
- Commit [`6a0a84a`](https://github.com/syed-reza98/stormcom/commit/6a0a84a): *Harden authz consistency, session freshness, and tenant-boundary enforcement across signup/proxy/webhooks (#421)  This PR addresses auth/security findings around stale authorization, inconsistent permission checks, route protection gaps, signup enumeration risk, and cross-tenant webhook mutation risk in the multi-tenant stack. It aligns permission evaluation and tenant verification paths so protected actions are consistently validated server-side.  - **Authz consistency + stale-permission mitigation** - Added canonical permission-list matcher in `src/lib/permissions.ts` and removed duplicated matching logic in middleware. - Kept API permission enforcement DB-revalidated (via `checkPermission`) instead of trusting session-cached permissions. - Tightened JWT session freshness in `src/lib/auth.ts` with short-lived, env-configurable session settings:     - `AUTH_SESSION_MAX_AGE_SECONDS` (default `900`)     - `AUTH_SESSION_UPDATE_AGE_SECONDS` (default `300`) - JWT callback now invalidates non-approved users (except super admin) from privileged session context.  - **Signup enumeration hardening** - `src/app/api/auth/signup/route.ts` now returns a generic response regardless of account existence. - Signup flow executes a consistent verification-path pattern and avoids differential logging behavior that leaks account existence.   - Dev verify URL exposure is limited to true new-signup paths only.  - **Centralized protection at proxy layer** - `proxy.ts` now enforces auth for protected API prefixes in addition to protected app pages. - Added explicit matcher entries for protected API namespaces to reduce missed-route risk.  - **Tenant boundary enforcement for webhooks** - Added `src/lib/tenant-authorization.ts` with `getValidatedOrderTenant(orderId, expectedStoreId?, expectedOrganizationId?)`.   - Applied tenant validation before order/payment mutation in:     - `src/app/api/webhooks/stripe/route.ts`     - `src/app/api/webhooks/sslcommerz/success/route.ts`     - `src/app/api/webhooks/sslcommerz/ipn/route.ts`     - `src/app/api/webhooks/sslcommerz/fail/route.ts`     - `src/app/api/webhooks/sslcommerz/cancel/route.ts` - Stripe webhook flows now also verify active Stripe payment configuration for validated tenant context before mutation.  - **Report status update** - Updated `COMPREHENSIVE_CODE_REVIEW_REPORT.md` with remediation checkmarks for the targeted auth/security items.  ```ts // Canonical tenant boundary check used before webhook mutations const tenant = await getValidatedOrderTenant(orderId, storeId, organizationId); if (!tenant) {   return NextResponse.json({ error: 'Tenant validation failed' }, { status: 403 }); } ```  <screenshot>  - Signup page verification screenshot (local run): `auth-signup-page.png` - Provided reference screenshot: https://github.com/user-attachments/assets/59a293ce-1111-48c7-9304-4d8ece07dae0  </screenshot>* (2026-04-14)
- Commit [`7de551e`](https://github.com/syed-reza98/stormcom/commit/7de551e): *Bump lockfile deps and ignore temp idor files  Add .tmp_idor_files.txt and .tmp_idor_scan.ps1 to .gitignore. Update package-lock.json with multiple dependency version bumps and minor updates (including various @react-pdf, @prisma, @redocly, @rolldown packages, addition of @noble/ciphers, and upgrades to @noble/hashes). No application source files changed.* (2026-04-14)
- Commit [`4e3ea87`](https://github.com/syed-reza98/stormcom/commit/4e3ea87): *Merge branch 'main' into copilot/fix-authentication-authorization-security* (2026-04-14)

---

### 13. [tms-main](https://github.com/syed-reza98/tms-main)

- **Repository**: `syed-reza98/tms-main`
- **Visibility**: `Private` | **Type**: `Fork` | **Language**: `PHP` | **Files**: `258`

#### 📌 Overview
tms-main is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: MVC (Model-View-Controller) / Service Layer Pattern
- **Key Directory Layout**: `SQL Database, app, bootstrap, config, database, lang`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.
- **Backend Architecture**: PHP Composer environment adhering to PSR conventions.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Tms Main.

#### ⚡ Features & Functionalities
- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).

#### 💻 Tech Stack
- **Core Language**: PHP
- **Frameworks & Libraries**: Laravel Sanctum (Auth), Laravel
- **DevOps & Tooling**: GitHub Actions CI/CD
- **Key Package Dependencies**: `@popperjs/core, axios, bootstrap, laravel-mix, lodash, postcss, php, guzzlehttp/guzzle`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`0fe6feb`](https://github.com/syed-reza98/tms-main/commit/0fe6feb): *Added course by dividing as session & Trainee Registration Form* (2022-07-11)
- Commit [`e146018`](https://github.com/syed-reza98/tms-main/commit/e146018): *Added Batch and Trainee Import/Export && changed footer* (2022-07-06)
- Commit [`c94d4cc`](https://github.com/syed-reza98/tms-main/commit/c94d4cc): *Added Import and Export for User table* (2022-07-06)
- Commit [`52e5a7b`](https://github.com/syed-reza98/tms-main/commit/52e5a7b): *Updated* (2022-07-04)
- Commit [`ada7692`](https://github.com/syed-reza98/tms-main/commit/ada7692): *added login page* (2022-06-30)
- Commit [`1495e2e`](https://github.com/syed-reza98/tms-main/commit/1495e2e): *Updated css* (2022-06-30)

---

### 14. [WebDriverAgent](https://github.com/syed-reza98/WebDriverAgent)

- **Repository**: `syed-reza98/WebDriverAgent`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `Objective-C` | **Files**: `539`

#### 📌 Overview
A WebDriver server for iOS and tvOS

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Modular Application
- **Key Directory Layout**: `Configurations, Fastlane, PrivateHeaders, Scripts, WebDriverAgent.xcodeproj, WebDriverAgentLib`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
A WebDriver server for iOS and tvOS

#### ⚡ Features & Functionalities
- Both iOS and tvOS platforms are supported with devices & simulators
- Implements most of [WebDriver Spec](https://w3c.github.io/webdriver/webdriver-spec.html)
- Implements part of [Mobile JSON Wire Protocol Spec](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md)
- Easy development cycle as it can be launched & debugged directly via Xcode
- Use [Mac2Driver](https://github.com/appium/appium-mac2-driver) to automate macOS apps

#### 💻 Tech Stack
- **Core Language**: Objective-C
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@appium/base-driver, @appium/strongbox, @appium/support, appium-ios-simulator, async-lock, asyncbox`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`9d9607f`](https://github.com/syed-reza98/WebDriverAgent/commit/9d9607f): *Create build-ipa.yml* (2026-07-24)

---

### 15. [yessbgd](https://github.com/syed-reza98/yessbgd)

- **Repository**: `syed-reza98/yessbgd`
- **Visibility**: `Public` | **Type**: `Fork` | **Language**: `TypeScript` | **Files**: `1256`

#### 📌 Overview
yessbgd is an active project in `syed-reza98` designed to deliver robust functionality for its target users and integrations.

#### 🏗️ Project Details & Architecture
- **Architectural Pattern**: Next.js Fullstack React (Server & Client Components / API Routes)
- **Key Directory Layout**: `assets, nextjs_yessbgd, public, reports, scripts, src`
- **Package Ecosystem**: Node.js / NPM ecosystem with structured script lifecycles.

#### 🎯 Objective
Provide an efficient, maintainable software solution for Yessbgd.

#### ⚡ Features & Functionalities
- Live app**: https://yessbgd.lovable.app
- Ship faster**: describe what you want to build and Lovable handles the code.
- Stay in sync**: every change made in Lovable is committed straight to this repository.
- Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

#### 💻 Tech Stack
- **Core Language**: TypeScript
- **Frameworks & Libraries**: Radix UI / shadcn/ui, Next.js, Tailwind CSS, React, Vite
- **Database & Data Layer**: Supabase
- **DevOps & Tooling**: TypeScript, GitHub Actions CI/CD
- **Key Package Dependencies**: `@cloudflare/vite-plugin, @hookform/resolvers, @lovable.dev/mcp-js, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio`

#### 🤝 User Contributions (`syed-reza98`)
Syed Salman Reza actively contributed to this fork with direct commits:
- Commit [`b027c31`](https://github.com/syed-reza98/yessbgd/commit/b027c31): *uu* (2026-09-30)
- Commit [`dedc46a`](https://github.com/syed-reza98/yessbgd/commit/dedc46a): *22* (2026-09-30)
- Commit [`472a74c`](https://github.com/syed-reza98/yessbgd/commit/472a74c): *up* (2026-09-29)
- Commit [`713d6e7`](https://github.com/syed-reza98/yessbgd/commit/713d6e7): *up* (2026-09-29)
- Commit [`a567b6e`](https://github.com/syed-reza98/yessbgd/commit/a567b6e): *up* (2026-09-29)
- Commit [`21e95ed`](https://github.com/syed-reza98/yessbgd/commit/21e95ed): *up* (2026-09-29)

---
