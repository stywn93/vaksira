# Vaksira

Vaksira is a Vite + React web application that helps parents and caregivers generate a child immunization reminder and view a personalized immunization schedule. The app collects baby profile information, verifies it with Google reCAPTCHA, submits registration data to an API, and returns an immunization schedule with schedule details and an exportable PDF experience.

## Project Overview

Vaksira is designed around a simple flow:

1. A parent visits the landing page and starts creating a reminder.
2. The parent fills in baby and mother profile information.
3. The form validates reCAPTCHA and sends the data to the Vaksira API.
4. The API returns a registration token that is used to fetch the baby’s immunization schedule.
5. The schedule page displays vaccines, recommended timing windows, and schedule details.

## Features

- Landing page with marketing and product positioning.
- Multi-step baby profile and reminder generation form.
- Google reCAPTCHA verification before submission.
- API-backed registration request and schedule lookup.
- Immunization schedule page with child-specific schedule information.
- PDF export support for immunization schedules.
- Local development workflow powered by Vite and React.

## Tech Stack

- React 19
- Vite 8
- React Router DOM
- Ant Design UI components
- @react-pdf/renderer and jspdf for PDF generation
- html-to-image for image export workflows
- Tailwind CSS and custom CSS styling
- ESLint for code quality checks

## Prerequisites

Before running the project locally, make sure you have:

- Node.js and npm installed
- A configured VITE_API_PATH environment variable that points to the Vaksira backend base URL

## Installation

Clone the repository:

```sh
git clone https://github.com/stywn93/vaksira.git
cd vaksira
```

Install dependencies:

```sh
npm install
```

Create an environment file if your local setup requires one:

```sh
VITE_API_PATH=https://your-api-base-url
```

The code reads the backend URL from the environment through:

```js
const rawApiPath = import.meta.env.VITE_API_PATH
```

## Running the Application

Start the development server:

```sh
npm run dev
```

The Vite development server will serve the React app locally, usually at the port shown in the terminal output.

## Available Scripts

The project scripts defined in package.json are:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

Use them as follows:

```sh
npm run dev
npm run build
npm run lint
npm run preview
```

## Application Flow

The main app entry point in src/main.jsx sets up the route structure:

- `/` → Landing page
- `/generate-reminder` → Baby profile and schedule generation form
- `/immunization-schedule/:id` → Immunization schedule page for the generated registration token

The generated reminder flow is handled by:

- `FormGenerateReminder.jsx`
- `FormBabyProfile.jsx`
- `useBabyProfile.js`
- `Baby.js` API helpers

The schedule page and export UI are implemented in:

- `components/ImmunizationSchedule.jsx`
- `components/ImmunizationSchedulePdf.jsx`
- `libs/immunization/formatters.js`

## Project Structure

```text
src/
  components/              UI screens and layout components
  libs/
    api/                   API fetch helpers
    hooks/                 Profile and schedule hooks
    immunization/          schedule formatting and PDF utility logic
  App.css                  styling entry point
  main.jsx                 React Router and app route setup
  LandingPage.jsx          landing page UI
  FormGenerateReminder.jsx form entry point
```

## API Layer

The project uses a small API abstraction layer in src/libs/api/Baby.js:

- `insertBaby(payload)` sends a POST registration request to `${apiBaseUrl}/registrations`
- `getSchedule(id)` fetches an immunization schedule via `${apiBaseUrl}/get-schedule/${id}`

The base API URL is normalized from the environment variable in src/libs/api/BaseURL.js.

## Development Notes

The UI is built with reusable components and route-driven navigation. Input submission is captured in the form component, then submitted through a profile hook that wraps the API client and workflow navigation. The schedule page reads the returned registration token from the route and requests the schedule data using the hook layer.

## Testing and Quality

The repository includes an ESLint configuration and a `lint` script. The recommended local validation workflow is:

```sh
npm run lint
npm run build
```

## Contributing

Contributions are welcome. To contribute:

1. Create a branch from the latest repository state.
2. Make a focused change.
3. Run the available lint and build checks.
4. Submit a pull request with a clear explanation of the change.

## License

No explicit license file is present in the repository metadata at this time. If you are using this repository in production, confirm the intended legal license before publication or redistribution.
