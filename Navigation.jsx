import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/mohit55.png';
import profile from '../../assets/mohitoo.jpg';

const navigation = [
  { name: 'Home', href: '#hero', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Services', href: '#services', current: false },
  { name: 'Projects', href: '#mywork', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Example() {
  return (
    <Disclosure as="nav" className="bg-stone-950 ">
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-5 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className=" flex  flex-1 items-center justify-center sm:items-stretch sm:justify-evenly">
            <div className="flex shrink-0 items-center">
              <a href="/">
              <img
                alt="Your Company"
                src={logo}
                className="h-10 w-auto"
              /></a>
            </div>
            <div className=" hidden sm:ml-6 sm:block">
              <div className="flex gap-[40px] items-center space-x-[60px] ">
                {navigation.map((item) => (
                  <AnchorLink
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ?'' : '',
                'block rounded-md px-3 py-2 text-[25px] text-base font-medium',
                    )}
                  >
                    {item.name}
                  </AnchorLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 sm:justify-around right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    href="#footer"
                    src={profile}
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
  <div className="flex flex-col items-center space-y-2 px-4 py-4">
    {navigation.map((item) => (
      <DisclosureButton
        key={item.name}
        as="a"
        
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        className={classNames(
          item.current 
            ? ' text-white text-[20px] ' 
            : ' hover:bg-indigo-100 hover:text-indigo-600',
          'block w-full rounded-lg px-4 py-3 text-center font-medium transition-colors duration-200',
        )}
      >
        {item.name}
      </DisclosureButton>
    ))}

  </div>
</DisclosurePanel>
    </Disclosure>
  )
}
