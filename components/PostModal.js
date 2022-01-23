import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import {
  serverTimestamp,
  updateDoc,
  addDoc,
  collection,
  doc,
} from 'firebase/firestore'
import { db, storage } from '../firebase'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'

export default function PostModal() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)
  const [selectedImage, setSelectedImage] = useState(null)
  const [uploading, setUploading] = useState(false)
  const imageFileRef = useRef(null)
  const captionRef = useRef(null)

  function closeModal() {
    setIsOpen(false)
    setSelectedImage(null)
  }

  function openModal() {
    setIsOpen(true)
  }

  function handleImageChange() {
    imageFileRef.current.click()
  }

  function handelImageSelect() {
    const reader = new FileReader()
    if (!imageFileRef.current.files[0]) return
    const file = imageFileRef.current.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setSelectedImage(reader.result)
    }
  }

  async function uploadPost() {
    if (uploading) return
    setUploading(true)
    // get posts collection
    // get the post ID
    // uplaod the image to firebase storage
    // get a download url from the storage and update the original post with image
    const docRef = await addDoc(collection(db, 'posts'), {
      username: session.user.username,
      caption: captionRef.current.value,
      profileImage: session.user.image,
      timestamp: serverTimestamp(),
    })

    console.log('Doc added with id of', docRef.id)

    const imageRef = ref(storage, `posts/${docRef.id}/image`)
    await uploadString(imageRef, selectedImage, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef)
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL,
        })
      },
    )
    closeModal()
    setUploading(false)
  }

  return (
    // Use the `Transition` component at the root level
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className="inline-block w-full max-w-md p-6 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded text-center
            "
            >
              <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-gray-900"
              >
                {selectedImage === null ? (
                  <>
                    <div
                      onClick={handleImageChange}
                      className="relative h-28 w-28 rounded-full mx-auto grid place-items-center bg-orange-100 p-4 cursor-pointer"
                    >
                      <div className=" absolute h-24 w-24 rounded-full bg-orange-200"></div>
                      <div className=" absolute h-20 w-20 rounded-full bg-orange-300"></div>
                      <CameraIcon className="absolute h-12 text-orange-900" />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      ref={imageFileRef}
                      hidden
                      onChange={handelImageSelect}
                    />
                    <h6 className="my-4 cursor-default">
                      Click To Select A Photo
                    </h6>
                  </>
                ) : (
                  <img
                    src={selectedImage}
                    alt="selected image"
                    className=" rounded-md bg-cover w-full"
                  />
                )}
              </Dialog.Title>
              {selectedImage && (
                <Dialog.Description>
                  <input
                    disabled={!selectedImage}
                    ref={captionRef}
                    type="textarea"
                    name=""
                    id=""
                    placeholder="Please type a caption..."
                    className="mt-4 font-semibold  input-text-no-borders input-text text-center"
                  />
                  <button
                    onClick={uploadPost}
                    disabled={uploading}
                    className="block  py-2 px-3 rounded-md w-32 mt-4 mx-auto font-bold bg-gray-900 hover:bg-black
                      text-white transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-500
                      hover:disabled:bg-gray-500
                      "
                  >
                    {uploading ? 'Uploading...' : 'Upload Post'}
                  </button>
                </Dialog.Description>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
