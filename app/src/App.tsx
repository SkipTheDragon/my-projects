import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import {FooterElement as Footer} from "./components/Footer.tsx";
import Alert from "./components/Alert.tsx";
import Loading from "./components/Loading.tsx";
import {Suspense} from "react";

function App() {

    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Alert/>
                <Hero/>
                <Projects/>
                <Footer/>
            </Suspense>
        </>
    )
}

export default App
