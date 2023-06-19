export async function loader({ params }) {
    const appointment = await fetch(
      `http://localhost:3000/appointments/${params.id}`
    ).then((res) => res.json());
  
    return { appointment };
  }