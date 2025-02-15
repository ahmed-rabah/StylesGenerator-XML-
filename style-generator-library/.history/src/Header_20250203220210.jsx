import logo from '/logo.jpg'
import './App.css'

export default function Header() {
    // const [count, setCount] = useState(0)

    return (
        <header className="py-8 bg-indigo-50 border-b-sky-200">
            <a href="/" className="flex justify-center items-center h-12 p-0">
                <img src={logo} className="w-12 rounded-[50%]  mr-4" alt="logo" />
                <h4 className="font-rubik text-3xl p-0">Générateur de bibliothèques de styles</h4>
            </a>
        </header>
    )
}

