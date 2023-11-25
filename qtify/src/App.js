import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import FAQsection from "./components/FAQsection";

const ENDPOINT = "https://qtify-backend-labs.crio.do";

function App() {
  const [topAlbum, setTopAlbums] = useState([]);
  const [newAlbum, setNewAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    topAlbumData();
    newAlbumData();
    getGenres();

    (async () => {
      const data = await setAllSongs();
      setSongs(data);
    })();
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

  const getGenres = async () => {
    try {
      let res = await axios.get(`${ENDPOINT}/genres`);
      setGenres(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const setAllSongs = async () => {
  //   try {
  //     let res = await axios.get(`${ENDPOINT}/songs`);
  //     setSongs(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(songs);
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Navbar />
      <HeroSection />
      <Section title="Top Albums" Data={topAlbum} id="1" tabView={false} />
      <Section title="New Albums" Data={newAlbum} id="2" tabView={false} />
      <Section
        title="Songs"
        Data={songs}
        id="3"
        tabView={true}
        genresData={genres}
      />
      <FAQsection />
    </div>
  );
}

export const setAllSongs = async () => {
  try {
    let res = await axios.get(`${ENDPOINT}/songs`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default App;
