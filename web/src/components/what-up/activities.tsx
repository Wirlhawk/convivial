import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import ActivitiesCard from './activities-card';

export default function 
() {
  return (
      <div>
          <ActivitiesCard
              title="THIS IS HEADLINE"
              description="Øredev's program is designed to drive the kinds of serendipitous encounters conducive to creating collaborations, building communities, and establishing friendships! Leave the distractions of your screen behind, get energised by meeting new people and enjoy the diversity of viewpoints and cultures. Get invigorated by the mixing of minds and build long lasting connections."
              color="bg-accent"
          />
      </div>
  );
}
