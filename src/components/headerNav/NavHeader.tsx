

function NavHeader() {  

    
    

    return (
        <nav className="w-full flex justify-between ">
            <div className="flex flex-col text-white">
                <span className="text-lg md:text-xl lg:text-2xl">bekind</span>
                <span className="text-sm lg:text-lg">network</span>
            </div>
            <div>
                <p className="w-8 h-8 border-none bg-amber-300 flex justify-center items-center font-bold rounded-full ">A</p>
            </div>          
            
            
        </nav>        
    );    
}
export default NavHeader;