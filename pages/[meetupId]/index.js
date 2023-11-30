import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"


const MeetupDetails = () => {
  return (<MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Albertville_place_de_l%27Europe.JPG/1280px-Albertville_place_de_l%27Europe.JPG"
    title="A First Meetup"
    address="Some street 5, some city"
    description="The meetup description"
    />
  )
}

export async function getStaticPaths(){
  return{
    fallback:false,
    paths:[
      {
        params:{
          meetupId:'m1',
        }
      },
      {
        params:{
          meetupId:'m2',
        }
      },
      {
        params:{
          meetupId:'m3',
        }
      }
    ]
  }
}

export async function getStaticProps(context){
  const meetupId = context.params.meetupId;
  return{
    props:{
      meetupData:{
        id: meetupId,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Albertville_place_de_l%27Europe.JPG/1280px-Albertville_place_de_l%27Europe.JPG",
    title:"A First Meetup",
    address:"Some street 5, some city",
    description:"The meetup description",
      }
    }
  }
}

export default MeetupDetails
