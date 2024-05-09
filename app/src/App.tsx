import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import {FooterElement as Footer} from "./components/Footer.tsx";
import Alert from "./components/Alert.tsx";

function App() {

    return (
        <>
            <Alert/>
            <Hero/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default App
