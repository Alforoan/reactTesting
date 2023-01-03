import nature from "../images/natureBG.jpg";

const Home = () => {
  return (
    <main>
      <h1 className="welcome-text">Welcome to my to-do app</h1>
      <section className="home-section-container">
        <h4 className="first-text">
          - Head over to Quotes for some inspirational quotes to start off the
          day!
        </h4>
        <h4>
          - You can also set tasks for the day by visiting Important or To-Do.
        </h4>
        <h4>
          - Finally, clicking on the tasks will automatically complete them.
        </h4>
      </section>
    </main>
  );
};

export default Home;
