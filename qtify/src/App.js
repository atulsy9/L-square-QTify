import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";

const ENDPOINT = "https://qtify-backend-labs.crio.do";

function App() {
  const [topAlbum, setTopAlbums] = useState([]);
  const [newAlbum, setNewAlbums] = useState([]);

  useEffect(() => {
    topAlbumData();
    newAlbumData();
  }, []);

  const topAlbumData = async () => {
    try {
      let res = await axios.get(`${ENDPOINT}/albums/top`);
      setTopAlbums(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const newAlbumData = async () => {
    try {
      let res = await axios.get(`${ENDPOINT}/albums/new`);
      setNewAlbums(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <Section title="Top Albums" Data={topAlbum} id="1" />
    </>
  );
}

export default App;
