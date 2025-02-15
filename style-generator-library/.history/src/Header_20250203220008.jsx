import logo from '/logo.jpg'
import './App.css'

export default function Header() {
    // const [count, setCount] = useState(0)

    return (
        <header className="h-12 py-8 bg-indigo-50 border-b-sky-200">
            <a href="/" className="flex justify-center items-center">
                <img src={logo} className="w-12 rounded-[50%]" alt="logo" />
                <h4 className="font-rubik text-3xl">Générateur de bibliothèques de styles</h4>
            </a>
        </header>
    )
}

