import Navbar from "./Navbar";

const Page = ({children}) => {
    return ( 
        <main>
            <Navbar/>
            {children}
        </main>
     );
}
 
export default Page;