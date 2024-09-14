import Card from "../components/Card";
import styles from "./page.module.css";

const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Savings Account",
      isTopPick: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 2,
      title: "Current Account",
      isTopPick: false,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 3,
      title: "Fixed Deposit",
      isTopPick: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare non libero eu vulputate. Morbi ut ultricies sapien. Praesent cursus libero eu felis vehicula, vitae gravida orci varius.",
    },
    {
      id: 4,
      title: "Savings Account",
      isTopPick: true,
      description:
        "Sed vitae scelerisque sapien. Phasellus consectetur purus non justo auctor, ut vulputate purus pulvinar. In erat nisi, vehicula ac viverra at, accumsan non tellus.",
    },
    {
      id: 5,
      title: "Current Account",
      isTopPick: false,
      description:
        "Start your banking journey with HDFC Bank's Savings Account, explore a wide range of features & benefits with exclusive deals available with different account variants.",
    },
    {
      id: 6,
      title: "Fixed Deposit",
      isTopPick: false,
      description:
        "Start your banking journey with HDFC Bank's Savings Account, explore a wide range of features & benefits with exclusive deals available with different account variants.",
    },
  ];

  return (
    <div className={styles.body_main}>
      <div style={{ paddingLeft: "3rem", paddingTop: "1.5rem" }}>
        <h1 style={{ color: "#17153B" }}>Featured Products</h1>
        <p>Explore wide range of products and services that we offer</p>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            isTopPick={card.isTopPick}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
