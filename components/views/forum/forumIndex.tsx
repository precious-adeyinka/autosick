import React from 'react';

// components
import NavIndex from '@/components/globals/nav/navIndex';

interface forumIndexPropsI {}

const ForumIndex: React.FC<forumIndexPropsI> = ({}) => {
  return (
    <div className='h-screen w-full bg-white px-16'>
      {/* Nav Menu */}
      <NavIndex />
      <h1 className='text-9xl font-medium text-center'>ForumIndex</h1>
    </div>
  )
}

export default ForumIndex;