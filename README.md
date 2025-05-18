# PhoneHub E-commerce Website

This project is an e-commerce website for selling phones and tablets, built with React (frontend) and Django (backend).

## Project Structure

The project is structured as a monorepo with two main parts:

1. **Frontend**: React application with TypeScript and Tailwind CSS
2. **Backend**: Django REST API in the `api` directory

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.8+)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/phonehub-ecommerce.git
cd phonehub-ecommerce
```

2. Install frontend dependencies:

```bash
npm install
```

3. Create a Python virtual environment and install backend dependencies:

```bash
cd api
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Running the Development Servers

1. Start the Django backend:

```bash
cd api
python manage.py migrate
python loaddata.py  # Load initial product data
python manage.py runserver
```

2. Start the React frontend (in a new terminal):

```bash
npm run dev
```

### Building for Production

1. Build the React frontend:

```bash
npm run build
```

2. Configure Django to serve the built static files in production.

## Features

- Dynamic product listing
- Detailed product pages
- Shopping cart functionality
- Responsive design for all devices
- Search functionality
- User authentication (planned)
- Order processing (planned)
- Admin dashboard (planned)

## Technologies Used

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router
- Axios

### Backend
- Django
- Django REST Framework
- SQLite (development) / PostgreSQL (production)

## License

This project is licensed under the MIT License.