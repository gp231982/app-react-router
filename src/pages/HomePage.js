import React from "react";
import Article from "../components/Article.js"

const list = [
  {
    id: 1,
    autor: "Albert Einstain",
    title: "O początkach wszechświata..",
    text: "1111Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt, magnam consequatur itaque ullam veritatis sequi, hic, iste eos quas architecto at? Nesciunt, dolore magnam sed reiciendis unde harum voluptatem?",
  },
  {
    id: 2,
    autor: "Steve Jobs",
    title: "Jak doszło do powstania pierwszecho Macintosha...?",
    text: "2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt, magnam consequatur itaque ullam veritatis sequi, hic, iste eos quas architecto at? Nesciunt, dolore magnam sed reiciendis unde harum voluptatem?",
  },
  {
    id: 3,
    autor: "Michael Jordan",
    title: "Czy DreamTeam z Barcelony dalej byłby niepokonany...?",
    text: "3333Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt, magnam consequatur itaque ullam veritatis sequi, hic, iste eos quas architecto at? Nesciunt, dolore magnam sed reiciendis unde harum voluptatem?",
  },
];

const HomePage = () => {

// const articles = list.map(article => <Article key={article.id} autor={article.autor} title={article.title} text={article.text}/>)

const articles = list.map(article => <Article key={article.id} {...article}/>)

  return <h3>{articles}</h3>;
};

export default HomePage;
