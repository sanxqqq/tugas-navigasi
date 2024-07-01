import React from 'react';
import { ScrollView, View } from 'react-native';
import Contact from './components/kontak';

function Contactlist() {
  return (
    <ScrollView>
      <Contact 
        gambar={require("./assets/anisa.jpg")}
        judul="anisaaa"
        telpon="0765535531"
      />
      <Contact 
        gambar={require("./assets/ryan.jpg")}
        judul="ryan garcia"
        telpon="0765535531"
      />
      <Contact 
        gambar={require("./assets/ryan.jpg")}
        judul="wahyu"
        telpon="0765535531"
      />
      <Contact 
        gambar={require("./assets/ryan.jpg")}
        judul="alwi sihab"
        telpon="0765535531"
      />
      <Contact 
        gambar={require("./assets/ryan.jpg")}
        judul="zhaldy"
        telpon="0765535531"
      />
      <Contact 
        gambar={require("./assets/ryan.jpg")}
        judul="baba"
        telpon="0765535531"
      />
      <Contact 
        gambar={require("./assets/ryan.jpg")}
        judul="lulu"
        telpon="0765535531"
      />
    </ScrollView>
  );
}

export default function App() {
  return <Contactlist />;
}
