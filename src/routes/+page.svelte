<script>
    // keine Logik notwendig
  </script>
  
  <!-- Star Wars Startseite -->
  <div class="startscreen">
    <div class="overlay">
      <h1 class="title">Star Wars Universe</h1>
  
      <div class="button-group">
        <a href="/characters" class="btn">Charaktere</a>
        <a href="/spaceships" class="btn">Raumschiffe</a>
        <a href="/planets" class="btn">Planeten</a>
        
      </div>
    </div>
  </div>
  
  <style>
    .startscreen {
      background-image: url("https://i.pinimg.com/736x/64/cc/45/64cc45cb070e52724753a0645c2adc6d.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .overlay {
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6); /* optional: für bessere Lesbarkeit */
      padding: 2rem;
      border-radius: 12px;
    }
  
    .title {
      font-size: 3rem;
      color: #ffe81f;
      margin-bottom: 2rem;
      font-family: "Pathway Gothic One", sans-serif;
    }
  
    .button-group {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
  
    .btn {
      background-color: #ffe81f;
      color: black;
      padding: 1rem 2rem;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.2rem;
      border-radius: 8px;
      transition: transform 0.2s, background-color 0.2s;
    }
  
    .btn:hover {
      background-color: #fff56b;
      transform: scale(1.05);
    }
  </style>
  