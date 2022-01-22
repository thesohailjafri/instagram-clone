import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import {
  HeartIcon,
  ChatAltIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

import { useSession } from 'next-auth/react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../../firebase'
import Comment from './Comment'

export default function Feed({ data }) {
  const { data: session } = useSession()
  const { username, image, caption, profileImage } = data.data()
  const { id } = data
  // const placeholderAry = [
  //   'Add a comment',
  //   'Say something nice',
  //   'Say what do you think about this post',
  //   'Type of your reaction',
  //   'Send some 😎😪😍🤔😂😲',
  //   'Say what you feel about this post',
  // ]

  const [comment, setComment] = useState('')

  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)
  const [comments, setComments] = useState([])
  // const [placeholderText, setPlaceholderText] = useState(() => {
  //   const i = Math.floor(Math.random() * placeholderAry.length)
  //   return placeholderAry[i]
  // })

  const onCommentSubmit = async (e) => {
    e.preventDefault()
    const commentcopy = comment
    setComment('')
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentcopy,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  const likePost = async (e) => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session?.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session?.user.uid), {
        username: session.user.username,
      })
    }
  }

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc'),
        ),
        (snapshot) => setComments(snapshot.docs),
      ),
    [id],
  )

  useEffect(() =>
    onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
      setLikes(snapshot.docs),
    ),
  )

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1,
      ),
    [likes, session],
  )

  return (
    <div
      key={id}
      className="bg-white col-span-1 w-full border border-gray-200 rounded-sm"
    >
      <div className="flex py-2 px-3 justify-between items-center">
        <div className="flex space-x-3 items-center">
          <img src={profileImage} className=" bg-black w-9 h-9 rounded-full" />
          <h6 className=" font-semibold">{username}</h6>
        </div>
        <DotsHorizontalIcon className="btn-sm text-gray-800" />
      </div>
      <img
        className="w-full object-contain overflow-hidden bg-gray-400"
        src={image}
        alt={caption}
      />
      <div className="p-3">
        {session && (
          <>
            <div className="flex justify-between">
              <div className="flex space-x-3 items-center">
                {hasLiked ? (
                  <HeartIconFilled
                    className="btn-lg text-red-500 transform scale-100 hover:scale-105 cursor-pointer transition-all duration-100 ease-out"
                    onClick={likePost}
                  />
                ) : (
                  <HeartIcon
                    className="btn-lg transform scale-100 hover:scale-105 cursor-pointer transition-all duration-100 ease-out"
                    onClick={likePost}
                  />
                )}
                <ChatAltIcon className="btn-lg" />
                <PaperAirplaneIcon className="btn-lg" />
              </div>
              <BookmarkIcon className="btn-lg" />
            </div>
            {likes && likes?.length > 0 && (
              <div className="mt-2">
                {likes?.length} {likes?.length > 1 ? 'likes' : 'like'}
              </div>
            )}
          </>
        )}
        <h6 className="my-2">
          <strong className=" font-semibold mr-2">{username}</strong>
          {caption}
        </h6>
        {comments && comments.length > 0 && (
          <div
            className="ml-2 flex gap-y-2 flex-col text-sm h-24 overflow-y-scroll
          scrollbar-hide
          "
          >
            {comments.map((comment) => (
              <Comment key={comment.id} data={comment} />
            ))}
          </div>
        )}
        {session && (
          <form className="w-full flex items-center" onSubmit={onCommentSubmit}>
            <img
              src={session.user.image}
              className="btn-lg rounded-full overflow-hidden bg-gray-400"
              alt={session.user.username}
            />
            <input
              className=" input-text-no-borders flex-1"
              placeholder="Type a comment"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              name=""
              id=""
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className=" text-blue-500 font-semibold disabled:opacity-50"
            >
              Post
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
