import Events from "./Events";
import PropTypes from 'prop-types';

const OurPopularEvent = ({services}) => {
    return (
        <div className="max-w-screen-xl mx-auto mt-20">
            <h1 className="title1 text-center lg:text-4xl 3xl md:4xl font-bold mt-20 uppercase">Our Popular Events</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 justify-items-center">
                {
                    services.map(events=> <Events key={events.id} events={events}></Events>)
                }
            </div>
        </div>
    );
};
OurPopularEvent.propTypes={
    services:PropTypes.object
}
export default OurPopularEvent;