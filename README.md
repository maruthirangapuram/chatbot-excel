# Excel Chatbot

A beautiful and intuitive application that allows users to upload Excel files and ask questions about the data in natural language.

## Features

- Excel file upload and parsing
- Natural language question interface
- Chat-based interaction with data
- Data visualization and formatting
- Mobile-responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)

### Installation

1. Clone the repository
2. Install frontend dependencies:
```
npm install
```
3. Install backend dependencies:
```
cd api
pip install -r requirements.txt
```

### Running the Application

1. Start the Python backend:
```
python api/app.py
```

2. In a separate terminal, start the frontend:
```
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Upload an Excel (.xlsx, .xls) or CSV file using the upload panel
2. Once uploaded, you can ask questions about your data in the chat interface
3. The chatbot will analyze your data and provide answers based on your questions

## Example Questions

- "How many rows are in the dataset?"
- "Show me the first 5 rows"
- "What columns are available?"
- "What's the average value in column X?"
- "What's the maximum value in column Y?"

## Technologies Used

- Frontend: React, TypeScript, Tailwind CSS
- Backend: Flask (Python), Pandas
- Data Processing: Pandas, NumPy