ได้ครับ ผมแนะนำให้ **ยกระดับ Project Instruction เดิมให้เป็น “Technical + Product Master Instruction”** โดยล็อกทั้ง Brand, UX/UI และ Stack ไว้ในคำสั่งเดียว เพื่อให้ AI Coding Agent ไม่ตีความระบบใหม่ทุกครั้ง

จาก CI ที่อัปโหลด ระบบมีแกนชัดเจนทั้ง **Craft / Community / Sustainability / Creation**, ใช้ Logo Geometry, Monoline Icon และ Typography แบบ Cormorant Garamond + Montserrat + Noto Sans Thai / Noto Serif Thai  และ Website Structure ที่ต้องรองรับ Creation & Craft, ARMADA Upcycling, Art & Primitive, Shop, Learning & Activities, Journal และ Awareness Center 

ด้านล่างคือเวอร์ชันที่ผมแนะนำให้ใช้เป็น **Project Instruction หลักของโปรเจกต์**

---

# ARTcrew ARMADA

## MASTER PROJECT INSTRUCTION

### DIGITAL ECOSYSTEM / WEBSITE / SAAS PLATFORM

> **Use this document as the single source of truth for product architecture, UI/UX, visual identity, technology stack and development standards of ARTcrew ARMADA.**

---

# 01 — PROJECT IDENTITY

**Project Name**

`ARTcrew ARMADA Digital Ecosystem`

**Brand**

`ARTcrew ARMADA`

**Positioning**

`CREATION & CRAFT HOUSE`

**Brand Idea**

> **Craft. Community. Sustainability.**

**Brand Philosophy**

> **From Craft to Creation,
> From People to Possibility.**

**Digital Product Vision**

> Transform ARTcrew ARMADA from a contemporary craft house into a living digital ecosystem connecting **Craft, Art, People, Learning, Commerce, Community and Impact.**

ระบบ **ไม่ใช่เพียง E-Commerce**

แต่เป็น

```text
BRAND WEBSITE
      +
PORTFOLIO
      +
SHOP
      +
LEARNING PLATFORM
      +
ACTIVITY PLATFORM
      +
COMMUNITY
      +
CONTENT / JOURNAL
      +
FUTURE AWARENESS CENTER
```

---

# 02 — CORE PRODUCT PRINCIPLE

ทุกการออกแบบต้องเดินตาม

```text
CRAFT
   ↓
CONNECTION
   ↓
CREATION
   ↓
IMPACT
```

และต้องสะท้อน

```text
CRAFT
COMMUNITY
SUSTAINABILITY
CREATION
```

นี่คือ Brand Architecture หลักของระบบ 

---

# 03 — TECHNOLOGY STACK — LOCKED

## ใช้ Stack นี้เป็นมาตรฐานหลัก

```text
01  Remix
02  TypeScript
03  Tailwind CSS
04  Supabase
05  Cloudflare R2
06  Cloudflare Pages
07  Resend
08  LINE
09  Cloudflare Workers
```

### Architecture

```text
                 USER
                   │
                   ▼
          ┌─────────────────┐
          │     REMIX       │
          │ Frontend +      │
          │ Backend         │
          │ App Router      │
          └────────┬────────┘
                   │
          Cloudflare Workers
             Edge Proxy
                   │
       ┌───────────┼────────────┐
       │           │            │
       ▼           ▼            ▼
   Supabase      R2          Resend
 DB + Auth      Media         Email
       │
       ▼
    Realtime
       │
       ▼
      LINE
 Notifications
```

---

# 04 — DEVELOPMENT RULES

### Framework

ใช้ **Remix**

Frontend และ Backend อยู่ใน Application เดียวกัน

ห้ามสร้าง Frontend และ Backend แยก Project โดยไม่จำเป็น

### Language

```text
TypeScript ONLY
```

ทุกไฟล์ Code ต้องใช้ TypeScript ตามความเหมาะสม

ห้ามสร้าง JavaScript ใหม่ใน Project

### Styling

```text
Tailwind CSS
```

ใช้ Design Token กลาง

ห้ามเขียน Style กระจัดกระจายโดยไม่มีระบบ

---

# 05 — DATABASE

ใช้

**Supabase PostgreSQL**

เป็น Primary Database

Supabase ใช้สำหรับ

```text
Authentication
Users
Profiles
Roles
Permissions
Content
Products
Courses
Events
Community
Orders
Messages
Notifications
Analytics Data
```

ต้องออกแบบ Database เป็น

**Relational + Modular + Extensible**

ไม่ Hard-code Business Data ลงใน UI

---

# 06 — AUTHENTICATION

ใช้

**Supabase Auth**

รองรับอย่างน้อย

```text
Email / Password
OAuth-ready architecture
Session Management
Role-based Access
Protected Routes
```

Application ต้องแยก

```text
PUBLIC
AUTHENTICATED
ADMIN
```

อย่างชัดเจน

---

# 07 — MEDIA STORAGE

ใช้

**Cloudflare R2**

สำหรับ

```text
Product Images
Craft Images
Portfolio
Course Media
Event Images
Journal Images
User Avatar
Community Media
Exhibition Media
Documents
```

Database เก็บ Metadata / URL Reference

ไม่ควรเก็บ Binary File ใน PostgreSQL

---

# 08 — EMAIL

ใช้

**Resend**

สำหรับ

```text
Welcome Email
Email Verification
Password Reset
Order Confirmation
Event Registration
Course Enrollment
Learning Notification
Collaboration Request
Admin Notification
System Email
```

สร้าง Email Template System กลาง

---

# 09 — LINE NOTIFICATION

ใช้ LINE เป็น Notification Channel

ตัวอย่าง

```text
Event Reminder
Course Reminder
Order Update
Community Notification
Collaboration
Important System Alert
```

ออกแบบ Notification Service ให้สามารถเพิ่ม Channel อื่นในอนาคตได้

เช่น

```text
LINE
Email
Push Notification
```

---

# 10 — CLOUDFLARE WORKERS

Cloudflare Workers ทำหน้าที่เป็น

**Edge Proxy / Service Gateway**

สำหรับการเชื่อมต่อ Service ต่าง ๆ

```text
Remix
   ↓
Cloudflare Worker
   ↓
External / Internal Services
```

ห้ามกระจาย Secret Key ไปยัง Client

API Key / Secret ต้องอยู่ใน Server / Worker Environment

---

# 11 — DEPLOYMENT

Production

```text
Cloudflare Pages
        +
Cloudflare Workers
```

Environment:

```text
Development
Staging
Production
```

ต้องแยก Environment Variables

เช่น

```text
SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
R2_ACCESS_KEY
R2_SECRET_KEY
RESEND_API_KEY
LINE_CHANNEL_SECRET
```

**ห้าม commit secrets ลง Git**

---

# 12 — BRAND DESIGN SYSTEM

## Primary Colors

```text
ARMADA NAVY
#1E2A44

NATURAL SAND
#C7A995

CRAFT IVORY
#F7F4EF
```

## Secondary

```text
SEA BLUE
#557A8B
SAGE
#8EA08F
TERRACOTTA
#D17C5C
```

Visual Ratio

```text
60–70% Ivory / Neutral
20–25% Navy
5–10% Sand
Accent = Sea Blue / Sage / Terracotta
```

สีต้องมีลำดับชัดเจน ไม่ใช้ทุกสีในสัดส่วนเท่ากัน 

---

# 13 — TYPOGRAPHY

## Display

**Cormorant Garamond**

ใช้สำหรับ

```text
Brand
Hero
H1
Editorial
Story
Large Statement
```

## English UI

**Montserrat**

ใช้สำหรับ

```text
Navigation
Button
Label
UI
Dashboard
Forms
Data
```

## Thai UI

**Noto Sans Thai**

ใช้สำหรับ

```text
Body
Navigation
Button
Form
Dashboard
UI
```

## Thai Editorial

**Noto Serif Thai**

ใช้สำหรับ

```text
Editorial
Journal
Long-form Story
Brand Narrative
```

Typography ชุดนี้ต้องถือเป็น **LOCKED BRAND SYSTEM** 

---

# 14 — LOGO

ต้องใช้ Logo Asset ของ ARTcrew ARMADA ที่กำหนดไว้

รองรับ

```text
Master Logo
Symbol Mark
Sub-brand
Monochrome
Reverse
App Icon
```

ห้าม

```text
Stretch
Distort
Rotate
Redraw
Add unnecessary effects
```

Master Logo และ Sub-brand Logo ต้องมีหน้าที่แตกต่างกันอย่างชัดเจนตาม CI 

---

# 15 — VISUAL LANGUAGE

Graphic Language ต้องมาจาก Geometry ของ Logo

```text
DIAMOND / CROSS
= Creation / Structure

ARROW
= Movement / Exchange

CIRCLE
= Community / Center

DOT
= People / Network

ORGANIC CURVE
= Craft / Nature
```

