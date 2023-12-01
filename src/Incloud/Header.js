import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <h1>The<br/>Festa</h1>
            </div>
            <div className='header_menu'>
                <p>축제</p>
                <p>스케줄러</p>
                <p>톡톡</p>
            </div>
            <div className='header_member'>
                <p>Login</p>
                <p>Join</p>
            </div>
        </div>
    );
}

export default Header;