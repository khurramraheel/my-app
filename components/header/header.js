import { useRef } from 'react';
import './header.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/store/userReducer';


export default function Header(){

  let items = useSelector(function(store){
    return store.userData.items;
  })

  let user = useSelector(function(store){
    return store.userData.user;
  })


  // console.log(some.userData.names);

  let iTag = useRef();
  let router = useRouter();
  const dispatch = useDispatch();

    return  <nav className="navbar navbar-expand-lg bg-body-tertiary">

      
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">
      FLX
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        { user ? <li className="nav-item">
          Welcome <b>{user.name}</b>
        </li> : null}

        {user == null ? <li className="nav-item">
          <Link className="nav-link" href="/login">Login</Link>
        </li> : 
        
          <>
              <li className="nav-item">
                <Link onClick={function(){
                  
                  dispatch( setUser(null) );
                  localStorage.removeItem('ckey');

                }} className="nav-link" href="/login">Logout</Link>
              </li>
              { user?.role == 'admin' && <li className="nav-item">
                  <Link   className="nav-link" href="/users">Users</Link>
              </li>}
              <li className="nav-item">
                  <Link   className="nav-link" href="/create-product">Create Product</Link>
              </li>              
              <li className="nav-item">
                  <Link   className="nav-link" href="/my-products">My Products</Link>
              </li>
            
        </>

        
        }

        <li className="nav-item">
            <Link   className="nav-link" href="/signup">Signup</Link>
        </li>

        
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
            Cart
            <span className='cart-bubble'>
              {items.length}
            </span>
          </Link>
            
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          ref={iTag}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={function(evt){

          evt.preventDefault();

          let some = iTag.current.value;
          // alert(some);
          router.push('/search/'+some);

          // page chage krna


        }} className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

}