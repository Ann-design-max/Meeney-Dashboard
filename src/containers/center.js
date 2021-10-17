import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import UserCard from '../components/user card/user card';
import PostCard from '../components/postcard';


export default function CenterStack() {
  return (
    <div>
      <Stack spacing={2}>
       <UserCard/>
       <PostCard/>
      </Stack>
    </div>
  );
}
