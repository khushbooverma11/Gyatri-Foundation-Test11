import React, { useState } from 'react';

function MessageSender() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    setIsLoading(true);
    setError(null);
    setResponse('');

    try {
      // The endpoint on your backend. Replace '/messages' with your actual path.
      const API_URL = 'http://localhost:8085/api/response';

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send the message content in the request body
        body: JSON.stringify({ text: message }),
      });

      if (!res.ok) {
        // Handle HTTP errors like 404 or 500
        const errorText = await res.text();
        throw new Error(`HTTP error! Status: ${res.status}, Body: ${errorText}`);
      }

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2)); // Display formatted JSON response
      console.log("sent messgae")

    } catch (e) {
      console.error('Error sending message:', e);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Send a Message to the Backend</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message here"
        rows="4"
        cols="50"
        disabled={isLoading}
      />
      <br />
      <button onClick={handleSendMessage} disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>

      {response && <div><h3>Response from server:</h3><pre>{response}</pre></div>}
      {error && <div><h3>Error:</h3><p style={{ color: 'red' }}>{error}</p></div>}
    </div>
  );
}

export default MessageSender;

