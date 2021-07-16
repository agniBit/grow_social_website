import React from "react"
import Navbar from "../../navbar/navigationBar"
import ContactUS from "./components/contactUs"
import DownloadApp from "./components/downLoadApp"
import Footer from "./components/footer"
import MainBanner from "./components/mainBanner"
import Steps from "./components/stepsToProceed"
import WhyUs from "./components/why"

function HomePage() {
    return(
        <div>
            <Navbar />
            <MainBanner />
            <Steps />
            <WhyUs />
            <DownloadApp />
            <ContactUS />
            <Footer />
        </div>
    )
}

export default HomePage;