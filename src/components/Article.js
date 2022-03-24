import React from "react";

const Article = ({title, autor, text}) => {
  // const {title,autor,text} = props

  const styles = { backgroundColor: "#ddd", marginBottom:40 };

  return (
    <article className="article" style={styles}>
      <h3 style={{ marginTop: 5, textTransform:"uppercase" }}>{title}</h3>
      <span style={{ fontSize: 16, display: "block", marginTop: "20px",  }}>
        {autor}
      </span>
      <p style={{ fontSize: 15, fontWeight: "normal" }}>{text}</p>
    </article>
  );
};

export default Article;
