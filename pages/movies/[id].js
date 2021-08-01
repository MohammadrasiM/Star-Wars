export default function movies({ movie }) {
  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params.id);

  const stream = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=70ce45fdad1824ccc3dad6c68ef34779&language=en-US`
  );
  const data = await stream.json();
  console.log(data);
  return { props: { movie: data } };
}
