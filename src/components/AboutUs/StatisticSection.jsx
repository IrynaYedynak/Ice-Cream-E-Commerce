import CountUp from 'react-countup'; //бібліотека відліку від 0 до end
import { useInView } from 'react-intersection-observer'; // хук який визначає чи видно елементи на екрані
import './StatisticSection.css';

const stats = [
    { end: 91, label: 'Awards Win', suffix: '+' },
    { end: 95, label: 'Satisfied Clients', suffix: '%' },  
    { end: 48, label: 'Years of Experience', suffix: '+' },
    { end: 143, label: 'Employees Working', suffix: '+' },
];

    function StatisticsSection() {
    return (
    <section className="statistics-section">
        <h2><span>Our </span><span className="highlight">Statistics</span></h2>
        <p>What makes us special through our impressive statistics.</p>
        <div className="cards-container">
        {stats.map((stat, index) => (
            <StatisticsCard key={index} {...stat} />
        ))}
        </div>
    </section>
    );
}

function StatisticsCard({ end, label, suffix }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
    <div className="card" ref={ref}>
        <h2>
            {inView && <CountUp end={end} duration={3} />}
            <span className="suffix">{suffix}</span>
        </h2>
        <p>{label}</p>
    </div>
    );
}
export default StatisticsSection
