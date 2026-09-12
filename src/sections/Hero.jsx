import { profile } from "../constants";

const Hero = () => {
  return (
    <section id="top" className="section">
      <div className="wrap">
        <h1 className="h1">Hi, my name is Aniket.</h1>

        <div className="mt-6 flex flex-col gap-4">
          <p className="lead">{profile.blurb}</p>
          <p className="lead muted">{profile.blurb2}</p>
        </div>

        <p className="small muted mt-8">Use the navigation on the left to explore my work.</p>
      </div>
    </section>
  );
};

export default Hero;
