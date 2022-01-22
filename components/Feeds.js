import React, { useEffect, useState } from 'react'
import Feed from './mini-components/Feed'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

export default function Feeds() {
  const [feeds, setFeeds] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => setFeeds(snapshot.docs),
      ),
    [],
  )

  return (
    <div className="grid grid-cols-1 gap-y-4 md:gap-y-6 max-w-2xl mx-auto">
      {feeds.map((feed) => (
        <Feed key={feed.id} data={feed} />
      ))}
    </div>
  )
}
