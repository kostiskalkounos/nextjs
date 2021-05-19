// domain-name.com/

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg",
    address: "Acropolis, Athens, Greece",
    description: "This is the first meetup in Acropolis!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Erechtheum_Acropolis_Athens.jpg/2880px-Erechtheum_Acropolis_Athens.jpg",
    address: "Erechtheum in Acropolis, Athens, Greece",
    description: "This is the second meetup in Erechtheum in Acropolis!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // The data is fetched initially before the page is pre-rendered during the build process.
  // It is not fetched in a second component render cycle on the client, like it normally

  return {
    // these are the props the HomePage receives
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default HomePage;
