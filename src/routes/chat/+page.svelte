<script>
    import { onMount } from 'svelte';
    let userInput = '';
    let response = '';
    let loading = false;
  
    async function askChatGPT() {
      loading = true;
      const res = await fetch(`/chat/api?question=${encodeURIComponent(userInput)}`);
      const data = await res.json();
      response = data.answer;
      loading = false;
    }
  </script>
  
  <input bind:value={userInput} placeholder="Frag mich etwas ..." />
  <button on:click={askChatGPT}>Senden</button>
  
  {#if loading}
    <p>Antwort wird geladen…</p>
  {:else if response}
    <div style="margin-top: 1rem; background: #222; padding: 1rem; border: 1px solid #ffe81f; color: #ffe81f;">
      <strong>Antwort von Star wars Chatbot:</strong>
      <p>{response}</p>
    </div>
  {/if}
  
  