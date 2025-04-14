
# 🧠 Sentence Construction Quiz App

An engaging and interactive web-based quiz application that challenges users to construct grammatically correct sentences by selecting the right words in the correct order.

🌐 **Live Demo:** [https://sentence-constructor-five.vercel.app](https://sentence-constructor-five.vercel.app)

---

## ✨ Features

- 🧩 Sentence construction with blanks and options
- ⏱️ Timer-based quiz (30 seconds per question)
- 📊 Auto-submit after timeout or end of questions
- 💾 State persistence using localStorage
- ❌ No skipping without answering
- 📱 Fully responsive and mobile-friendly
- 🎨 Beautiful glassmorphism UI with smooth animations

---

## 🧑‍💻 Technologies Used

| Category           | Tools / Libraries                     |
|-------------------|----------------------------------------|
| **Frontend**       | React (Vite), TypeScript              |
| **Routing**        | React Router                          |
| **Animations**     | Framer Motion                         |
| **Styling**        | Tailwind CSS                          |
| **State Management** | React Hooks + LocalStorage           |
| **Deployment**     | Vercel                                |

---

## 🧾 Instructions (Shown on Home Page)

1. Each question contains **4 blanks** to be filled using the given options.
2. Click the correct words **in the correct order** to complete the sentence.
3. A **timer (30 seconds)** is provided for each question.
4. **You cannot skip** a question without answering all blanks.
5. **Once the time runs out**, the current question will be automatically submitted.
6. Your **progress is saved** in case you leave or refresh the page.
7. Once all questions are completed, the results will be shown.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sentence-construction-quiz.git
cd sentence-construction-quiz
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🗂️ Project Structure

```
src/
│
├── api/                 # API handlers (mock/fetch)
│   └── fetchQuestions.ts
│
├── components/          # Reusable UI components
│   ├── SentenceQuestion.tsx
│   └── Timer.tsx
│
├── data/                # Static or mock data
│   └── types.ts
│
├── pages/               # Page-level components
│   ├── HomePage.tsx
│   ├── QuizPage.tsx
│   └── ResultPage.tsx
│
├── App.tsx              # Main app layout
└── main.tsx             # Entry point
```

---

## 📦 Deployment

The app is deployed on **Vercel**:  
🔗 [https://sentence-constructor-five.vercel.app](https://sentence-constructor-five.vercel.app)

