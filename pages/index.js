
import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';


const HomePage = (props) => {
 

  return (
  
    <MeetupList meetups={props.meetups} />
  )
}

// export async function getServerSideProps(context){
//   const req= context.req;
//   const res = context.res;

//fetch data from API

//   return{
//     props:{
//       meetups:DUMMY_MEETUPS
//     },
//   }
// }

export async function getStaticProps(){
  const client =await MongoClient.connect('mongodb+srv://elnino:bitwcr7@cluster0.oafqt3b.mongodb.net/meetups');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return{
    props:{
      meetups:meetups.map(meetup =>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString()
      }

      ))
    },
    revalidate: 1
  }
}

export default HomePage
