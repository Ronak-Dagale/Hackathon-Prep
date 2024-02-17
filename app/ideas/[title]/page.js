"use client"
import { useRouter } from 'next/navigation';
import axios from 'axios';



const IdeaPage = async ({ params }) => {
  const router = useRouter();
  //const { title } = router.query || {};
  //const data=await getData(params.title)
  const title =params.title;


  // Check if id is defined before rendering
  return <div>Idea ID: {title}</div>;
};
export default IdeaPage;

