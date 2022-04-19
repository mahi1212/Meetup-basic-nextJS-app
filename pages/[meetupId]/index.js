import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetUpId() {
  return (
    <div>
      <MeetupDetail 
        image="https://woocommerce.com/wp-content/themes/woo/images/wc-meetups/host-meetup.jpg"
        title="A Third Meetup"
        address="A Sylhet, Shahi Eidgah"
        description="This is our third meetup"
      />        
    </div>
  )
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context){
  const meetupId = context.params.meetupId
  console.log(meetupId)

  return{
    props:{
      meetupData:{
        image:"https://woocommerce.com/wp-content/themes/woo/images/wc-meetups/host-meetup.jpg",
        id: meetupId,
        title:"A Third Meetup",
        address:"A Sylhet, Shahi Eidgah",
        description:"This is our third meetup"
      }
    }
  }
}


export default MeetUpId;