ใช้กับ

```text
Divider
Pattern
Background
Illustration
Hover
Loading
Empty State
Section Decoration
```

โดยต้องใช้แบบ **Subtle**

ไม่ตกแต่งจนกลบ Content 

---

# 16 — ICON SYSTEM

ใช้

**MONOLINE ICON**

คุณสมบัติ

```text
Thin
Elegant
Consistent Stroke
Minimal
Human
Organic
```

Categories:

```text
Craft
Community
Sustainability
Creation
Learning
Shop
Journal
Events
Projects
Profile
Messages
Resources
Settings
```

CI ระบุ Monoline เป็นหนึ่งในองค์ประกอบหลักของ Digital Design System 

---

# 17 — WEBSITE INFORMATION ARCHITECTURE

Public Website:

```text
HOME

ABOUT ARTcrew ARMADA

CREATION & CRAFT

ARMADA UPCYCLING

ART & PRIMITIVE

SHOP

LEARNING & ACTIVITIES

JOURNAL

CRAFT & ART AWARENESS CENTER

CONTACT & COLLABORATION
```

โครงสร้างนี้ต้องไม่ถูกตีความว่า ARTcrew ARMADA = Upcycling เท่านั้น

**Upcycling เป็นหนึ่งใน Product / Creation Ecosystem**

ไม่ใช่ Brand ทั้งหมด

---

# 18 — CREATION & CRAFT

รองรับ

```text
Craft
Craftsmanship
Product Development
Design
Portfolio
Collections
Projects
```

Content ต้องเล่า

```text
Material
Process
People
Technique
Object
Story
```

---

# 19 — ARMADA UPCYCLING

เป็น Sub-brand / Product Ecosystem

```text
Upcycling
Eco-Luxury
Circular Economy
Reclaimed Materials
Upcycled Products
Collections
```

ต้องสามารถแยก Branding ของ ARMADA ออกจาก Corporate Brand ได้

---

# 20 — ART & PRIMITIVE

รองรับ

```text
Primitive Art
Contemporary Art
Culture
Heritage
Story
Objects
Exhibition
```

---

# 21 — SHOP

Commerce ต้องเป็น

**Craft Commerce**

ไม่ใช่ Discount Marketplace

รองรับ

```text
Collections
Categories
Products
Product Detail
Wishlist
Cart
Checkout
Orders
Order History
```

Product Model ต้องรองรับ

```text
Craft
Material
Technique
Artisan
Collection
Story
Sustainability
```

เพื่อให้ Product เชื่อมกับ Content Ecosystem ได้

---

# 22 — LEARNING & ACTIVITIES

รองรับ

```text
Courses
Lessons
Workshop
Activities
Events
Exhibitions
Talks
```

Learning Model:

```text
Course
 ↓
Module
 ↓
Lesson
 ↓
Practice
 ↓
Progress
 ↓
Completion
```

Activity Model:

```text
Activity
 ↓
Event
 ↓
Registration
 ↓
Participation
 ↓
Community
```

---

# 23 — JOURNAL

Journal เป็น **Editorial Engine**

รองรับ

```text
Craft Story
Material Story
People Story
Community Story
Design Story
Sustainability
Inspiration
Interview
News
```

ตัวอย่าง Editorial Direction:

> **From Waste to Worth**

> **The Hands Behind the Craft**

> **Learning Together, Growing Together**

แนวทางเหล่านี้ปรากฏอยู่ใน Brand / Website Concept ที่อัปโหลด 

---

# 24 — COMMUNITY

Community ต้องสร้างความรู้สึก

> **People + Craft + Learning + Collaboration**

รองรับ

```text
Members
Profiles
Posts
Comments
Projects
Groups
Discussion
Collaboration
```

ไม่ออกแบบให้เหมือน Social Media ทั่วไป

---

# 25 — CRAFT & ART AWARENESS CENTER

ต้องเตรียม Architecture สำหรับ Future Expansion

```text
AWARENESS CENTER

Knowledge
Exhibition
Workshop
Talk
Research
Culture
Sustainability
Community
Learning
```

เป็น Future Vision ของ Platform

ดังนั้นต้องออกแบบ Database / CMS ให้สามารถเพิ่ม Content Type ได้ในอนาคต

---

# 26 — USER ROLES

## Visitor

```text
Browse
Explore
Read
Shop
View Events
```

## Member

```text
Profile
Learning
Events
Community
Orders
Favorites
```

## Creator / Artisan

```text
Portfolio
Craft
Products
Projects
Stories
Collaboration
```

