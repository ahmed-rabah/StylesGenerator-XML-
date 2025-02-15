import logo from '/logo.jpg'
import './App.css'

export default function Header() {
    // const [count, setCount] = useState(0)

    return (
        <header className="flex justify-center items-center h-12 py-8 bg-red-200">
            <a href="/">
                <img src={logo} className="w-12 rounded-[50%]" alt="logo" />
            </a>
            <h4 className="font-rubik-900">Générateur de bibliothèques de styles</h4>
        </header>
    )
}

