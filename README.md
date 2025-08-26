# Instagram Home Page Clone (React + JSON Server)

This project is a clone of Instagram's Home Page UI, built with React.js.  
It replicates the layout and design of Instagram’s home feed, while also loading posts and user data dynamically from a JSON Server.

---

## Features
- Navigation bar similar to Instagram
- Stories section layout
- Post feed with user profile, images, captions, and actions (like, comment, share, save)
- Reusable React components (Navbar, Story, Post, Sidebar, etc.)
- Data fetching from JSON Server (mock REST API)
- Responsive design for desktop and mobile

---

## Technologies Used
- React.js – frontend framework  
- JSON Server – mock backend for API data  
- Axios / Fetch API – data fetching  
- CSS3 (or Tailwind CSS, if used) – styling and responsiveness  
- JavaScript (ES6+) – interactivity and state management  

---

## Project Structure
```

instagram-clone/
│── public/
│   └── index.html
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Story.jsx
│   │   ├── Post.jsx
│   │   └── Sidebar.jsx
│   ├── App.js
│   ├── index.js
│   └── App.css
│── db.json          (JSON Server database)
│── package.json
│── README.md

````

---

## Sample JSON Data (db.json)
```json
{
  "posts": [
    {
      "id": 1,
      "username": "john_doe",
      "avatar": "https://via.placeholder.com/50",
      "image": "https://via.placeholder.com/500",
      "caption": "Exploring the beach vibes",
      "likes": 120
    },
    {
      "id": 2,
      "username": "jane_doe",
      "avatar": "https://via.placeholder.com/50",
      "image": "https://via.placeholder.com/500",
      "caption": "Coffee first, code later",
      "likes": 89
    }
  ]
}
````

---

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/instagram-clone.git
   cd instagram-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start JSON Server:

   ```bash
   npx json-server --watch db.json --port 5000
   ```

4. Start React App:

   ```bash
   npm start
   ```

The React application will now fetch posts from `http://localhost:5000/posts`.

---

## Learning Outcomes

* Component-based architecture in React
* State and effect hooks for managing data
* API integration with Axios/Fetch and JSON Server
* Responsive web design practices
* Building a real-world inspired UI with dynamic data

---

## Future Improvements

* Add story carousel functionality
* Enable like, comment, and save interactions that update JSON Server
* Integrate with Firebase or a real backend
* Add authentication and user management

---

## License

This project is intended for educational purposes only and is not affiliated with or endorsed by Instagram or Meta Platforms, Inc.

```

<<<<<<< HEAD

=======
>>>>>>> 9bc5cc4 (Updates)
