"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { podcastData } from '@/constants';
import PodcastCard from '@/components/PodcastCard'; // Ensure this import is correct
import { useQuery } from 'convex/react';
import { api } from "@/convex/_generated/api.js";

const Home = () => {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className='relative flex flex-col'>
      <section className='relative flex bg-black'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </main>
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
