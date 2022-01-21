import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'

export default function PostModal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState)
  function closeModal() {
    setIsOpen(false)
    setSelectedImage(null)
  }

  function openModal() {
    setIsOpen(true)
  }

  const imageFileRef = useRef(null)
  function handleImageChange() {
    imageFileRef.current.click()
  }
  const [selectedImage, setSelectedImage] = useState(null)
  function handelImageSelect() {
    const reader = new FileReader()
    if (!imageFileRef.current.files[0]) return
    const file = imageFileRef.current.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setSelectedImage(reader.result)
    }
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
                      className=" h-20 w-20 rounded-full mx-auto grid place-items-center bg-orange-300 p-4 cursor-pointer"
                    >
                      <CameraIcon className="" />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      ref={imageFileRef}
                      hidden
                      onChange={handelImageSelect}
                    />
                    <h3 className="my-4 cursor-default">Upload a photo</h3>
                  </>
                ) : (
                  <img
                    src={selectedImage}
                    alt="selected image"
                    className=" rounded-md"
                  />
                )}
              </Dialog.Title>
              {selectedImage && (
                <Dialog.Description>
                  <input
                    type="textarea"
                    name=""
                    id=""
                    placeholder="Enter type a caption..."
                    className="mt-4 border-none font-semibold focus:border-none focus:ring-0 focus:outline-none text-center"
                  />
                  <button className="block  py-2 px-3 rounded-md w-32 mt-4 mx-auto font-bold bg-black  text-white transition-all duration-300">
                    Post
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
