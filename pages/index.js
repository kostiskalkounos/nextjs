// domain-name.com/

import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // The data is fetched initially before the page is pre-rendered, during the build process.
  // It is not fetched in a second component render cycle on the client, like it normally
  // This is better since it caches and reuses data, hence it is more eficient and faster

  const client = await MongoClient.connect(
    "mongodb+srv://kostis:kostis@cluster0.zhrlh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    // these are the props the HomePage receives
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
    // Incremental Static Generation:
    // Regenerates the page for incoming requests
    // This is the number of seconds it will wait before doing so
    revalidate: 1,
  };
};

/*
  export const getServerSideProps = async (context) => {
  // This function runs after incoming request on the server
  // It should be ussed instead of `getStaticProps` if we need access to the request
  // and response objects or if we have data that changes multiple times every second

  const req = context.req;
  const res = context.res;

  // feath data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};
*/

export default HomePage;
