const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div>
                <h1>
                    <strong>Dojo Blog</strong>
                </h1>
            </div>
            
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;