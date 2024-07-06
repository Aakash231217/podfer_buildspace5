import React from 'react';
import { Button } from '@/components/ui/button';
import { podcastData } from '@/constants';
import PodcastCard from '@/components/PodcastCard'; // Ensure this import is correct

const Home = () => {
  return (
    <div className='relative flex flex-col'>
      <section className='relative flex bg-black'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className='podcast_grid'>
        {podcastData.map(({id,title,description,imgURL}) => (
          <PodcastCard
           key={id} 
            imgUrl={imgURL}
            title={title}
            description={description}
            podcastId={id}
          />
        ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
