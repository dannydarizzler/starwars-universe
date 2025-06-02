<nav>
  <a href="/" style="margin-right: 1rem;">Home</a>
  <a href="/characters" style="margin-right: 1rem;">Charaktere</a>
  <a href="/planets" style="margin-right: 1rem;">Planeten</a>
  <a href="/spaceships">Raumschiffe</a>
  <a href="/chat">Star wars Chatbot 🤖</a>
</nav>

  
  <slot />
  
  <style>
    :global(body) {
  background-color: black;
  margin: 0;
  color: #ffe81f;
  font-family: "Pathway Gothic One", sans-serif;
}

    nav {
      margin-right: 1rem;
      background-color: black;
      padding: 1rem 2rem;
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: flex-start;
      box-shadow: 0 0 10px #ffe81f;
      font-family: "Pathway Gothic One", sans-serif;
      position: sticky;
      top: 0;
      z-index: 999;
    }
  
    nav a {
      color: #ffe81f;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      position: relative;
    }
  
    nav a::after {
      content: '';
      display: block;
      height: 2px;
      background: #ffe81f;
      width: 0;
      transition: width 0.3s ease-in-out;
      position: absolute;
      bottom: -4px;
      left: 0;
    }
  
    nav a:hover::after {
      width: 100%;
    }
  
    nav a:hover {
      color: #fff56b;
    }
  </style>
  