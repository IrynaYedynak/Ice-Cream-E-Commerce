import '../index.css'
import MainSection from '../components/Home/MainSection';
import ArtSection from '../components/Home/ArtSection';
import ArtisanFlavors from '../components/Home/ArtisanFlavors';
import SpecialOffer from '../components/Home/SpecialOffer';
import CustomerFeedback from '../components/Home/FeedbackSection';
import SubscribeSection from '../components/Home/SubscribeSection';
import FollowSection from '../components/Home/FollowSection';

function Home() {
    return (
        <>
        <MainSection />
        <ArtSection />
        <ArtisanFlavors />
        <SpecialOffer />
        <CustomerFeedback />
        <SubscribeSection />
        <FollowSection />
        </>
    )
}

export default Home