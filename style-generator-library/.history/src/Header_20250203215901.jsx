import logo from '/logo.jpg'
import './App.css'

export default function Header() {
    // const [count, setCount] = useState(0)

    return (
        <header className="flex justify-center items-center h-12 py-8 bg-indigo-50 border-b-sky-200">
            <a href="/" className="mr-4">
                <img src={logo} className="w-12 rounded-[50%]" alt="logo" />
            </a>
            <h4 className="font-rubik text-3xl">Générateur de bibliothèques de styles</h4>
        </header>
    )
}

