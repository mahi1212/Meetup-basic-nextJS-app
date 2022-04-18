import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg',
        address: 'A firmagate, 32/1',
        description : 'This is our first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-T6Xhwfkt/w:auto/h:auto/q:auto/https://technation.io/wp-content/uploads/2020/03/meetups-north-west.jpg',
        address: 'B/1 Asia Specific Area',
        description : 'This is our second meetup'
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://woocommerce.com/wp-content/themes/woo/images/wc-meetups/host-meetup.jpg',
        address: 'A Sylhet, Shahi Eidgah',
        description : 'This is our third meetup'
    }
]

const HomePage = () => {
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(()=>{
        // send request and then fetch data
        setLoadedMeetups(DUMMY_MEETUPS)
    } ,[])

    return (
        <div>
            <MeetupList meetups={loadedMeetups}></MeetupList>
        </div>
    );
};

export default HomePage;