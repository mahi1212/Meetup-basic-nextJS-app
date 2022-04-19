import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList'

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A first Meetup',
//         image: 'https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg',
//         address: 'A firmagate, 32/1',
//         description: 'This is our first meetup'
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: 'https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-T6Xhwfkt/w:auto/h:auto/q:auto/https://technation.io/wp-content/uploads/2020/03/meetups-north-west.jpg',
//         address: 'B/1 Asia Specific Area',
//         description: 'This is our second meetup'
//     },
//     {
//         id: 'm3',
//         title: 'A Third Meetup',
//         image: 'https://woocommerce.com/wp-content/themes/woo/images/wc-meetups/host-meetup.jpg',
//         address: 'A Sylhet, Shahi Eidgah',
//         description: 'This is our third meetup'
//     }
// ]

const HomePage = (props) => {
    return (
        <div>
            <MeetupList meetups={props.meetups}></MeetupList>
        </div>
    );
};

// this getServerSideProps is used when our data could be changed withing sometimes
// it will be best use for that point of view. More preferable depending on req & res
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     // here we can fetch from any API and return an object
//     return {
//         props : {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

// This function execute during npm run build command
// We will use getStaticProps() cause here no req and res will occur
export async function getStaticProps() {
    // fetch data and return an object here
    const client = await MongoClient.connect('mongodb+srv://meetupAdmin:KgBeVHfXJAfR9yns@cluster0.tecyb.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()
    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage;