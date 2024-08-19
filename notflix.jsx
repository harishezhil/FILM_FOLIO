export default function Widget() {
    return (
        <div className="bg-background text-foreground">
            
            <nav className="flex justify-between items-center p-4">
                <img src="https://placehold.co/100" alt="Netflix Logo" className="h-8" />
                <div className="flex space-x-4">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">TV Shows</a>
                    <a href="#" className="hover:underline">Movies</a>
                    <a href="#" className="hover:underline">My List</a>
                </div>
            </nav>
        
        <div className="relative h-screen flex items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">Watch Unlimited Movies & TV Shows</h1>
                <p className="text-lg mb-6">Join us today and enjoy all the entertainment you want!</p>
                <div className="flex space-x-4">
                    <button className="bg-primary text-primary-foreground py-2 px-4 rounded-lg">Sign Up</button>
                    <button className="bg-secondary text-secondary-foreground py-2 px-4 rounded-lg">Learn More</button>
                </div>
            </div>
        </div>
        
        
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Featured Movies & TV Shows</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="bg-card p-4 rounded-lg">
                    <img src="https://openui.fly.dev/openui/300x450.svg?text=Movie+1" alt="Movie 1" className="mb-2" />
                    <h3 className="text-lg font-bold mb-1">Movie 1</h3>
                    <p className="text-sm text-muted-foreground">Description of Movie 1</p>
                </div>
                
                <div className="bg-card p-4 rounded-lg">
                    <img src="https://openui.fly.dev/openui/300x450.svg?text=Movie+2" alt="Movie 2" className="mb-2" />
                    <h3 className="text-lg font-bold mb-1">Movie 2</h3>
                    <p className="text-sm text-muted-foreground">Description of Movie 2</p>
                </div>
                
                <div className="bg-card p-4 rounded-lg">
                    <img src="https://openui.fly.dev/openui/300x450.svg?text=Movie+3" alt="Movie 3" className="mb-2" />
                    <h3 className="text-lg font-bold mb-1">Movie 3</h3>
                    <p className="text-sm text-muted-foreground">Description of Movie 3</p>
                </div>
                
                <div className="bg-card p-4 rounded-lg">
                    <img src="https://openui.fly.dev/openui/300x450.svg?text=Movie+4" alt="Movie 4" className="mb-2" />
                    <h3 className="text-lg font-bold mb-1">Movie 4</h3>
                    <p className="text-sm text-muted-foreground">Description of Movie 4</p>
                </div>
            </div>
        </div>
        
        
        <footer className="bg-footer text-footer-foreground text-center py-4">
            <p>&copy; 2022 Netflix-Like. All Rights Reserved.</p>
        </footer>
        </div>
    )
}