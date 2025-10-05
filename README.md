# Gemini Clone

A responsive and interactive **Gemini AI clone** built with **React** and **Tailwind CSS**, integration with the **Gemini API** by Google. The project includes modular React components, custom styling, and organized project structure to replicate the feel of a modern AI assistant.

---

## Features

-  Chat interface powered by Gemini API  
-  Modular components for easy maintenance  
-  Fully responsive UI using Tailwind CSS   
-  API key stored in a constants file  
-  Clean and minimalist design

---

##  Tech Stack

- **Frontend**: React.js  
- **Styling**: Tailwind CSS  
- **AI Integration**: Gemini API (Google Generative AI)  

---

## 📁 Folder Structure

```
gemini-clone/
├── public
├── src/
│   ├── assets/
│   │   ├── gemini-favicon.ico
│   │   ├── logo.jpg
│   │   └── react.svg
│   ├── components/
│   │   ├── Answer.jsx
│   │   ├── Input.jsx
│   │   ├── TopBar.jsx
│   │   └── Welcome.jsx
│   ├── constants.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── .gitignore
```
---

##  How It Works

- User types a message in the input box.
- The message is sent to the Gemini API via the URL/key in `constants.js`.
- The response is rendered by the `Answer` component.
- The chat interface updates in real-time with the result.

---
##  To-Do

- [ ] Add conversation history  
- [ ] Add loader/spinner while waiting for response  
- [ ] Support streaming responses  
- [ ] Integrate voice input/output  

---

##  Deployment

You can view project using:

- **[Vercel](https://gemini-clone-pink-chi.vercel.app/)**
---
##  Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)  
- [React](https://reactjs.org/)  
- [Gemini API](https://ai.google.dev/)  
- [Google AI Studio](https://makersuite.google.com/)

