import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg"
      title="First Meetup"
      address="Some address"
      description="This is a first meetup"
    />
  );
};

export const getStaticProps = async (context) => {
  // context holds a params object as key

  // meetupId comes from [meetupId].js and the values are the values encoded in the url
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: DUMMY_MEETUPS,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg",
      id: meetupId,
      title: "First Meetup",
      address: "Some address",
      description: "This is a first meetup",
    },
    revalidate: 1,
  };
};

export default MeetupDetails;
