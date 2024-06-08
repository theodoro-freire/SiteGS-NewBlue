// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// const ShipDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [navio, setNavio] = useState(null);

//   useEffect(() => {
//     const fetchNavio = async () => {
//       if (id) {
//         const response = await fetch(`/api/ship/${id}`);
//         const data = await response.json();
//         setNavio(data);
//       }
//     };

//     fetchNavio();
//   }, [id]);

//   if (!navio) return <div>Carregando...</div>;

//   return (
//     <div>
//       <h1>{navio.nome}</h1>
//       <p>{navio.descricao}</p>
//     </div>
//   );
// };

// export default ShipDetails;
