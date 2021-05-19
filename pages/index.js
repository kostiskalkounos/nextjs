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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
