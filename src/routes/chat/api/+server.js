import { OPENAI_API_KEY } from '$env/static/private';

export async function GET({ url }) {
  const question = url.searchParams.get('question');

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: question }]
      })
    });

    const json = await res.json();
    const reply = json.choices?.[0]?.message?.content ?? 'Keine Antwort erhalten.';

    return new Response(JSON.stringify({ answer: reply }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ answer: 'Fehler bei der API.' }), {
      status: 500
    });
  }
}
