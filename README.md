# Eunoia - AI UX Portfolio

A password-protected portfolio showcasing AI and UX case studies.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file in the root directory with:
```
SECRET_KEY=your-super-secret-key-change-this-in-production
FLASK_ENV=development
FLASK_APP=backend/app.py
```

4. Initialize the database:
```bash
flask db init
flask db migrate
flask db upgrade
```

5. Run the development server:
```bash
flask run
```

## Features

- Secure user authentication with Flask-Login
- Protected case study pages
- Modern UI with Tailwind CSS
- Responsive design
- Flash messages for user feedback

## Project Structure

```
eunoia/
├── backend/
│   └── app.py
├── static/
│   └── css/
├── templates/
│   ├── base.html
│   ├── home.html
│   ├── login.html
│   ├── register.html
│   └── case_studies/
├── requirements.txt
└── .env
```

## Development

- All pages extend from `base.html`
- Authentication is handled by Flask-Login
- Styling is done with Tailwind CSS
- Case studies are protected routes 