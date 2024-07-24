'use client'

const PropertyPage = () => {
  return (
    <div>PropertyPage</div>
  )
}

export default PropertyPage

// import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'

// const PropertyPage = () => {

//   const router = useRouter();
//   const { id } = useParams();
//   const searchParams = useSearchParams();
//   const name = searchParams.get('name');
//   const pathName = usePathname();

//   return (
//     <div>
//       <button onClick={() => router.push('/')} className='bg-blue-500 p-2'>
//         Go Home {id} {name} {pathName}
//       </button>
//     </div>
//   )
// }
