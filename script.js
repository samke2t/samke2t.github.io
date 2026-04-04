* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background: #f7f8fc;
  color: #222;
}

.hero {
  background: linear-gradient(135deg, #dfe9f3, #ffffff);
  padding-bottom: 40px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: white;
  border-bottom: 1px solid #e5e5e5;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.hero-content {
  max-width: 800px;
  margin: 60px auto;
  text-align: center;
  padding: 0 20px;
}

.tag {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}

.hero-content h2 {
  font-size: 42px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 20px;
}

button {
  padding: 12px 24px;
  border: none;
  background: #4f46e5;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  opacity: 0.9;
}

main {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

.card h3 {
  margin-bottom: 16px;
  font-size: 28px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.mini-card {
  background: #eef2ff;
  padding: 20px;
  border-radius: 12px;
}

footer {
  text-align: center;
  padding: 30px 20px;
  color: #666;
}
