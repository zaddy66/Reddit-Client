import { AllPosts } from "../features/allPosts/allPosts";

function Home() {
  return (
    <>
      <nav>Logo</nav>
      <div className="ticks"></div>
      <section>
        <div className="container">
          <div className="main-wrapper">
            <AllPosts />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
