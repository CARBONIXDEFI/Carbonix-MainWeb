import React from 'react';
import Layout from './Layout';

// components
import Banner from './snippets/Banner'
import Addresses from './snippets/BlackAddresses'
import About from './snippets/AboutBlack'
import Feature from './snippets/Features'
// import CompetitiveAnalysis from './snippets/CompetitiveAnalysis'
import Roadmap from './snippets/Roadmap'
import ProtocolsDynamics from './snippets/ProtocolsDynamics'

function HomePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Layout>
            <Banner />
            <About />
            <Feature />
            <Addresses />
            {/* <CompetitiveAnalysis /> */}
            <Roadmap />
            <ProtocolsDynamics />
        </Layout>
    );
}

export default HomePage;