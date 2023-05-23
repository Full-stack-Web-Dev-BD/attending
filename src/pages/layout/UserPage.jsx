import UserNavbar from "./UserNavbar";

const UserPage = ({children}) => {
    return (  <main>
        <UserNavbar/>
        {children}
    </main> );
}
 
export default UserPage;