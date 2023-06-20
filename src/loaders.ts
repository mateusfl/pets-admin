export async function loader({ params }) {
    const appointment = await fetch(
      `http://127.0.0.1:8090/api/collections/appointments/records/${params.id}`
    ).then((res) => res.json());
  
    return { appointment };
  }