//Components
import NavHeader from './headerNav/NavHeader'

const Header = () => {
    return (
        <header className="h-[7vh] bg-violet-950 border-b border-violet-600 p-8 flex items-center justify-end md:h-[10vh]">
            <NavHeader />
        </header>
    );

};
export default Header;