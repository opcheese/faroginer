'use client'
export default function Error({ error }) {
    console.error("!!!An error occurred:", error); // Log the error
  
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </div>
    );
  }