import Image from "next/image";
import localFont from "next/font/local";
// import Navbar from "./components/Navbar";
import Card from "./components/Card";



import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-5">

        {/* <Navbar />  */}
        <Card /> 
      </div>
    </QueryClientProvider>
  );
}