## Instructor

```text
Courses
Lessons
Students
Progress
```

## Organizer

```text
Events
Workshop
Exhibition
Participants
```

## Admin

```text
Users
Content
Products
Courses
Events
Orders
Community
Reports
```

## Super Admin

ควบคุมทุกระบบ

---

# 27 — SAAS APPLICATION

หลัง Login ให้เปลี่ยน Experience เป็น Application

### Main Navigation

```text
Dashboard
Courses
My Learning
Events
Community
Projects
Messages
Resources
Shop
Settings
```

รูปแบบนี้สอดคล้องกับ Web App UI ที่กำหนดใน CI 

---

# 28 — DASHBOARD

Dashboard ไม่ควรเป็น Generic SaaS Dashboard

ต้องเป็น

> **Personal Craft & Learning Workspace**

ตัวอย่าง:

```text
Welcome back, [Name]

Courses in Progress
Upcoming Events
Community Projects
Points Earned
```

ต่อด้วย

```text
Continue Learning
Upcoming Events
My Courses
Community Projects
Recommended Content
```

---

# 29 — CMS-FIRST ARCHITECTURE

**ห้าม Hard-code Content**

Admin ต้องเพิ่มเองได้

```text
Collection
Product
Craft
Project
Course
Lesson
Workshop
Event
Exhibition
Talk
Journal
Story
Community
```

ทุก Content ต้องรองรับ

```text
Draft
Review
Published
Archived
```

---

# 30 — MULTILINGUAL

ระบบรองรับ

```text
TH
EN
FR
```

ทุก Content สำคัญต้องออกแบบให้มี Translation Layer

แนะนำโครงสร้าง

```text
content
content_translations
```

แทนการสร้าง Table แยกตามภาษาในระยะยาว

ตัวอย่าง:

```text
content
id
type
status
created_at

content_translations
id
content_id
language
title
slug
description
body
```

ทำให้เพิ่มภาษาใหม่ในอนาคตได้ง่าย

---

# 31 — ROUTING PRINCIPLE

Route ต้องอ่านง่ายและ SEO-friendly

ตัวอย่าง:

```text
/th
/en
/fr

/th/craft
/en/craft
/fr/craft

/th/shop
/en/shop
/fr/shop

/th/journal
/en/journal
/fr/journal
```

Authenticated:

```text
/app/dashboard
/app/courses
/app/learning
/app/community
/app/events
/app/shop
```

Admin:

```text
/admin
/admin/users
/admin/products
/admin/courses
/admin/events
/admin/content
```

---

# 32 — COMPONENT SYSTEM

สร้าง Component กลางก่อนสร้าง Page

```text
/components
  /ui
  /layout
  /navigation
  /cards
  /forms
  /media
  /icons
  /content
  /commerce
  /learning
  /community
  /events
  /dashboard
```

หลัก:

> **Build once → Reuse everywhere**

---

# 33 — CORE UI COMPONENTS

ต้องมีอย่างน้อย

```text
Button
Card
Badge
Chip
Input
Textarea
Select
Modal
Drawer
Tabs
Dropdown
Avatar
Pagination
Breadcrumb
Toast
Alert
Progress
Table
Empty State
Loading State
Error State
```

---

# 34 — DESIGN DENSITY

แบ่งเป็น 3 ระดับ

### Brand Website

`Editorial / Spacious`

### SaaS

`Structured / Productive`

### Admin

`Dense / Efficient`

แต่ต้องใช้ DNA เดียวกัน

```text
Ivory
Navy
Sand
Editorial Typography
Monoline
Craft Geometry
```

---

# 35 — RESPONSIVE

ต้องรองรับ

```text
Desktop
Tablet
Mobile
```

แต่

> **Do not simply shrink desktop.**

ต้อง Recompose Layout

Desktop:

```text
12-column
Sidebar
Large Image
Multi-column
```

Mobile:

```text
4-column
Stacked
Bottom Navigation
Touch-friendly
Compact Header
```

CI ระบุทั้ง Desktop / Tablet / Mobile เป็นมาตรฐานของระบบ 

---

# 36 — IMAGE DIRECTION

ภาพต้องมีลักษณะ

```text
Natural
Warm
Human
Tactile
Editorial
Authentic
Cultural
```

เน้น

```text
MATERIAL
PROCESS & HAND
OBJECT / PRODUCT
PEOPLE / COMMUNITY
SPACE
```

ซึ่งเป็น Image Direction ที่กำหนดไว้ใน CI 

---

# 37 — MOTION

ใช้ Animation แบบ

```text
Fade
Soft Slide
Soft Scale
Line Drawing
Slow Image Reveal
Hover Movement
```

Motion ต้อง

**Calm / Organic / Elegant**

ห้าม

```text
Bounce
Flash
Neon
Gaming Animation
Excessive Parallax
```

---

# 38 — ACCESSIBILITY

ทุก Feature ต้องมี

```text
Semantic HTML
Keyboard Navigation
Focus State
ARIA where needed
Alt Text
Form Labels
Error Messages
Contrast
Touch Target
```

---

# 39 — PERFORMANCE

Priority:

```text
Performance
Accessibility
SEO
Responsive
Maintainability
```

รูปภาพต้องใช้

```text
Responsive Images
Lazy Loading
Compression
Modern Formats
```

ห้ามโหลดภาพขนาดใหญ่โดยไม่จำเป็น

---

# 40 — SECURITY

ต้องใช้

```text
Server-side validation
Authentication
Authorization
RLS
Environment Secrets
Input Sanitization
Rate Limiting where needed
Secure Upload
```

Supabase Row Level Security ต้องถูกออกแบบตาม Role / Ownership

---

# 41 — SEO

Public Website ต้องรองรับ

```text
SEO Metadata
Open Graph
Canonical URL
Sitemap
Structured Data
Semantic Heading
Alt Text
Clean URL
Language Alternate
```

Multilingual SEO ต้องรองรับ

```text
hreflang
TH
EN
FR
```

---

# 42 — DATA RELATIONSHIP

หัวใจสำคัญของระบบคือ

**Content ไม่ควรอยู่แยกจากกัน**

ตัวอย่าง

```text
ARTISAN
   │
   ├── CRAFT
   │      └── COLLECTION
   │              └── PRODUCT
   │
   ├── STORY
   │
   ├── PROJECT
   │
   └── COURSE
```

และ

```text
PRODUCT
   ├── COLLECTION
   ├── CRAFT
   ├── MATERIAL
   ├── ARTISAN
   ├── STORY
   └── IMPACT
```

ทำให้เกิด

> **Content Ecosystem**

แทนการมีข้อมูลแบบแยกหน้า

---

# 43 — FUTURE SCALABILITY

Architecture ต้องสามารถเพิ่ม

```text
Marketplace
Creator Marketplace
Booking
Membership
Subscription
Certificate
Digital Products
Exhibition Archive
Research Library
AI Recommendation
AI Content Assistant
Analytics
Mobile App
```

โดยไม่ต้อง rewrite ระบบหลัก

---

# 44 — AI READINESS

แม้ยังไม่ต้องสร้าง AI Module ใน MVP

Database ควรเตรียม Metadata เช่น

```text
Category
Tags
Material
Technique
Audience
Location
Language
Creator
Collection
Theme
Sustainability
Content Type
```

เพื่อรองรับอนาคต

```text
AI Search
AI Recommendation
AI Content Discovery
AI Learning Recommendation
```

---

# 45 — DESIGN QUALITY CHECK

ก่อนส่งมอบทุกหน้า ให้ตรวจ

```text
01  Does it look unmistakably ARTcrew ARMADA?

02  Is the hierarchy clear?

03  Is typography elegant?

04  Is whitespace sufficient?

05  Are colors restrained?

06  Are icons consistent?

07  Does it feel crafted rather than generic?

08  Is it premium but approachable?

09  Does it communicate Craft + Community
    + Sustainability + Creation?

10  Does it belong to the same ecosystem?
```

นี่เป็น Quality Check ที่อยู่ใน Universal CI โดยตรง 

---

# 46 — DEVELOPMENT WORKFLOW

เมื่อได้รับคำสั่งสร้าง Feature ใหม่ ให้ทำตามลำดับนี้

```text
01 Understand Business Goal
          ↓
02 Identify User Role
          ↓
03 Identify Ecosystem
          ↓
04 Define User Flow
          ↓
05 Define Data Model
          ↓
06 Define Route
          ↓
07 Reuse Components
          ↓
08 Apply Design Tokens
          ↓
09 Build Desktop
          ↓
10 Recompose Mobile
          ↓
11 Add Loading / Empty / Error
          ↓
12 Accessibility Check
          ↓
13 Security Check
          ↓
14 Performance Check
          ↓
15 Brand Consistency Check
          ↓
16 Definition of Done
```

---

# 47 — DEFINITION OF DONE

