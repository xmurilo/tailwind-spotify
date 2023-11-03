import { HomeIcon, Library, Search } from 'lucide-react';

export function SideBar() {
  const navItems = [
    {
      id: 1,
      name: 'Home',
      icon: <HomeIcon />,
    },
    {
      id: 2,
      name: 'Search',
      icon: <Search />,
    },
    {
      id: 3,
      name: 'Your Library',
      icon: <Library />,
    },
  ];

  const listNavItems = navItems.map(navItem => (
    <a
      key={navItem.id}
      href=''
      className='flex items-center gap-3 text-sm font-semibold text-zinc-200'
    >
      {navItem.icon}
      {navItem.name}
    </a>
  ));
  
  const playlists = [
    {
      id: 1,
      name: 'Playlist 1',
    },
    {
      id: 2,
      name: 'Playlist 2',
    },
    {
      id: 3,
      name: 'Playlist 3',
    },
    {
      id: 4,
      name: 'Playlist 4',
    },
  ];

  const listPlaylist = playlists.map(playlists => (
    <a key={playlists.id} href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
      {playlists.name}
    </a>
  ));

  return (
    <aside className='w-72 bg-zinc-950 p-6'>
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full' />
        <div className='w-3 h-3 bg-yellow-500 rounded-full' />
        <div className='w-3 h-3 bg-green-500 rounded-full' />
      </div>

      <nav className='space-y-5 mt-5'>{listNavItems}</nav>

      <nav className='mt-6 pt-5 border-t border-zinc-800 flex flex-col gap-2'>{listPlaylist}</nav>
    </aside>
  );
}
