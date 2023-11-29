
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'A First Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Albertville_place_de_l%27Europe.JPG/1280px-Albertville_place_de_l%27Europe.JPG',
        address:'Some address 5, 12345 some city',
        description:'This is first meetup'
    },
    {
        id:'m2',
        title:'A Second Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sparkasse%2C_Wangen_im_Allg%C3%A4u%2C_6._Jan._2018.jpg/1920px-Sparkasse%2C_Wangen_im_Allg%C3%A4u%2C_6._Jan._2018.jpg',
        address:'Some address 10, 6789 some city',
        description:'This is second meetup'
    }
]

const HomePage = () => {
  return (
  
    <MeetupList meetups={DUMMY_MEETUPS} />
  )
}

export default HomePage
