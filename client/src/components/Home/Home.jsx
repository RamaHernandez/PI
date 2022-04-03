import React from 'react';
import { getDogs } from '../../actions';
import Card from '../Card/Card';
import "./Home.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  useEffect(() => {
      dispatch(getDogs());
  }, [dispatch]);

  return (
      <div>
          {allDogs?.map(e => ((
                  <Link to="/home">
                      <Card img={e.imgUrl} name={e.name}/>
                  </Link>)
  ))}
      </div>
  )
}
