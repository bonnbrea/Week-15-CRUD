import React, { useState } from 'react';
import SocialPages from './SocialPage';
import AddPosts from './AddPost';

let initialPosts = [
  {
    image:'https://www.tripsavvy.com/thmb/3GNia7YOjldLvgh1sYp5uO7omJg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-504887110-3d64eb05dd3d4036a11e819844608e3a.jpg',
    name: 'Bella Smith',
    post: 'Just got home from our vacation in the Bahamas! Had so much fun, but excited to be back home with our two dogs.',
     
  },
  {
      image:'https://www.theplancollection.com/Upload/Designers/161/1145/Plan1611145Image_8_3_2021_738_1_891_593.jpg',
      name: 'John Smith',
      post: 'Hey everyone! Please remember to comment if you want to attend the family reunion next month. We will all be staying in this airbnb house in texas. Hope to see everyone there!',
     
  },
  {
      image:'https://ridgetimes.co.za/wp-content/uploads/sites/94/2020/12/Baby-walking-780x470.jpg',
      name: 'Hannah Rodgers (Smith)',
      post: 'Little Ella took her first steps today!',
  },
  {
      image:'https://content.instructables.com/FLM/E92N/H4VQKHP9/FLME92NH4VQKHP9.jpg?auto=webp',
      name: 'Adam Rodgers',
      post: 'Heading to dinner at 6 tonight if anyone wants to join me and @Hannah Rodgers',   
    }


];





function Start() {
  let [posts, setPosts] = useState(initialPosts);
  return (
  <div>
    <h1 className='text'>💗Welcome to the Smith family sharing page💗</h1>
    <br>
    </br>
    <i><h3 className='center'>Whether it's a small day-to-day update or a big life event, use this page to stay connected</h3></i>
    <br>
    </br>
      <SocialPages posts={posts} setPosts={setPosts} />
      <br>
      </br>
      <AddPosts setPosts={setPosts} />
    </div>
  );
}

export default Start;