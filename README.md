# Cypress Automation Framework 🚀

👋 Welcome to this Cypress Automation Framework repository! This project is designed for UI automation testing using Cypress. It covers both basic concepts and advanced E2E implementation using the Page Object Model (POM). It has also been configured with reporting and CI/CD pipeline feature"

---
# Framework Mindmap
![Framework Mindmap](frameworkMindmap\frameworkImage.png "Framework")

## 📂 Project Structure

The project is divided into two main sections:

1. **CypressBasics**  
   - Covers fundamental Cypress concepts.
   - Includes sample test cases to help you understand the basics of Cypress.

2. **E2E (End-to-End)**  
   - Implements a structured test framework using the **Page Object Model (POM)**.
   - Demonstrates best practices for organizing and maintaining automated tests.

---

## 🚀 Project Structure


```
CypressAutomation
├─ cypress
│  ├─ cypressBasics  --this is to referesh cypress basics concepts
│  │  ├─ calender.cy.js
│  │  ├─ checkboxes.cy.js
│  │  ├─ childWindow.cy.js
│  │  ├─ dropdowns.cy.js
│  │  ├─ iframes.cy.js
│  │  ├─ mouseHovers.cy.js
│  │  ├─ newTabHandle.cy.js
│  │  ├─ popupalerts.cy.js
│  │  ├─ radioandvisibile.cy.js
│  │  ├─ test.cy.js
│  │  └─ webTables.cy.js
│  ├─ downloads
│  ├─ e2e --End to end testing
│  │  └─ Specs
│  │     └─ EndtoEndFlow
│  │        ├─ HomePageTest.cy.js
│  │        └─ LoginTest.cy.js
│  ├─ fixtures
│  │  └─ example.json
│  ├─ pageObjects
│  │  ├─ HomePage.js
│  │  └─ LoginPage.js
│  ├─ reports
│  │  └─ html
│  │     ├─ assets
│  │     │  ├─ app.css
│  │     │  ├─ app.js
│  │     │  ├─ app.js.LICENSE.txt
│  │     │  ├─ MaterialIcons-Regular.woff
│  │     │  ├─ MaterialIcons-Regular.woff2
│  │     │  ├─ roboto-light-webfont.woff
│  │     │  ├─ roboto-light-webfont.woff2
│  │     │  ├─ roboto-medium-webfont.woff
│  │     │  ├─ roboto-medium-webfont.woff2
│  │     │  ├─ roboto-regular-webfont.woff
│  │     │  └─ roboto-regular-webfont.woff2
│  │     ├─ index.html
│  │     └─ videos
│  │        └─ LoginTest.cy.js.mp4
│  ├─ support
│  │  ├─ commands.js
│  │  ├─ e2e.js
│  │  └─ utils.js
│  └─ videos
│     └─ LoginTest.cy.js.mp4
├─ cypress.config.js
├─ frameworkMindmap
│  └─ frameworkImage.png
├─ package-lock.json
├─ package.json
└─ README.md

```

## 📈 Reporting with MochaAwesome
Cypress tests are integrated with the MochaAwesome reporter for generating visually appealing HTML reports. The reports include:

**Test case execution status (pass/fail)**
**Duration**
**Logs, Videos and Screenshots(only if test fails)**
## 🛠️ Setup Reporting
In cypress.config.js, the cypress-mochawesome-reporter is configured. Once your tests run, a beautiful HTML report will be available in the cypress/reports folder.

## ⚙️ CI/CD Pipeline with GitHub Actions
Lastly I have implemented a GitHub Actions pipeline for CI/CD which automates the testing process whenever you push code to your repository. This pipeline supports parallel test execution for quicker feedback on large test suites.

Parallel test execution reduces testing time by running tests on multiple machines concurrently.
Test reports are automatically generated and made available for each test run.
