/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'


import Link from 'next/link'

const navigation = ['About', 'Login', 'Signup']
const profile = ['Your Profile', 'Settings', 'Sign out']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    return (
    <div>
    <Disclosure as="nav" className="bg-transparent-800">
        {({ open }) => (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Link href="/">
                    <img
                        className="w-24"
                        src="/static/images/compil-logo.png"
                        alt="Compil logo"
                        />
                    </Link>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                        <Fragment key={item}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            {/* hover:bg-gray-700 hover:text-#E54B4B */}
                            <Link href={"/" + item.toLowerCase()} className="bg-#28262C-900 text-#28262C px-3 py-2 rounded-md text-sm font-medium">
                            {item}
                            </Link>
                        </Fragment>
                        ) : (
                        <Link
                            key={item}
                            href={"/" + item.toLowerCase()}
                            className="text-#28262C-300 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            {item}
                        </Link>
                        )
                        )}
                    </div>
                </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                    {/* //! NEEDED FOR LOGGED IN USER */}
                    <button className="bg-transparent-800 p-1 rounded-full text-#28262C-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                        <>
                          {/* //! NEEDED FOR LOGGED IN USER */}
                            <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                                />
                            </Menu.Button>
                            </div>
                            <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                            {profile.map((item) => (
                                <Menu.Item key={item}>
                                    {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                    >
                                    {item}
                                    </a>
                                    )}
                                </Menu.Item>
                                ))}
                            </Menu.Items>
                            </Transition>
                        </>
                        )}
                    </Menu>
                </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                <Disclosure.Button className="bg-transparent-800 inline-flex items-center justify-center p-2 rounded-md text-#28262C-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                </Disclosure.Button>
                </div>
            </div>
            </div>

            <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                    itemIdx === 0 ? (
                    <Fragment key={item}>

                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a href={"/" + item.toLowerCase()} className="bg-transparent-900 text-##28262C block px-3 py-2 rounded-md text-base font-medium">
                        {item}
                        </a>
                    </Fragment>
                    ) : (
                    <a
                        key={item}
                        href={"/" + item.toLowerCase()}
                        // className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        className="text-#28262C-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                    {item}
                    </a>
                )
                )}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    </div>
                    <div className="ml-3">
                    <div className="text-base font-medium leading-none text-#28262C">Tom Cook</div>
                    <div className="text-sm font-medium leading-none text-#28262C">tom@example.com</div>
                    </div>
                    {/* hover:text-white */}
                    <button className="ml-auto bg-#28262C flex-shrink-0 p-1 rounded-full text-#28262C hover:text-#28262C focus:outline-none focus:ring-2 focus:ring-#28262C">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                    {profile.map((item) => (
                    <a
                        key={item}
                        href="#"
                        // hover:text-white hover:bg-gray-700
                        className="block px-3 py-2 rounded-md text-base font-medium text-#28262C-400"
                    >
                        {item}
                    </a>
                    ))}
                </div>
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
        {/* <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        </div> */}
      {/* </main> */}
    </div>
    )
}

export default NavBar