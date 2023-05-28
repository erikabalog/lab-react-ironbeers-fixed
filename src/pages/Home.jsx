import beersImg from "../assets/beers.png";
import randomImg from "../assets/random-beer.png";
import newImg from "../assets/new-beer.png";
import ReUsableCard from "../assets/components/ReUsableCard";
import { Link } from "react-router-dom";

const style= { textDecoration: "none", color: "black" };

function Home() {
  const ReUsableCardArr = [
    {
      title: "All Beers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut feugiat est. Duis placerat ante nec elit tempor aliquam. Curabitur luctus neque finibus augue posuere, id rhoncus diam finibus. Nam lobortis lectus ac leo auctor tincidunt. Curabitur id convallis lorem. Morbi consequat augue tortor, et tempus enim semper vitae. Praesent laoreet non nunc quis maximus. Proin sed neque fringilla eros tristique posuere. Vivamus fringilla, lectus nec rhoncus bibendum, felis nibh vestibulum dolor, id euismod odio turpis at sem. Fusce facilisis neque vel arcu gravida, vel dictum eros venenatis.",
      picture: beersImg,
    },
    {
      title: "Random Beer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut feugiat est. Duis placerat ante nec elit tempor aliquam. Curabitur luctus neque finibus augue posuere, id rhoncus diam finibus. Nam lobortis lectus ac leo auctor tincidunt. Curabitur id convallis lorem. Morbi consequat augue tortor, et tempus enim semper vitae. Praesent laoreet non nunc quis maximus. Proin sed neque fringilla eros tristique posuere. Vivamus fringilla, lectus nec rhoncus bibendum, felis nibh vestibulum dolor, id euismod odio turpis at sem. Fusce facilisis neque vel arcu gravida, vel dictum eros venenatis.",
      picture: randomImg,
    },
    {
      title: "New Beer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut feugiat est. Duis placerat ante nec elit tempor aliquam. Curabitur luctus neque finibus augue posuere, id rhoncus diam finibus. Nam lobortis lectus ac leo auctor tincidunt. Curabitur id convallis lorem. Morbi consequat augue tortor, et tempus enim semper vitae. Praesent laoreet non nunc quis maximus. Proin sed neque fringilla eros tristique posuere. Vivamus fringilla, lectus nec rhoncus bibendum, felis nibh vestibulum dolor, id euismod odio turpis at sem. Fusce facilisis neque vel arcu gravida, vel dictum eros venenatis.",
      picture: newImg,
    },
  ];

  return (
    <div>
      <Link to="/beers" style={style}>
        <ReUsableCard
          title={ReUsableCardArr[0].title}
          description={ReUsableCardArr[0].description}
          picture={ReUsableCardArr[0].picture}
        />
      </Link>
      <Link
        to="/random-beer"
        style={style}
      >
        <ReUsableCard
          title={ReUsableCardArr[1].title}
          description={ReUsableCardArr[1].description}
          picture={ReUsableCardArr[1].picture}
        />
      </Link>
      <Link to="/new-beer" style={style}>
        <ReUsableCard
          title={ReUsableCardArr[2].title}
          description={ReUsableCardArr[2].description}
          picture={ReUsableCardArr[2].picture}
        />
      </Link>
    </div>
  );
}

export default Home;
