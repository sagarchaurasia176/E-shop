import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

import Logo from "../../img/logo.png";
const Homapage = () => {
  return (
    <>
      {/* section-1 */}
      <div className="  w-[1263px] gap-32   h-[881px]  bg-slate-900">
        {/* another div here  */}
        <div className=" flex   text-center p-2 bg-black justify-between">
          {/* div for main nav */}
          <div className="  p-2 w-[130px] ">
            <img src={Logo} alt="" />
          </div>
          {/* menu bar */}
          <div className="   hidden md:block  w-[816px] h-32   space-x-10">
            <Link className="   w-[70px] h-[32px]  space-x-10  font-thin text-white  size-16  justify-center">
              Home
            </Link>
            <Link className="   w-[70px] h-[32px]  space-x-10 font-thin text-white  size-16  justify-center">
              About
            </Link>
            <Link className="   w-[70px] h-[32px] p-1  space-x-10 font-thin text-white  size-16  justify-center">
              Contact
            </Link>
            <Link className="   w-[70px] h-[32px] p-1  space-x-10 font-thin text-white  size-16  justify-center">
              Products
            </Link>
          </div>
          {/* last div for cart page */}

          <Link className=" w-20  p-2  font-thin text-white ">
            <CiShoppingCart className=" size-8" />
          </Link>

          {/* nex div */}
        </div>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corrupti id vero quisquam voluptate quis commodi atque voluptas?
          Consectetur molestias, fuga numquam deserunt praesentium, nesciunt
          illo temporibus accusantium cum maiores similique debitis ipsum
          doloribus voluptatum distinctio molestiae cupiditate corporis eius
          ratione, dolor porro aliquid. Excepturi aliquid nemo suscipit, aut
          culpa qui est aliquam nam ullam voluptate, molestiae, odio labore.
          Quis autem architecto esse unde, obcaecati dicta? Magnam earum a minus
          eius illum animi esse et distinctio harum, nesciunt dolorum cumque
          voluptate, quas nostrum modi voluptatem quo cupiditate repudiandae
          illo quisquam laboriosam nisi possimus dicta. Rerum similique
          assumenda doloremque autem possimus, dolores dolorem aliquam ab fuga
          ducimus debitis, beatae amet eos tenetur ipsum. Aperiam, ut? Quae
          commodi deleniti perspiciatis doloribus rerum, minima dolore iste.
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae corrupti
        id vero quisquam voluptate quis commodi atque voluptas? Consectetur
        molestias, fuga numquam deserunt praesentium, nesciunt illo temporibus
        accusantium cum maiores similique debitis ipsum doloribus voluptatum
        distinctio molestiae cupiditate corporis eius ratione, dolor porro
        aliquid. Excepturi aliquid nemo suscipit, aut culpa qui est aliquam nam
        ullam voluptate, molestiae, odio labore. Quis autem architecto esse
        unde, obcaecati dicta? Magnam earum a minus eius illum animi esse et
        distinctio harum, nesciunt dolorum cumque voluptate, quas nostrum modi
        voluptatem quo cupiditate repudiandae illo quisquam laboriosam nisi
        possimus dicta. Rerum similique assumenda doloremque autem possimus,
        dolores dolorem aliquam ab fuga ducimus debitis, beatae amet eos tenetur
        ipsum. Aperiam, ut? Quae commodi deleniti perspiciatis doloribus rerum,
        minima dolore iste.
      </p>
      {/* section-2 */}
      {/* section-3 */}
      {/* section-4 */}
    </>
  );
};

export default Homapage;