Feature ถือว่าเสร็จเมื่อ

### PRODUCT

* [ ] Business Logic ถูกต้อง
* [ ] User Flow ครบ
* [ ] Role ถูกต้อง
* [ ] Permission ถูกต้อง

### DEVELOPMENT

* [ ] TypeScript
* [ ] Remix
* [ ] Tailwind
* [ ] Supabase
* [ ] API / Service Architecture ถูกต้อง
* [ ] Error Handling
* [ ] Validation

### DESIGN

* [ ] ARTcrew ARMADA CI
* [ ] Color Token
* [ ] Typography
* [ ] Monoline Icon
* [ ] Spacing
* [ ] Responsive

### QUALITY

* [ ] Accessibility
* [ ] SEO
* [ ] Performance
* [ ] Security
* [ ] Mobile

### CONTENT

* [ ] TH
* [ ] EN
* [ ] FR

---

# 48 — AI CODING AGENT BEHAVIOR

เมื่อได้รับคำสั่งจากผู้พัฒนา:

### ห้าม

```text
❌ Invent new design system
❌ Change brand colors
❌ Change typography
❌ Add random libraries
❌ Create duplicate components
❌ Hard-code content
❌ Hard-code permissions
❌ Put secrets in client
❌ Create generic SaaS UI
❌ Create generic E-commerce UI
```

### ต้อง

```text
✓ Reuse existing components
✓ Follow Design Tokens
✓ Follow Brand CI
✓ Follow database architecture
✓ Follow role permissions
✓ Follow responsive rules
✓ Think modularly
✓ Think multilingual
✓ Think scalable
✓ Preserve Brand DNA
```

---

# 49 — MASTER DESIGN DNA

จำโครงสร้างนี้ไว้เป็นแกนกลางของทุกการตัดสินใจ

```text
01 BRAND

ARTcrew ARMADA
Creation & Craft House

        ↓

02 VISUAL

Editorial
×
Contemporary Craft
×
Premium

        ↓

03 SYSTEM

Circle
×
Diamond
×
Arrow
×
Dot
×
Organic Curve

        ↓

04 DIGITAL

Website
×
SaaS
×
Mobile
×
Commerce
×
Learning
×
Community

        ↓

05 CONTENT

Craft
×
Community
×
Sustainability
×
Creation
```

Universal CI ระบุ DNA 5 ชั้นนี้เป็นแกนกลางของ ARTcrew ARMADA โดยตรง 

---

# 50 — FINAL MASTER RULE

> **ARTcrew ARMADA is not a generic SaaS product with a craft-themed skin.**

แต่คือ

> **A Craft & Art ecosystem expressed through digital technology.**

ดังนั้นทุกครั้งที่สร้าง Feature ใหม่ ให้ถามว่า:

### ① Does it work?

### ② Is it useful?

### ③ Is it scalable?

### ④ Is it accessible?

### ⑤ Does it feel like ARTcrew ARMADA?

ถ้า **ข้อ ⑤ ไม่ผ่าน**

ให้กลับไปปรับ Design / UX ก่อนถือว่า Feature นั้นเสร็จ

---

## MASTER STATEMENT

> **Build ARTcrew ARMADA as a living digital ecosystem where craft becomes creation, creation connects people, learning creates possibility, commerce creates value, and technology enables sustainable impact.**

**Craft → Connection → Creation → Impact**

นี่ควรเป็น **North Star ของทั้ง Product, UX/UI, Code Architecture และ Brand Experience** ไม่ใช่แค่ข้อความใน CI

และที่สำคัญ ผมแนะนำว่า **อย่าเอา Instruction นี้ไปจบแค่ใน `README.md`** แต่ให้แยกเป็น 4 ไฟล์ใน Repository เพื่อให้ AI Coding Agent ทำงานแม่นขึ้น:

```text
/PROJECT.md
        → Business + Product Rules

/DESIGN_SYSTEM.md
        → CI + Color + Font + UI

/ARCHITECTURE.md
        → Remix + Supabase + R2 + Cloudflare

/DEVELOPMENT.md
        → Coding Rules + Workflow + Definition of Done
```

โดย `PROJECT.md` เป็น **Master Source of Truth** และอีก 3 ไฟล์เป็น Technical Instruction ที่แตกแขนงออกมา วิธีนี้จะเหมาะกับการพัฒนา SaaS ขนาดใหญ่กว่าการใส่ทุกอย่างไว้ใน Prompt เดียว และยังรักษา CI ที่วางไว้แล้วได้ครบถ้วน 
