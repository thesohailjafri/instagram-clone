import React, { useEffect, useState } from 'react'
import Story from './mini-components/Story'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

let fakefriends = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/200?img=%24{1}`}',
    name: 'Norma',
    username: 'norma_treutel14',
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/200?img=%2{2}`}',
    name: 'Stuart',
    username: 'stuart.harvey',
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/200?img=%3{2}`}',
    name: 'Daniella',
    username: 'daniella.abshire38',
  },
  {
    id: 4,
    avatar: 'https://i.pravatar.cc/200?img=%4{2}`}',
    name: 'Kendall',
    username: 'kendall54',
  },
  {
    id: 5,
    avatar: 'https://i.pravatar.cc/200?img=%5{2}`}',
    name: 'Zetta',
    username: 'zetta37',
  },
  {
    id: 6,
    avatar: 'https://i.pravatar.cc/200?img=%6{2}`}',
    name: 'Derrick',
    username: 'derrick_bednar83',
  },
  {
    id: 7,
    avatar: 'https://i.pravatar.cc/200?img=%7{2}`}',
    name: 'Maximillia',
    username: 'maximillia.reilly',
  },
  {
    id: 8,
    avatar: 'https://i.pravatar.cc/200?img=%8{2}`}',
    name: 'Adalberto',
    username: 'adalberto_trantow',
  },
  {
    id: 9,
    avatar: 'https://i.pravatar.cc/200?img=%9{2}`}',
    name: 'Kenna',
    username: 'kenna.yost200',
  },
  {
    id: 10,
    avatar: 'https://i.pravatar.cc/200?img=%24{10}`}',
    name: 'Dovie',
    username: 'dovie.corkery',
  },
  {
    id: 11,
    avatar: 'https://i.pravatar.cc/200?img=%24{11}`}',
    name: 'Dora',
    username: 'dora63',
  },
  {
    id: 12,
    avatar: 'https://i.pravatar.cc/200?img=%24{12}`}',
    name: 'Mavis',
    username: 'mavis57',
  },
  {
    id: 13,
    avatar: 'https://i.pravatar.cc/200?img=%24{13}`}',
    name: 'Dino',
    username: 'dino75',
  },
  {
    id: 14,
    avatar: 'https://i.pravatar.cc/200?img=%24{14}`}',
    name: 'Kenna',
    username: 'kenna.Waelchi',
  },
  {
    id: 15,
    avatar: 'https://i.pravatar.cc/200?img=%24{15}`}',
    name: 'Jay',
    username: 'jay22',
  },
  {
    id: 16,
    avatar: 'https://i.pravatar.cc/200?img=%24{16}`}',
    name: 'Rachael',
    username: 'rachael33',
  },
  {
    id: 17,
    avatar: 'https://i.pravatar.cc/200?img=%24{17}`}',
    name: 'Cleveland',
    username: 'cleveland.schowalter80',
  },
  {
    id: 18,
    avatar: 'https://i.pravatar.cc/200?img=%24{18}`}',
    name: 'Harold',
    username: 'harold_mosciski74',
  },
  {
    id: 19,
    avatar: 'https://i.pravatar.cc/200?img=%24{19}`}',
    name: 'Elizabeth',
    username: 'elizabeth56',
  },
  {
    id: 20,
    avatar: 'https://i.pravatar.cc/200?img=%24{20}`}',
    name: 'Beryl',
    username: 'beryl96',
  },
  {
    id: 21,
    avatar: 'https://i.pravatar.cc/200?img=%24{21}`}',
    name: 'Riya',
    username: 'riya.Kuhic',
  },
  {
    id: 22,
    avatar: 'https://i.pravatar.cc/200?img=%24{22}`}',
    name: 'Joie',
    username: 'joie_kuhic',
  },
  {
    id: 23,
    avatar: 'https://i.pravatar.cc/200?img=%24{23}`}',
    name: 'Cleveland',
    username: 'cleveland.Schowalter80',
  },
  {
    id: 24,
    avatar: 'https://i.pravatar.cc/200?img=%24{24}`}',
    name: 'Harold',
    username: 'harold_mosciski74',
  },
  {
    id: 25,
    avatar: 'https://i.pravatar.cc/200?img=%24{25}`}',
    name: 'Elizabeth',
    username: 'elizabeth56',
  },
  {
    id: 26,
    avatar: 'https://i.pravatar.cc/200?img=%24{26}`}',
    name: 'Beryl',
    username: 'beryl96',
  },
  {
    id: 27,
    avatar: 'https://i.pravatar.cc/200?img=%24{27}`}',
    name: 'Stacy',
    username: 'stacy.kuhic',
  },
  {
    id: 28,
    avatar: 'https://i.pravatar.cc/200?img=%24{28}`}',
    name: 'Rachael',
    username: 'rachael33',
  },
  {
    id: 29,
    avatar: 'https://i.pravatar.cc/200?img=%24{29}`}',
    name: 'Cleveland',
    username: 'cleveland.schowalter80',
  },
  {
    id: 30,
    avatar: 'https://i.pravatar.cc/200?img=%24{30}`}',
    name: 'Joy',
    username: 'joy_mosciski',
  },
]

export default function Stories() {
  const [users, setUsers] = useState(fakefriends)

  const storiesScrollLeft = () => {
    if (typeof document === 'undefined') return
    const stories = document.getElementById('stories')
    stories.scrollLeft -= window.innerWidth / 2
  }

  const storiesScrollRight = () => {
    if (typeof document === 'undefined') return
    const stories = document.getElementById('stories')
    stories.scrollLeft += window.innerWidth / 2
  }

  return (
    <div className="relative w-full overflow-hidden bg-white py-4 border border-gray-200 rounded-sm max-w-2xl mx-auto mb-6">
      <i
        id="scroll-left"
        className="hidden md:inline-grid absolute top-0 left-0 transform translate-y-10 h-6 w-6 bg-white rounded-full  place-items-center text-gray-500 shadow-lg mx-4 cursor-pointer"
        onClick={() => storiesScrollLeft()}
      >
        <ChevronLeftIcon className="btn-sm" />
      </i>
      <ul
        id="stories"
        className="flex items-center overflow-x-scroll gap-x-3  scrollbar-hide first-of-type:pl-3 scroll-smooth "
      >
        {users.map((user) => {
          return <Story key={user.id} user={user} />
        })}
      </ul>
      <i
        id="scroll-right"
        className="hidden md:inline-grid absolute top-0 right-0 transform translate-y-10 h-6 w-6 bg-white rounded-full  place-items-center text-gray-500 shadow-lg mx-4 cursor-pointer"
        onClick={() => storiesScrollRight()}
      >
        <ChevronRightIcon className=" btn-sm" />
      </i>
    </div>
  )
}
